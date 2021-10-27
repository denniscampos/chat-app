const Message = ({
  text = "",
  photoURL = "",
  displayName = "",
  timestamp = null,
}) => {
  if (!timestamp) return "";

  return (
    <div className="relative">
      <div className="user__information flex mt-5">
        {photoURL ? (
          <img className="rounded-full w-20" src={photoURL} alt="Avatar" />
        ) : null}
        {displayName ? (
          <span className="text-base ml-2 mt-2 text-textSecondary text-colorTwo">
            {displayName}
          </span>
        ) : null}
        {displayName ? (
          <span className="text-xs ml-3 mt-3 text-colorFour">
            {new Date(timestamp.seconds * 1000).toLocaleString("en-US")}
          </span>
        ) : null}
      </div>
      <p className="text-colorOne absolute left-24 top-12">{text}</p>
    </div>
  );
};

export default Message;
