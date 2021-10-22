import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const Signin = () => {
  const login = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    await signInWithRedirect(auth, provider);
  };

  return (
    <div>
      <button onClick={login}>Sign in</button>
    </div>
  );
};

export default Signin;
