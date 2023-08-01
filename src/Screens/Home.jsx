import React from "react";
import MakeReservation from "../Component/MakeReservation";

function Home() {
  return (
    <>
      <div className="sm:h-[170vh] h-[90vh] w-[100vw] bg-[#233000]">
        <div>
          <div className="sm:p-28 p-5 sm:h-[100vh] h-[50vh]">
            <div className="z-20">
              <h1 className="text-white sm:w-[85%] w-[50vw] sm:text-8xl text-2xl sm:h-80 h-[70%]">
                Healthy Eating is important part of lifestyle
              </h1>
              <p className="text-white sm:w-[60%] text-xs w-44">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur, minus!
              </p>
            </div>
            <img
              alt=""
              className="absolute sm:left-[58%] left-44 sm:top-52 top-6 sm:h-96 sm:w-72 h-[30vh] w-32"
              src={require("../assets/Image.png")}
            />
          </div>
          <div className="flex absolute sm:left-[48%] sm:top-[85%] sm:w-80 right-4 top-40 gap-5">
            <img
              alt=""
              className="sm:h-24 sm:w-24 h-8 w-8"
              src={require("../assets/spices1.png")}
            />
            <img
              alt=""
              className="sm:h-24 sm:w-24 h-8 w-8"
              src={require("../assets/spices2.png")}
            />
            <img
              alt=""
              className="sm:h-24 sm:w-24 h-8 w-8"
              src={require("../assets/spices3.png")}
            />
          </div>
        </div>
        <div className="flex justify-between sm:mx-52 mx-10">
          <img
            alt=""
            className="sm:h-96 sm:w-80 h-[20vh]"
            src={require("../assets/ImageBox.png")}
          />
          <img
            alt=""
            className="sm:h-80 sm:w-52 h-[20vh]"
            src={require("../assets/ImageBottle.png")}
          />
        </div>
      </div>
          {/* /////////////// menu options //////////////////// */}
          <div className="sm:h-[80vh] w-[100vw]">
        <div className="flex justify-around sm:h-[30vh] h-[50vh] mt-5 ">
          <div className="sm:px-32 px-10">
            <h1 className="text-4xl text-black font-[Rufina]">Our Menu</h1>
            <p className="sm:text-xl text-sm">This is section of menu. Give your section a brief descrption</p>
          </div>
          <img
            alt=""
            className="sm:h-72  sm:w-80 h-[30vh]"
            src={require("../assets/LeafImg.png")}
          />
          </div>
        <div className="sm:mx-40 mx-5 sm:h-[50vh] h-[80vh] justify-around flex flex-col">
          <div className="flex justify-between">
            <div className="sm:w-96 w-[70vw]">
              <h1 className="border-b-2 sm:w-[30vw] w-[40vw] border-dotted font-[Rufina] border-b-black text-end font-semibold">
                $20
              </h1>
              <h1 className="sm:text-2xl text-base font-semibold sm:w-80">
                Deep sea Snow while Cod Fillet
              </h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                voluptate!
              </p>
            </div>
            <div className="sm:w-96 w-[70vw]">
              <h1 className="border-b-2  border-dotted font-[Rufina] border-b-black text-end font-semibold">
                $20
              </h1>
              <h1 className="sm:text-2xl text-base font-semibold sm:w-80">
                Deep sea Snow while Cod Fillet
              </h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                voluptate!
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="sm:w-96 w-[70vw]">
                <h1 className="border-b-2 sm:w-[30vw] w-[40vw] border-dotted font-[Rufina] border-b-black text-end font-semibold">
                  $20
                </h1>
                <h1 className="sm:text-2xl text:sm font-semibold sm:w-80">
                  Deep sea Snow while Cod Fillet
                </h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  voluptate!
                </p>
              </div>
              <div className="sm:w-96 w-[70vw]">
                <h1 className="border-b-2 border-dotted font-[Rufina] border-b-black text-end font-semibold">
                  $20
                </h1>
                <h1 className="sm:text-2xl text:sm font-semibold sm:w-80">
                  Deep sea Snow while Cod Fillet
                </h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  voluptate!
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* ////////////Excellent cooking/////////////// */}
        <div className="bg-[#EBF0E4] sm:w-[100vw] sm:h-[90vh] items-center w-[100vw] h-[50vh] flex sm:justify-evenly pl-10 mt-5 relative">
          <div className="sm:mt-10 mt-2">
            <img
              className="sm:h-52 sm:w-52 sm:top-16 top-6 absolute sm:left-44 h-[15vh] left-0"
              alt=""
              src={require("../assets/Leaf1.png")}
            />
            <img
              className="sm:h-96 sm:w-96 w-[40vw] h-[40vh]"
              alt=""
              src={require("../assets/man.png")}
            />
          </div>
          <div className="sm:mt-10 mt-2">
            <h1 className="sm:text-4xl text-lg font-[Rufina] sm:w-52 w-[50vw] font-semibold">
              Excellent Cook
            </h1>
            <p className="sm:w-72 sm:text-xl text-xs w-[45vw]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, commodi.
            </p>
            <img
              alt=""
              className="sm:h-60 sm:w-60 h-[20vh]"
              src={require("../assets/Leaf.png")}
            />
          </div>
        </div>
          {/* ///////////descrption////////////// */}
        <div className="mt-5 ml-100">
          <div className="flex justify-around sm:w-[100vw] w-[100vw]">
            <img
              alt=""
              className="sm:h-72 sm:w-72 h-[20vh]"
              src={require("../assets/IconBox.png")}
            />
            <img
              alt=""
              className="sm:h-72 sm:w-72 h-[20vh]"
              src={require("../assets/IconBox1.png")}
            />
            <img
              alt=""
              className="sm:h-72 sm:w-72 h-[20vh]"
              src={require("../assets/IconBox2.png")}
            />
          </div>
          <div className="flex mt-10 justify-center w-[100vw]">
            <div>
              <img
                alt=""
                className="sm:h-96 sm:w-80 h-[20vh] w-[45vw]"
                src={require("../assets/FeatureImage.png")}
              />
              <div className="flex items-center">
                <img
                  alt=""
                  className="sm:h-10 h-[5vh]"
                  src={require("../assets/Avatar.png")}
                />
                <p className="text-xs sm:w-[30vw] w-[40vw]">
                  Julie Christle - October 17 2021 - 3.33pm - 2 comments
                </p>
              </div>
              <div className="sm:w-80 w-[45vw]">
                <h1 className="sm:text-2xl text-xs font-semibold border-b-2 border-dotted border-black py-4">
                  Fruite and Vegetables and Protection against diseases
                </h1>
                <p className="text-xs py-2 text-slate-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex items-center gap-3">
                  <p className="font-semibold">Read more</p>
                  <img
                    alt=""
                    className="h-5 w-8"
                    src={require("../assets/Iconright.png")}
                  />
                </div>
              </div>
            </div>
            <div>
              <img
                alt=""
                className="sm:h-96 sm:w-80 h-[20vh] w-[40vw]"
                src={require("../assets/FeatureImage1.png")}
              />
              <div className="flex items-center">
                <img
                  alt=""
                  className="sm:h-10 h-[5vh]"
                  src={require("../assets/Avatar1.png")}
                />
                <p className="text-xs sm:w-96 w-[40vw]">
                  Julie Christle - October 17 2021 - 3.33pm - 2 comments
                </p>
              </div>
              <div className="sm:w-80 w-[45vw]">
                <h1 className="sm:text-2xl text-xs font-semibold border-b-2 border-dotted border-black py-4">
                  Asparagus Spring Salad with Rocket, Goats's Cheese
                </h1>
                <p className="text-xs py-2 text-slate-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex items-center gap-3">
                  <p className="font-semibold">Read more</p>
                  <img
                    alt=""
                    className="h-5 w-8"
                    src={require("../assets/Iconright.png")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ////////Reservation///////// */}
        {/* <div className="bg-[#EBF0E4] items-center sm:h-96 h-[80vh] w-[100vw] justify-around flex flex-col mt-5">
          <div className="justify-center">
            <h1 className="sm:text-6xl text-lg font-semibold font-[Rufina] text-center">Make a Reservation</h1>
            <h1 className="text-center text-xs">Get in touch with Restuarant</h1>
          </div>
          <div className="sm:flex sm:gap-10 border 1px">
            <input placeholder="16/22/2021" className="border-[1px] p-1 border-black" />
            <input placeholder="16/22/2021" className="border-[1px] p-1 border-black" />
            <input placeholder="16/22/2021" className="border-[1px] p-1 border-black" />
          </div>
          <button className="bg-[#233000] text-white sm:w-28 w-[50vw] px-3 py-1">Book Now</button>
        </div>  */}
      <MakeReservation />
        <div className="flex flex-col items-center sm:h-[100vh] h-[70vh] justify-around">
          <div className="flex-col">
          <h1 className="sm:text-4xl text-lg font-[Rufina] font-semibold text-center w-72">Calories Energy Balance</h1>
          <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>   
          <div className="flex w-[100vw] sm:h-[50vh] h-[20vh] items-center justify-around">
            <img alt="" className="sm:h-[50vh] sm:w-[18vw] h-[20vh]" src={require('../assets/MenuCategory.png')} />
            <img alt="" className="sm:h-[50vh] sm:w-[18vw] h-[20vh]" src={require('../assets/MenuCategory1.png')} />
            <img alt="" className="sm:h-[50vh] sm:w-[18vw] h-[20vh]" src={require('../assets/MenuCategory2.png')} />
          </div>
          <div>
            <p className="sm:text-2xl text-sm sm:w-[50vw] w-[100vw] font-[Rufina] font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem natus nihil atque eaque commodi? Accusamus excepturi earum maiores harum ipsam.</p>
            <div className="flex">          
              <img alt="" className="h-14" src={require('../assets/Avatar2.png')} />
              <p>John Doe</p>
          </div>
          </div>
        </div>
    </>
  );
}

export default Home;
