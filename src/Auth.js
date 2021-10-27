import Chatbox from "./Chatbox";
import Signin from "./Signin";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import Loading from "./Loading";

const Auth = () => {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading type="spokes" color="#ff9e00" />;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container px-10">{user ? <Chatbox /> : <Signin />}</div>
  );
};

export default Auth;
