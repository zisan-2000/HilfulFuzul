// Slide.js

import React from "react";
import SlideButton from "./SlideButton";

const Slide = ({ slide }) => {
  return (
    <div
      className="relative flex h-[90vh] min-h-screen w-full items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
      <div className="z-10 flex h-full flex-col items-center justify-center px-8 text-center text-white md:px-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-orange-500 drop-shadow-md md:text-7xl">
          {slide.title}
        </h1>
        <p className="mb-6 text-2xl drop-shadow-md md:text-3xl">
          {slide.subtitle}
        </p>
        <p className="mb-8 max-w-3xl text-lg drop-shadow-md md:text-xl">
          {slide.description}
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
          {slide.buttons.map((button, index) => (
            <SlideButton key={index} button={button} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
