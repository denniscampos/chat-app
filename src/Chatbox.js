import { useState, useEffect } from "react";
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
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(data);
    });

    //clean up
    return unsubscribe;
  }, [q]);

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
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <Message {...messages} />
            {messages.text}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={handleChange}
          placeholder="whats on your mind?"
        />
        <button type="submit" disabled={!newMessage}>
          send
        </button>
      </form>
    </>
  );
};

export default Chatbox;
