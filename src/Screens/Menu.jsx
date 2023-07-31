import React from "react";
import MakeReservation from "../Component/MakeReservation";

const Menu = () => {
  return (
    <div>
      <img
        src={require("../assets/menu.png")}
        alt="menuPage"
        className="sm:h-[100vh] sm:w-[100vw]"
      />
      <div className="absolute w-full top-0 sm:px-10">
        <p className="sm:text-9xl text-base font-[rufina] text-white w-20vw sm:w-[40vw] mt-[15vh] sm:mt-[20vh] ml-5 ">
          View Our New Menu
        </p>
        <p className="text-white text-xs sm:text-3xl font-[rufina] ml-5">
          The freshest ingredients for you every day
        </p>
      </div>
      <div>
        <img
          src={require("../assets/Blueberry.png")}
          alt="blueberryImage"
          className="absolute right-0 w-[25vw] sm:w-[30vw]"
        />
        {/* Starters */}
        <div className="pt-[3vh] sm:pt-[30vh]">
        <p className="text-2xl sm:text-6xl font-[rufina] text-center font-bold">Starters</p>
        <p className="sm:text-lg text-[6px] font-[rufina] sm:my-4 text-center">
          This a section of your menu. Give your section a brief description
        </p>
        <div className="mx-[6vw] sm:mx-[2vw] my-[2vh] sm:my-[6vh] flex gap-2 sm:gap-7">
            <img src={require('../assets/salad.png')} alt="saladImage" className="h-[45vh] sm:h-[90vh] w-[45vw] sm:w-[40vw]"  />
            <div className="w-[38vw]">
                <p className="w-full border-b-2 border-dotted border-b-black font-[rufina] text-xs sm:text-3xl font-bold text-end">$20</p>
                <p className="text-xs sm:text-5xl font-semibold font-[rufina] w-[30vw] sm:w-[20vw] my-0 sm:my-5">Grilled Okra and Tomatoes</p>
                <p className="pb-1 sm:pb-8 text-[10px] sm:text-xl w-[35vw] sm:w-[40vw]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="w-full border-b-2 border-dotted border-b-black font-[rufina] text-xs sm:text-3xl font-bold text-end">$18</p>
                <p className="text-xs sm:text-5xl font-semibold font-[rufina] w-[30w] sm:w-[20vw] my-0 sm:my-5">Cucumber Salad</p>
                <p className="pb-1 sm:pb-8 text-[10px] sm:text-xl w-[35vw] sm:w-[40vw]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="w-full border-b-2 border-dotted border-b-black font-[rufina] text-xs sm:text-3xl font-bold text-end">$12</p>
                <p className="text-xs sm:text-5xl font-semibold font-[rufina] w-[30vw] sm:w-[20vw] my-0 sm:my-5">Basil Pancakes</p>
                <p className="pb:1 sm:pb-8 text-[10px] sm:text-xl w-[35vw] sm:w-[40vw]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
        </div>
        {/* Mains */}
        <div className="pt-[3vh] sm:pt-[20vh]">
        <p className="text-2xl sm:text-6xl font-[rufina] text-center font-bold">Mains</p>
        <p className="sm:text-lg text-[6px] font-[rufina] sm:my-4 text-center">
          This a section of your menu. Give your section a brief description
        </p>
        <div className="mx-[6vw] my-[6vh] flex gap-7">
            <div className="w-[38vw]">
                <p className="w-full border-b-2 border-dotted border-b-black font-[rufina] text-xs sm:text-3xl font-bold text-end">$20</p>
                <p className="text-xs sm:text-5xl font-semibold font-[rufina] w-[30vw] sm:w-[30vw] my-0 sm:my-5">Deep Sea Snow White Cod Fillet</p>
                <p className="pb-1 sm:pb-8 text-[10px] sm:text-xl w-[35vw] sm:w-[40vw]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="w-full border-b-2 border-dotted border-b-black font-[rufina] text-xs sm:text-3xl font-bold text-end">$22</p>
                <p className="text-xs sm:text-5xl font-semibold font-[rufina] w-[30vw] sm:w-[30vw] my-0 sm:my-5">Steak With Rosemary Butter</p>
                <p className="pb-1 sm:pb-8 text-[10px] sm:text-xl w-[35vw] sm:w-[40vw]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="w-full border-b-2 border-dotted border-b-black font-[rufina] text-xs sm:text-3xl font-bold text-end">$20</p>
                <p className="text-xs sm:text-5xl font-semibold font-[rufina] w-[30vw] sm:w-[30vw] my-0 sm:my-5">Steaks With Grilled Kimchi</p>
                <p className="pb-1 sm:pb-8 text-[10px] sm:text-xl w-[35vw] sm:w-[40vw]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <img src={require('../assets/Grill.png')} alt="saladImage" className="h-[45vh] sm:h-[90vh] w-[45vw] sm:w-[40vw]"  />
        </div>
        </div>
        {/* Pastries & Drinks */}
        <div className="relative pt-[3vh] sm:pt-[30vh]">
            <img src={require('../assets/Avocado.png')} alt="pearImage" className="absolute top-[0vh] sm:top-[17vh] h-[14vh] sm:h-[40vh] left-[45vw] -z-20" />
        <p className="text-2xl sm:text-6xl font-[rufina] text-center font-bold">Pastries & Drinks</p>
        <p className="sm:text-lg text-[6px] font-[rufina] sm:my-4 text-center">
          This a section of your menu. Give your section a brief description
        </p>
        <div className="mx-[6vw] sm:my-[16vh] my-[8vh] flex gap-7">
            <img src={require('../assets/pastries.png')} alt="saladImage" className="h-[45vh] sm:h-[90vh] w-[45vw] sm:w-[40vw]"  />
            <div className="w-[38vw]">
                <p className="w-full border-b-2 border-dotted border-b-black font-[rufina] text-xs sm:text-3xl font-bold text-end">$158</p>
                <p className="text-xs sm:text-5xl font-semibold font-[rufina] w-[30vw] sm:w-[40vw] my-0 sm:my-5">Wine Pairing</p>
                <p className="pb-1 sm:pb-8 text-[10px] sm:text-xl w-[35vw] sm:w-[40vw]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="w-full border-b-2 border-dotted border-b-black font-[rufina] text-xs sm:text-3xl font-bold text-end">$160</p>
                <p className="text-xs sm:text-5xl font-semibold font-[rufina] w-[30vw] sm:w-[40vw] my-0 sm:my-5">Natural Wine Pairing</p>
                <p className="pb-1 sm:pb-8 text-[10px] sm:text-xl w-[35vw] sm:w-[40vw]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="w-full border-b-2 border-dotted border-b-black font-[rufina] text-xs sm:text-3xl font-bold text-end">$90</p>
                <p className="text-xs sm:text-5xl font-semibold font-[rufina] w-[30vw] sm:w-[40vw] my-0 sm:my-5">Whisky Flyer</p>
                <p className="pb-1 sm:pb-8 text-[10px] sm:text-xl w-[35vw] sm:w-[40vw]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
        </div>
      </div>
      <MakeReservation />
    </div>
  );
};

export default Menu;
