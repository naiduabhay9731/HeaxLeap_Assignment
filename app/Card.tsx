// Card.tsx
import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  moreDescription: string;
  isDarkMode: boolean;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  moreDescription,
  isDarkMode,
}) => {
  var bg;
  isDarkMode ? (bg = "bg-darkBackground") : (bg = "bg-customBackground");
  var bg2;
  isDarkMode ? (bg2 = "bg-customBackground2") : (bg2 = "bg-customBackground");
  var text_col;
  isDarkMode
    ? (text_col = "text-customBackground")
    : (text_col = "text-darkBackground");
  console.log(isDarkMode);
  return (
    <div className={"flex justify-center"}>
      {" "}
      <div className={" shadow-md p-4 border border-gray-500 " + bg2}>
        <img src={imageUrl} alt={title} className=" object-cover mb-2 " />
        <h2 className={"text-lg font-semibold  mb-1 "+text_col }>{title}</h2>

        <div className={"flex p-2 rounded-md " + bg}>
          <div style={{ marginRight: "20px" }}>
            <p className={" text-xs " + text_col}>Total Events</p>
            <h2 className={" font-bold p-2  " + text_col}>{description}</h2>
          </div>
          <div>
            <p className={" text-xs " + text_col}>Sport</p>
            <h2 className={"  font-bold p-2 " + text_col}>{moreDescription}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
