import { useState, useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import db from "./firebase/config";
import {
  onSnapshot,
  query,
  addDoc,
  collection,
  serverTimestamp,
  orderBy,
  limit,
} from "firebase/firestore";
import Message from "./Message";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // to store query
  const lastMessages = useRef();

  // Auth Info
  const auth = getAuth();
  const [user] = useAuthState(auth);

  const q = query(
    collection(db, "messages"),
    orderBy("timestamp", "desc"),
    limit(10)
  );

  useEffect(() => {
    //sub to query with onsnapshot
    if (messages !== lastMessages.current) {
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMessages(data);
      });
      //clean up
      return unsubscribe;
    }
    // despite linter asking for "q" - it runs an infite loop. Do not include.
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "messages"), {
      photoURL: user.photoURL,
      text: newMessage,
      displayName: user.displayName,
      uid: user.uid,
      timestamp: serverTimestamp(),
    });
    setNewMessage("");
  };

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <>
      <ul className="flex flex-col-reverse">
        {messages.map((message) => (
          <li className="text-textPrimary font-bold" key={message.id}>
            <Message {...message} />
          </li>
        ))}
      </ul>

      <form
        className="my-20 w-full relative inline-flex"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-bgTwo px-4 py-3 rounded-lg w-full placeholder-colorFour focus:text-colorOne text-xl"
          type="text"
          value={newMessage}
          onChange={handleChange}
          placeholder="Type your message here..."
        />
        <button
          className="text-colorFive absolute top-4 right-7 font-bold "
          type="submit"
          disabled={!newMessage}
        >
          SEND
        </button>
      </form>
    </>
  );
};

export default Chatbox;
