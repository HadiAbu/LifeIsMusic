import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} className="object-contain w-32 h-32" alt="loader" />
    <h1 className="font-bold text-xl text-white mt-2">
      {title || 'Loading...'}
    </h1>
  </div>
);

export default Loader;
