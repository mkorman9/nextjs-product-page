import {FaMagnifyingGlass} from 'react-icons/fa6';

const NotFound = () => {
  return (
    <div className="flex flex-col w-screen justify-center items-center gap-6 text-white">
      <FaMagnifyingGlass size={48} />
      <span className="text-3xl">404</span>
      <span className="text-xl">{'We cannot find what you\'re looking for'}</span>
    </div>
  );
};

export default NotFound;
