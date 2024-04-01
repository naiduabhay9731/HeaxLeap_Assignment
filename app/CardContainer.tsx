"use client";

import React from "react";
import Card from "./Card";

interface CardData {
  imageUrl: string;
  title: string;
  description: string;
  moreDescription: string;
}

interface CardContainerProps {
  cardData: CardData[];
  isDarkMode: boolean;
}
const adv = {
  imageUrl: "image4.png",
  title: "Advertisement Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  moreDescription: "More Description for Card 5",
};

const CardContainer: React.FC<CardContainerProps> = ({ cardData,isDarkMode }) => {
  console.log(isDarkMode);
  var bg;
  var bg2;
  isDarkMode ? (bg2 = "bg-customBackground2") : (bg2 = "bg-customBackground");
  
  (isDarkMode)?(bg='bg-darkBackground'):(bg='bg-customBackground');
  var text_col;
  (isDarkMode)?(text_col='text-customBackground'):(text_col='text-darkBackground');
  console.log(text_col);
  console.log(bg);
  return (
    <div className={' mb-4 mx-36 '+bg }>
      <div className={"text-4xl my-3 "+text_col}>Sports</div>
      <div className="flex justify-center container mx-auto px-2 sm:px-4 lg:px-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
        {cardData.map((data, index) => (
          <Card key={index} isDarkMode={isDarkMode}
            imageUrl={data.imageUrl}
            title={data.title}
            description={data.description}
            moreDescription={data.moreDescription}
          />
        ))}
        <div className="flex justify-center">
          {" "}
          <div className={" shadow-md p-4 border border-gray-500 " + bg2}>
            <img
              src={adv.imageUrl}
              alt={adv.title}
              className=" object-cover mb-2 "
            />
            <h2 className={text_col+" text-lg font-semibold mb-1"}>
              {adv.title}
            </h2>
            <div className={" flex p-2 rounded-md"+bg}>
            <p className={"text-sm "+text_col}>{adv.description}</p>
          </div>
          </div>
          
        </div>
      </div>
      <button className="bg-blue-500 text-white font-bold my-2 py-4 px-4 rounded mx-auto block">See More</button>
    </div>
  );
};

export default CardContainer;
