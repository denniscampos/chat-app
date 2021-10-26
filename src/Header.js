import Auth from "./Auth";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold my-3 text-textPrimary">ChatBoxy</h1>
      <Auth />
    </div>
  );
};

export default Header;
