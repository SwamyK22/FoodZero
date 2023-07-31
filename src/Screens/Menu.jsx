import React from "react";
import Header from "../Component/Header";

const Menu = () => {
  return (
    <div>
      <img
        src={require("../assets/menu.png")}
        alt="menuPage"
        className="sm:h-[100vh] sm:w-full"
      />
      <div className="absolute w-full top-0 sm:px-10">
        <Header />
        <p className="text-9xl font-[rufina] text-white w-[40vw] mt-[20vh] ml-5 ">
          View Our New Menu
        </p>
        <p className="text-white text-3xl font-[rufina] ml-5">
          The freshest ingredients for you every day
        </p>
      </div>
      <div>
        <img
          src={require("../assets/Blueberry.png")}
          alt="blueberryImage"
          className="absolute right-0"
        />
        <p className="text-6xl font-[rufina] text-center pt-[30vh]">Starters</p>
        <p className="text-xl font-[rufina] text-center">This a section of your menu. Give your section a brief description</p>
      </div>
    </div>
  );
};

export default Menu;
