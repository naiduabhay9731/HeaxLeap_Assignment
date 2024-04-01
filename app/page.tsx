"use client"
import React, { useState } from 'react';
import CardContainer from "./CardContainer";

import FeatureCardsCarousel from "./FeatureCardsCarousel";

const cardData = [
  {
    imageUrl: 'image1.png',
    title: 'Sacramento River Cats',
    description: '14 Events',
    moreDescription: 'Baseball',
  },
  {
    imageUrl: 'image2.png',
    title: 'Las Vegas Aviators',
    description: '14 Events',
    moreDescription: 'Baseball',
  },
  {
    imageUrl: 'image3.png',
    title: 'New Jersey Devils',
    description: '14 Events',
    moreDescription: 'Ice Hockey',
  },
  {
    imageUrl: 'image5.png',
    title: 'Las Vegas Aviators',
    description: '14 Events',
    moreDescription: 'Baseball',
  },
  
];

const featureCardsData = [
 
  {
    imageUrl: "/image20.png",
    timing:"Oct 15|SUN|4:30 PM",
    description: "Las Vegas Aviators",
    description2:"Las Vegas Ball Park,Las Vegas,Nevada",
    buttonText: "Take Flight Collection",
  },
  
  {
    imageUrl: "/image21.png",
    timing:"Oct 15|SUN|4:30 PM",
    description: "Sacramento River Cats",
    description2:"Sutter Health Park,Sacramento,California",
    buttonText: "Orange Collection",
  },
  {
    imageUrl: "/image20.png",
    timing:"Oct 15|SUN|4:30 PM",
    description: "Las Vegas Aviators",
    description2:"Las Vegas Ball Park,Las Vegas,Nevada",
    buttonText: "Take Flight Collection",
  },
  {
    imageUrl: "/image21.png",
    timing:"Oct 15|SUN|4:30 PM",
    description: "Sacramento River Cats",
    description2:"Sutter Health Park,Sacramento,California",
    buttonText: "Orange Collection",
  },
  {
    imageUrl: "/image20.png",
    timing:"Oct 15|SUN|4:30 PM",
    description: "Las Vegas Aviators",
    description2:"Las Vegas Ball Park,Las Vegas,Nevada",
    buttonText: "Take Flight Collection",
  },
  {
    imageUrl: "/image21.png",
    timing:"Oct 15|SUN|4:30 PM",
    description: "Sacramento River Cats",
    description2:"Sutter Health Park,Sacramento,California",
    buttonText: "Orange Collection",
  },
];

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  var bg;
  (isDarkMode)?(bg='bg-darkBackground'):(bg='bg-customBackground');
  return (
    <div className={bg}>
      <div className={"mt-8  "+bg}>
      <header className="py-4">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
        <CardContainer cardData={cardData} isDarkMode={isDarkMode}/>
        <FeatureCardsCarousel featureCards={featureCardsData} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Home;
