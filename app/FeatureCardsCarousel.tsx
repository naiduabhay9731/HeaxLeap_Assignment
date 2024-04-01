// components/FeatureCardsCarousel.tsx
"use client";

import React, { useState } from "react";
import FeatureCard from "./FeatureCard";

interface FeatureCardsCarouselProps {
  featureCards: { imageUrl: string; timing:string; description: string; description2:string; buttonText: string }[]
  ;
  isDarkMode:boolean;
}

const FeatureCardsCarousel: React.FC<FeatureCardsCarouselProps> = ({
  featureCards,isDarkMode
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const prevCards = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const nextCards = () => {
    setStartIndex((prevIndex) =>
      Math.min(featureCards.length - 3, prevIndex + 1)
    );
  };
  var bg;
  (isDarkMode)?(bg='bg-darkBackground'):(bg='bg-customBackground');
  var text_col;
  (isDarkMode)?(text_col='text-customBackground'):(text_col='text-darkBackground');
  console.log(isDarkMode);

  return (
    <div className={"flex flex-col flex-row justify-center items-center  shadow-md p-4  from-gray-900 to-gray-800 p-4 mx-36"+bg}>
      <div className={"text-5xl my-4 "+text_col}>Collection Spotlight</div>
      <div className={"text-center  my-2 text-sm"+text_col}>
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        <br />
        experience. Grab yours today!
      </div>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={prevCards}
          className="px-4 py-2 mr-4 text-blue-500 border border-blue-500"
        >
          &lt;
        </button>
        {featureCards.slice(startIndex, startIndex + 3).map((card, index) => (
          <div key={index} className="mr-4">
            <FeatureCard
              imageUrl={card.imageUrl}
              timing={card.timing}
              description={card.description}
              description2={card.description2}
              buttonText={card.buttonText}
              isDarkMode={isDarkMode}
            />
          </div>
        ))}
        <button
          onClick={nextCards}
          className="px-2 py-2 text-blue-500 border border-blue-500"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default FeatureCardsCarousel;
