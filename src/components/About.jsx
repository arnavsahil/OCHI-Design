import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full px-20 py-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-3 mt-[4.5vw] border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-[4vw]">Our approach:</h1>
          <button className="flex gap-10 items-center uppercase px-7 py-4 bg-zinc-900 text-white rounded-full mt-4">
            Read More
            <div className="w-2 h-2 bg-zinc-200 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#b0c859] rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;
