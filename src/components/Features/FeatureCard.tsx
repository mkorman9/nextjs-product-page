import React from 'react';

export type FeatureCardProps = {
  children: React.ReactNode;
};

const FeatureCard: React.FC<FeatureCardProps> = ({children}) => {
  return (
    <div className="flex flex-col lg:w-[20vw] max-lg:w-[80vw] h-[50vh]
                    justify-center items-center gap-20
                    text-xl
                    bg-gradient-to-b from-gray-100 to-gray-300 border-2 rounded-xl drop-shadow-2xl">
      {children}
    </div>
  );
};

export default FeatureCard;
