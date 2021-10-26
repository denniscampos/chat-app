import Chatbox from "./Chatbox";
import Signin from "./Signin";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";

const Auth = () => {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <p>Logging in User...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* <img src={user ? user.photoURL : null} alt="" /> */}
      {user ? (
        <span className="text-4xl text-textSecondary">
          Welcome: {user.displayName}
        </span>
      ) : null}
      {user ? <Chatbox /> : <Signin />}
      {auth.currentUser ? <button onClick={logout}>Signout</button> : null}
    </div>
  );
};

export default Auth;
