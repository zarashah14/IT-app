import React from "react";

// components
import Button from "../Components/button";
import Container from "../Mycontainer/Container";

// assets
import ScreenVector from "../assets/ScreenVector";
import WatchVector from "../assets/WatchVector";
import EmojiVector from "../assets/EmojiVector";
import bgCol from "../assets/bgCol.png";

function SectionC() {
  return (
    <Container>
      <div className="">
        <div className="grid lg:grid-cols-3  xl:mx-10 px-4 gap-7 sm:px-0 justify-center justify-items-center mt-20">
          <div className="shadow-md mt-3 w-full max-w-[415px] pt-12 justify-center items-center flex flex-col">
            <ScreenVector />
            <span className="my-8 text-center">Intuitive interface</span>
          </div>
          <div className="shadow-md mt-12 w-full max-w-[415px] lg:mt-0 pt-12 justify-center items-center flex flex-col">
            <WatchVector />
            <span className="text-center w-[368px] my-8">
              Massive time savings for entire staff
            </span>
          </div>
          <div className="shadow-md mt-12 w-full max-w-[415px] lg:mt-0 pt-12 justify-center items-center flex flex-col">
            <EmojiVector />
            <span className="my-8">Easy to use</span>
          </div>
        </div>
        <div className="relative w-full">
          <img
            src={bgCol}
            alt="..."
            width={346}
            className="w-full relative"
            height={296}
          />
          <div className="absolute bottom-12 translate-x-1/2  z-10">
            <Button />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SectionC;
