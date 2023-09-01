import React from "react";


import Container from "../Mycontainer/Container";
import Button from '../Components/button'

// assets
import HeroImg from "../assets/hero.png";
import SideImageOne from "../assets/Sideimg1.png";
import SideImageTwo from "../assets/SideImg2.png";

function Hero() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-center mx-8 lg:mx-0 mt-24 pb-52">
        <div className="relative">
          <h1 className="md:text-[48px] text-[22px] max-w-[527px]">
            A student-centered education and experiential learning platform
          </h1>
          <Button />
          <div className="absolute hidden lg:block -left-48 -top-28">
            <img src={SideImageOne} alt="Profile"/>
          </div>
        </div>
        <div className="relative">
          <img
            src={HeroImg}
            className="mt-4 md:mt-0"
            alt="..."
            width={527}
            height={367}
          />
          <div className="absolute hidden lg:block -right-[104px] top-64">
            <img src={SideImageTwo} alt="Profile"/>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
