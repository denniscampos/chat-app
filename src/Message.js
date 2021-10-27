import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
// import { getDocs, collection, query } from "firebase/firestore";
// import db from "./firebase/config";

const Message = () => {
  const [text, setText] = useState([]);
  // Auth Info
  const auth = getAuth();
  const [user] = useAuthState(auth);

  // const getDocuments = async () => {
  //   const querySnapshot = await getDocs(collection(db, "messages"));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     let textData = doc.data();
  //     setText(textData.text);
  //   });
  //   return querySnapshot;
  // };

  // getDocuments();

  return (
    <div>
      <div className="user__information flex mt-5">
        {user.photoURL ? (
          <img className="rounded-full w-20" src={user.photoURL} alt="Avatar" />
        ) : null}
        {user.displayName ? (
          <span className="text-base ml-2 mt-2 text-textSecondary text-colorTwo">
            {user.displayName}
          </span>
        ) : null}
        {user.displayName ? (
          <span className="text-xs ml-3 mt-3 text-colorFour">
            Today at 7:32 PM
          </span>
        ) : null}
      </div>
      <p className="text-colorOne pl-20">dummy text</p>
    </div>
  );
};

export default Message;
