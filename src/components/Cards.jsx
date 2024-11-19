import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex gap-5 items-center bg-zinc-900 p-20">
      <div className="card-container w-1/2 h-[60vh] ">
        <div className="card relative w-full h-full rounded-xl flex items-center justify-center bg-[#004D43]">
          <button className="absolute bottom-8 left-8 px-3 py-1 text-[#cdea68] border-[1px] text-sm border-[#cdea68] rounded-full">
            &copy;2019-2022
          </button>
          <img
            className="w-30"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className=""></button>
        </div>
      </div>
      <div className="card-container w-1/2 h-[60vh] flex gap-5">
        <div className="card relative w-1/2 h-full rounded-xl flex items-center justify-center bg-[#212121]">
          <button className="absolute bottom-8 left-8 px-3 py-1 text-white border-[1px] text-sm border-white rounded-full">
            RATING 5.0 ON CLUTCH
          </button>
          <img
            className="w-30"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
        </div>
        <div className="card relative w-1/2 h-full rounded-xl flex items-center justify-center bg-[#212121]">
          <button className="absolute bottom-8 left-4 px-5 py-1 text-white border-[1px] text-sm border-white rounded-full">
            BUSINESS BOOTCAMP ALUMNI
          </button>
          <img
            className="w-20"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
