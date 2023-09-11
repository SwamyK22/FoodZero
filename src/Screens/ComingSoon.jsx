import React from "react";
import bg from "../assets/comingsoonbg.png";
import Header from "../Component/Header";

const ComingSoon = () => {
  return (
    <div className="relative">
      <div className="absolute">
        <img src={bg} alt="" className="h-[100vh] w-[100vw]" />
      </div>
      <div className="absolute opacity-40 w-[100vw] min-h-screen bg-green-400"></div>

      <Header />  
      <div className="absolute top-40 text-center w-full">
        <h1 className="text-6xl border-b-4 border-dotted border-white text-white">
          COMING SOON
        </h1>
        <div className="flex gap-8 text-center align-center justify-center w-full mt-8">
          <p className="text-3xl sm:text-6xl text-white">
            02 <br />
            <span className="text-sm">Month</span>
          </p>
          <p className="text-3xl text-white sm:text-6xl">
            03 <br />
            <span className="text-sm">Days</span>
          </p>
          <p className="text-3xl text-white sm:text-6xl">
            21 <br />
            <span className="text-sm">Hours</span>
          </p>
          <p className="text-3xl text-white sm:text-6xl">
            35 <br />
            <span className="text-sm">Minutes</span>
          </p>
          <p className="text-3xl text-white sm:text-6xl">
            23 <br />
            <span className="text-sm">Second</span>
          </p>
        </div>
        <div className="m-20">
          <button className="border-2 border-white text-white p-4">
            View Menu
          </button>
        </div>
      </div>

      {/* <div className="absolute top-56 text-center w-full">
        <h1 className="text-6xl border-b-4 border-dotted border-white text-white">
          COMING SOON
        </h1>
        <div className="flex gap-10 text-center align-center justify-center w-full">
          <p className="text-6xl text-white">
            02 <br />
            <span className="text-sm">Month</span>
          </p>
          <p className="text-6xl text-white">
            03 <br />
            <span className="text-sm">Days</span>
          </p>
          <p className="text-6xl text-white">
            21 <br />
            <span className="text-sm">Hours</span>
          </p>
          <p className="text-6xl text-white">
            35 <br />
            <span className="text-sm">Minutes</span>
          </p>
          <p className="text-6xl text-white">
            23 <br />
            <span className="text-sm">Second</span>
          </p>
        </div>

        <div className="m-20">
          <button className="border-2 border-white text-white p-4">
            View Menu
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ComingSoon;
