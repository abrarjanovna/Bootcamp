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
      <div className="h-lvh bg-white w-16">
        <Link to="/dashboard">
          <img className="ml-3 mt-4" src={img} />
        </Link>
        <div className="text-[#6E8BB7]">
          <div className="ml-2 mt-4">
            <Link to="/orders">
              <div className="w-[48px] p-[10px] text-2xl hover:bg-[#4094F7] hover:text-white rounded-[6px] transition-all">
                <SlBasket />
              </div>
            </Link>
          </div>
          <div className="w-[48px] ml-2 mt-2 hover:bg-[#4094F7] hover:text-white rounded-[6px] transition-all ">
            <Link to="/clients">
              <div className="p-[10px] text-2xl">
                <PiUsers />
              </div>
            </Link>
          </div>
          <div className="w-[48px] ml-2 mt-2 hover:bg-[#4094F7] rounded-[6px] transition-all hover:text-white">
            <Link to="/location">
              <div className="p-[10px] text-2xl">
                <MdMyLocation />
              </div>
            </Link>
          </div>
          <div className="w-[48px] ml-2 mt-2 hover:bg-[#4094F7] rounded-[6px] transition-all hover:text-white">
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
