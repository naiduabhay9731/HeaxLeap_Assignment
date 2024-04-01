// components/FeatureCard.tsx

import React from "react";

interface FeatureCardProps {
  imageUrl: string;
  timing:string;
  description: string;
  description2: string;
  buttonText: string;
  isDarkMode:boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageUrl,
  timing,
  description,
  description2,
  buttonText,
  isDarkMode,
}) => {
  var bg;
  (isDarkMode)?(bg='bg-darkBackground'):(bg='bg-customBackground');
  var text_col;
  (isDarkMode)?(text_col='text-customBackground'):(text_col='text-darkBackground');
  console.log(isDarkMode);
  return (
    <div className="relative ">
      <div className={"flex w-auto flex-col items-center justify-center p-2 border border-gray-500 "+bg}>
        <img
          src={imageUrl}
          alt="Feature Image"
          className="object-cover mb-2"
        />
        <div className="w-full py-2 border-t-2 border-dashed border-gray-400 mt-4"></div>
        
        <p className={"font-bold p-2 text-sm "+text_col}>{description}</p>
        <p className={" p-2 text-xs "+text_col}>{timing}</p>
        <p className={" p-2 text-sm "+text_col}>{description}</p>
        <button className="mt-2 px-2 py-2 text-sm bg-black text-customBackground">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
