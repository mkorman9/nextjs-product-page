'use client';

import {MdError} from 'react-icons/md';

const Error = () => {
  return (
    <div className="flex flex-col w-screen justify-center items-center gap-6 text-white">
      <MdError size={48} />
      <span className="text-3xl">Oops</span>
      <span className="text-xl">{'Something went wrong, please try again later'}</span>
    </div>
  );
};

export default Error;
