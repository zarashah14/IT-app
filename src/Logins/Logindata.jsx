import React from "react";


import Logo from "../assets/logo";
import { Link } from 'react-router-dom';

function Logindata() {
    return (
      <div className="grid sm:grid-cols-2 sm:gap-7">
         <div className="hidden md:block">
         <div className="max-w-[570px] text-white flex flex-col px-4 md:px-0 h-screen justify-center items-center bg-[#F18585]">
         <h1 className="text-[40px]">Not Signed Up Yet?</h1>
          <p className="mt-9 max-w-[455px] text-center">
            Click the link below to get started
          </p>
          <Link
            to="/"
            className="bg-[#F18585] border border-white text-white mt-5 hover:bg-white hover:text-[#F18585] px-20 py-2 rounded-full max-w-[340px]"
          >
            Sign Up
          </Link>
         </div>
         </div>
         <div>
        <div className="mt-14">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="mt-14 px-6 lg:px-0">
          <h1 className="text-[40px] font-bold">Access Account</h1>
          <p className="mt-8 text-[18px]">
            Gain access to your account and explore!
          </p>
       </div>
          <form ClassName="flex flex-col">
          <div className="my-4">
          <input
                type="email"
                className="outline-none max-w-[538px] w-full my-3 py-3 px-4 border rounded-md border-[#F18585B2]"
                placeholder="Email"
              />
            </div>
            <div ClassName="my-4">
          <input
                type="email"
                className="outline-none max-w-[538px] w-full my-3 py-3 px-4 border rounded-md border-[#F18585B2]"
                placeholder="Password"
              />
          </div>
          <div className="text-center md:text-left">
              <button className="bg-[#F18585] hover:bg-white hover:text-[#F18585] border-2 border-[#F18585]  text-white mt-2 py-2 px-28 rounded-full ">
                Sign In
              </button>
            </div>
         </form>
             <div class="my-4">
              <p ClassName=""> Forgot Passsword ? <b>Click Here</b> </p>
             </div>  
         </div>
             
      </div>
    );
  }
  
  export default Logindata;