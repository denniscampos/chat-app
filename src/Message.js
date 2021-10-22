import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

const Message = ({ text }) => {
  // Auth Info
  const auth = getAuth();
  const [user] = useAuthState(auth);

  return (
    <div>
      {user.photoURL ? <img src={user.photoURL} alt="avatar" /> : null}
      {user.displayName ? <p>{user.displayName}</p> : null}
      <p>{text}</p>
    </div>
  );
};

export default Message;
