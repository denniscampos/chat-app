import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

const Message = ({ text }) => {
  // Auth Info
  const auth = getAuth();
  const [user] = useAuthState(auth);

  return (
    <div>
      <div className="user__information flex items-center py-6">
        {user.photoURL ? (
          <img className="rounded-full w-20" src={user.photoURL} alt="avatar" />
        ) : null}
        {user.displayName ? (
          <p className="text-2xl ml-2 text-textSecondary">{user.displayName}</p>
        ) : null}
      </div>
    </div>
  );
};

export default Message;
