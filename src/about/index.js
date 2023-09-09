import React from "react";
import Logo from "../assets/logo";
import Facebook from "../assets/Facebook";
import Twitter from "../assets/Twitter";
import AboutPic from "../assets/About";
import ManVector from "../assets/ManVector";
import { Link } from "react-router-dom";
function index() {
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <div className="mt-14 ml-14">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <p className="bottom-3 ml-3 absolute">2019 schoolIT Technology</p>
        <div className="bottom-3 flex ml-7 items-center absolute right-3">
          <Twitter />
          <div className="ml-7">
            <Facebook />
          </div>
        </div>
      </div>
      <div className="bg-[#46C3EA] flex h-screen justify-center items-center"></div>
      <div className="absolute max-w-[1080px] mt-32 ml-32 mx-h-[516px] top-0 shadow-2xl bg-white rounded-sm">
        <div className="pl-14 pt-5">
          <AboutPic />
        </div>
        <div className="flex ml-14 items-center">
          <p className="max-w-[512px]">
            SchoolIT Technology is designed to automate a schools diverse
            opertions from classes exams to school events calender. It provide a
            powerfull online community to brings parent teachers and student on
            a commin interactive platform.
          </p>
          <div>
            <ManVector />
          </div>
        </div>

        <div>
          <button className="bg-[#F18585] ml-14 hover:bg-white mb-12 hover:text-[#F18585] border-2 border-[#F18585] hover:border-[#F18585]  text-white mt-2 py-2 px-28 rounded-full ">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
