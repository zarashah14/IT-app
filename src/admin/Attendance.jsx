/*import React from "react";
function Attendance() {
    return (
      <div className="">
        <h1> Hello I am Attendance </h1> 
      </div>
    );
  }
  
  export default Attendance;*/
  import React from "react";

// assets
import Elipse from "../assets/Ellipse.png";
import TeckGreen from "../assets/TeckGreen";

function Attendence() {
  return (
    <div className="relative overflow-x-auto">
      <table className="text-xs table-auto w-screen  border-separate border-spacing-y-2 md:w-full mt-7">
        <thead className="text-[#9F9F9F] text-left">
          <tr>
            <th>PERSONNEL DETAILS</th>
            <th>DEPARTMENT</th>
            <th>ACTION</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="flex items-center py-2 px-5">
              <img src={Elipse} alt="..." />
              <p className="pl-4">Aderinsola Emmanuel</p>
            </td>
            <td>Teaching</td>
            <td>
              <input type="radio" id="present1" className="mr-5" />
              <label htmlFor="present1">Prsesent</label>
            </td>
            <td>
              <input type="radio" id="present1" className="mr-5" />
              <label htmlFor="present1">Absent</label>
            </td>
            <td>
              <TeckGreen />
            </td>
          </tr>
          <tr className="bg-white">
            <td className="flex items-center py-2 px-5">
              <img src={Elipse} alt="..." />
              <p className="pl-4">Aderinsola Emmanuel</p>
            </td>
            <td>Teaching</td>
            <td>
              <input type="radio" id="present1" className="mr-5" />
              <label htmlFor="present1">Prsesent</label>
            </td>
            <td>
              <input type="radio" id="present1" className="mr-5" />
              <label htmlFor="present1">Absent</label>
            </td>
            <td>
              <TeckGreen />
            </td>
          </tr>
          <tr className="bg-white">
            <td className="flex items-center py-2 px-5">
              <img src={Elipse} alt="..." />
              <p className="pl-4">Aderinsola Emmanuel</p>
            </td>
            <td>Teaching</td>
            <td>
              <input type="radio" id="present1" className="mr-5" />
              <label htmlFor="present1">Prsesent</label>
            </td>
            <td>
              <input type="radio" id="present1" className="mr-5" />
              <label htmlFor="present1">Absent</label>
            </td>
            <td>
              <TeckGreen />
            </td>
          </tr>
          <tr className="bg-white">
            <td className="flex items-center py-2 px-5">
              <img src={Elipse} alt="..." />
              <p className="pl-4">Aderinsola Emmanuel</p>
            </td>
            <td>Teaching</td>
            <td>
              <input type="radio" id="present1" className="mr-5" />
              <label htmlFor="present1">Prsesent</label>
            </td>
            <td>
              <input type="radio" id="present1" className="mr-5" />
              <label htmlFor="present1">Absent</label>
            </td>
            <td>
              <TeckGreen />
            </td>
          </tr>
          <tr className="bg-white">
            <td className="flex items-center py-2 px-5">
              <img src={Elipse} alt="..." />
              <p className="pl-4">Aderinsola Emmanuel</p>
            </td>
            <td>Teaching</td>
            <td>
              <input type="radio" id="present1" className="mr-5" />
              <label htmlFor="present1">Prsesent</label>
            </td>
            <td>
              <input type="radio" id="present1" className="mr-5" />
              <label htmlFor="present1">Absent</label>
            </td>
            <td>
              <TeckGreen />
            </td>
          </tr>
          <tr className="bg-white">
            <td className="flex items-center py-2 px-5">
              <img src={Elipse} alt="..." />
              <p className="pl-4">Aderinsola Emmanuel</p>
            </td>
            <td>Teaching</td>
            <td>
              <input type="radio" id="present1" className="mr-5" />
              <label htmlFor="present1">Prsesent</label>
            </td>
            <td>
              <input type="radio" id="present1" className="mr-5" />
              <label htmlFor="present1">Absent</label>
            </td>
            <td>
              <TeckGreen />
            </td>
          </tr>
          <tr className="bg-white">
            <td className="flex items-center py-2 px-5">
              <img src={Elipse} alt="..." />
              <p className="pl-4">Aderinsola Emmanuel</p>
            </td>
            <td>Teaching</td>
            <td>
              <input type="radio" id="present1" className="mr-5" />
              <label htmlFor="present1">Prsesent</label>
            </td>
            <td>
              <input type="radio" id="present1" className="mr-5" />
              <label htmlFor="present1">Absent</label>
            </td>
            <td>
              <TeckGreen />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Attendence;
