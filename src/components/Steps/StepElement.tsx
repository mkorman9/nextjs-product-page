import React from 'react';

export type StepElementProps = {
  marker: string;
  text: string;
};

const StepElement: React.FC<StepElementProps> = ({marker, text}) => {
  return (
    <li className="mb-4">
      <div className="flex text-gray-100 items-center">
        <span className="flex w-10 h-10 border-2 border-gray-100 rounded-full mr-4
                         text-3xl font-bold justify-center items-center
                         bg-gray-100 text-green-500">
          {marker}
        </span>
        <span className="text-xl">{text}</span>
      </div>
    </li>
  );
};

export default StepElement;
