import Auth from "./Auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

const Header = () => {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="container flex flex-col justify-center items-center border-b-8 border-backgroundSecondary">
      <h1 className="text-4xl font-bold my-6 text-textPrimary">Chat Boxy</h1>
      {user ? (
        <span className="text-4xl my-4 text-textSecondary">
          Welcome:
          {" " + user.displayName}
        </span>
      ) : null}
    </div>
  );
};

export default Header;
