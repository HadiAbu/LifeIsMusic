const Error = ({ message }) => (
  <div className="w-full flex flex-col justify-center items-center ">
    <h1 className="font-bold text-xl text-white mt-2">
      Something went wrong, please try again.
    </h1>
    {message && (
      <h3 className="font-thin text-xl text-white mt-2">{message}</h3>
    )}
  </div>
);

export default Error;
