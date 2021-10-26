import { useAuthState } from "react-firebase-hooks/auth";
import {
  getAuth,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
// import logo from "./chat-boxy-logo.svg";
import { ReactComponent as Logo } from "./chat-boxy-logo.svg";

const Header = () => {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    await signInWithRedirect(auth, provider);
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

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

  return (
    <div className="header flex flex-row border-b-4 border-colorThree py-10 justify-between">
      <div className="header__left flex px-5 items-center">
        {/* <img className="object-contain h-16 text-colorTwo" src={logo} alt="" /> */}
        <Logo className="object-contain h-16 px-5" fill="#ff6d00" />
        <h1 className="text-4xl text-colorOne px-5 font-bold">Chat Boxy</h1>
      </div>
      <div className="header__right px-5 flex items-center">
        {user ? (
          <button
            onClick={logout}
            className="rounded-md bg-bgTwo text-colorOne px-8 py-2 font-bold"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={login}
            className="rounded-md bg-bgTwo text-colorOne px-8 py-2 font-bold"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
