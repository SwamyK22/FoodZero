import React from "react";
import coverscreen from "../assets/coverpagebackground.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";

const CoverScreen = () => {
  return (
    <div className="relative">
      <div className="absolute">
        <img src={coverscreen} alt="" className="h-[100vh] w-screen" />
      </div>
      <div className="absolute opacity-40 w-full min-h-screen bg-green-400"></div>
      <div className="absolute text-white sm:flex sm:left-10 sm:top-4 left-20 top-10">
        <ul className="list-disc sm:m-32">
          <li className="text-3xl opacity-100">HOME</li>
          <li className="text-3xl">MENU</li>
          <li className="text-3xl">
            BLOGS
            <ul className="list-decimal">
              <li className="text-base">column</li>
              <li className="text-base">column2</li>
              <li className="text-base">sidebar post</li>
            </ul>
          </li>
          <li className="text-3xl">ABOUT</li>
        </ul>
        <div className="sm:m-32 mt-10">
          <p className="text-xl opacity-100 border-b-4 border-dotted">
            Contact
          </p>
          <br />
          <div>
            <span>+86 852 346 000</span> <br />
            <span>info@foodzero.com</span>
          </div>
          <br />
          <div>
            <span>1959 Sepulveda Blvd</span> <br />
            <span>Culver City,CA,90230</span>
          </div>
          <br />
          <div className="flex gap-3 self-center">
            <img src={instagram} alt="instagram" className="w-4" />
            <img src={twitter} alt="twitter" className="w-4" />
            <img src={facebook} alt="facebook" className="w-4" />
            <img src={youtube} alt="youtube" className="w-4 self-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverScreen;
