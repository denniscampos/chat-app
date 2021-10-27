import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const Signin = () => {
  const login = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    await signInWithRedirect(auth, provider);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-colorOne text-5xl text-center font-bold my-4">
        WELCOME TO CHAT BOXY
      </h1>
      <p className="text-colorTwo text-3xl font-bold">
        SIGN IN TO GET STARTED{" "}
      </p>
      {/* <button onClick={login}>Sign in</button> */}
    </div>
  );
};

export default Signin;
