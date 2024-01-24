import img from "../images/d.svg";
import main from "../images/main.svg";
import { SlBasket } from "react-icons/sl";
import { PiUsers } from "react-icons/pi";
import { MdMyLocation } from "react-icons/md";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="h-lvh w-16 bg-white">
        <Link to="/dashboard">
          <img className="ml-3 mt-4" src={img} />
        </Link>
        <div className="text-[#6E8BB7]">
          <div className="ml-2 mt-4">
            <Link to="/orders">
              <div className="w-[48px] rounded-[6px] p-[10px] text-2xl transition-all hover:bg-[#4094F7] hover:text-white">
                <SlBasket />
              </div>
            </Link>
          </div>
          <div className="ml-2 mt-2 w-[48px] rounded-[6px] transition-all hover:bg-[#4094F7] hover:text-white ">
            <Link to="/clients">
              <div className="p-[10px] text-2xl">
                <PiUsers />
              </div>
            </Link>
          </div>
          <div className="ml-2 mt-2 w-[48px] rounded-[6px] transition-all hover:bg-[#4094F7] hover:text-white ">
            <Link to="/location">
              <div className="p-[10px] text-2xl">
                <MdMyLocation />
              </div>
            </Link>
          </div>
          <div className="ml-2 mt-2 w-[48px] rounded-[6px] transition-all hover:bg-[#4094F7] hover:text-white">
            <Link to="/charts">
              <div className="p-[10px] text-2xl">
                <BiSolidBarChartSquare />
              </div>
            </Link>
          </div>
        </div>
        <img className="ml-3 mt-[610px]" src={main} />
      </div>
    </div>
  );
};

export default Sidebar;
