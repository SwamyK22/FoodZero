import React from "react";

const MakeReservation = () => {
  return (
    <div className="bg-[#EBF0E4] flex flex-col justify-center gap-5 sm:gap-[8vh] items-center sm:h-[70vh] h-[30vh]">
      <div>
        <p className="sm:text-6xl text-2xl font-semibold font-[rufina]">
          Make a Reservation
        </p>
        <p className="sm:text-lg text-xs text-[#00000090] font-[rufina] text-center">
          Get in touch with resturant
        </p>
      </div>
      <div className="flex gap-2 sm:gap-5">
        <input className="font-[rufina] sm:h-[8vh] h-[4vh] text-[10px] sm:text-xl sm:w-[20vw] w-[25vw] sm:px-[2vw] px-[0.5vw] border-[1px] border-black" type="date" value="2023-07-31" />
        <input className="font-[rufina] sm:h-[8vh] h-[4vh] text-[10px] sm:text-xl sm:w-[20vw] w-[25vw] sm:px-[2vw] px-[0.5vw] border-[1px] border-black" type="time" value="18:00" />
        <select name="sel" id="sel" className="font-[rufina] sm:h-[8vh] h-[4vh] sm:text-xl text-[10px] sm:w-[20vw] w-[25vw] sm:px-[2vw] px-[0.5vw] border-[1px] border-black">
          <option value="2Person">2 Person</option>
          <option value="4Person">4 Person</option>
          <option value="6Person">6 Person</option>
          <option value="8Person">8 Person</option>
        </select>
      </div>
      <button className="sm:h-[8vh] h-[5vh] sm:w-[17vw] w-[30vw] font-semibold font-[rufina] text-xs sm:text-lg text-white bg-[#233000]">Book Now</button>
    </div>
  );
};

export default MakeReservation;
