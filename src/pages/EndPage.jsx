import React from "react";
import { IoMdClose } from "react-icons/io";

function EndPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="h-[700px] w-[400px] bg-[#5a82b4] rounded-lg shadow-[0px_3px_10px_rgba(0,0,0,0.3)]">
        <div className="flex p-2 flex-row-reverse">
          <IoMdClose size={25} className="cursor-pointer" />
        </div>
        <div className="mt-10 flex flex-col justify-center items-center">
          <h4 className="font-newfont text-white text-center text-sm">
            The New York Times
          </h4>
          <h2 className="font-anotherfont text-white font-black text-3xl">
            Crossword
          </h2>
          <h1 className="font-anotherfont text-white font-black mt-2 text-4xl tracking-tighter">
            Play a new Mini
          </h1>
          <h1 className="font-anotherfont text-white font-black text-4xl tracking-tighter">
            every day.
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-[45%] mr-5" src="/images/A_HA_BLUE_SHADOW_5.gif" />
        </div>
        <div className="flex flex-col justify-center items-center mt-8">
          <a
            className="p-2 bg-white w-[120px] rounded-4xl text-sm text-[#5a82b4] font-bold text-center cursor-pointer"
          >
            Get the App
          </a>
        </div>
      </div>
    </div>
  );
}

export default EndPage;
