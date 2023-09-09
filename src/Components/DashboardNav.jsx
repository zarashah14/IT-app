import React from "react";
//import { Link } from 'react-router-dom';


// assets
import Elipse from "../assets/Ellipse.png";
import DownArrow from "../assets/DownArrow";

function DashboardNav() {
    return (
      <div className="sticky top-0 left-0 flex items-center justify-items-end bg-[#F2EFEF]">
          <Img src={Elipse} alt="..." />
        <div className="flex items-center">
        <p className="pl-6 pr-2 text-black font-semibold"> Hello I am dashboard </p> 
        {/*<Link to=""></Link>*/}
       <DownArrow/>
       </div>
      </div>
    );
  }
  
  export default DashboardNav;