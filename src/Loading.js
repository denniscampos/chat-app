import ReactLoading from "react-loading";
import Header from "./Header";

const Loading = ({ type, color }) => (
  <>
    <ReactLoading
      type={type}
      color={color}
      height={300}
      width={150}
      className="m-auto"
    />
  </>
);

export default Loading;
