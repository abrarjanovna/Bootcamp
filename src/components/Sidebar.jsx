import { NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { PiUsers } from "react-icons/pi";
import { MdMyLocation } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoBasket } from "react-icons/io5";
import profile from "../images/profile.svg";
import img from "../images/d.svg";
import "../css/main.css";

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="vl"></div>
      <div className="mt-[811px] h-[10px] w-40">
        <NavLink to="/dashboard">
          <img className="-ml-[55px] -mt-[500%]" src={img} />
          <div className="-mt-[44px] ml-[12px] h-11 w-32 rounded-[8px] p-2 text-3xl font-semibold text-[#3593F9]">
            Delever
          </div>
        </NavLink>
        <div className="mt-4 font-medium text-[#a0b6d6]">
          <div className="-ml-[59px] mt-2 w-[48px] rounded-xl transition-all hover:bg-[#4094F7] hover:text-white ">
            <NavLink to="/orders">
              <div className="p-[10px] text-2xl">
                <SlBasket />
              </div>
              <div className="-mt-[44px] ml-[70px] h-11 w-32 rounded-[8px] p-1 pl-3 text-2xl transition-all hover:bg-[#4094F7] hover:text-white">
                Заказы
              </div>
            </NavLink>
          </div>
          <div className="-ml-[59px] mt-2 w-[48px] rounded-xl transition-all hover:bg-[#4094F7] hover:text-white ">
            <NavLink to="/clients">
              <div className="p-[10px] text-2xl">
                <PiUsers />
              </div>
              <div className="-mt-[44px] ml-[70px] h-11 w-32 rounded-[8px] p-1 pl-3 text-2xl transition-all hover:bg-[#4094F7] hover:text-white">
                Клиенты
              </div>
            </NavLink>
          </div>
          <div className="-ml-[59px] mt-2 w-[48px] rounded-xl transition-all hover:bg-[#4094F7] hover:text-white ">
            <NavLink to="/stockList">
              <div className="p-[10px] text-2xl">
                <MdMyLocation />
              </div>
              <div className="-mt-[44px] ml-[70px] h-11 w-32 rounded-[8px] p-1 pl-3 text-2xl transition-all hover:bg-[#4094F7] hover:text-white">
                Акции
              </div>
            </NavLink>
          </div>
          <div className="-ml-[59px] mt-2 w-[48px] rounded-xl transition-all hover:bg-[#4094F7] hover:text-white">
            <NavLink to="/rates/fixed">
              <div className="p-[10px] text-2xl">
                <IoBasket />
              </div>
              <div className="-mt-[44px] ml-[70px] h-11 w-36 rounded-[8px] p-1 pl-3 text-2xl transition-all hover:bg-[#4094F7] hover:text-white">
                Тарифы
              </div>
            </NavLink>
          </div>
          <div className="-ml-[59px] mt-2 w-[48px] rounded-xl transition-all hover:bg-[#4094F7] hover:text-white">
            <NavLink to="/settings">
              <div className="p-[10px] text-2xl">
                <IoMdSettings />
              </div>
              <div className="-mt-[44px] ml-[70px] h-11 w-36 rounded-[8px] p-1 pl-3 text-2xl transition-all hover:bg-[#4094F7] hover:text-white">
                Настройки
              </div>
            </NavLink>
          </div>
        </div>
        <img className="-ml-[53px] mt-[710px]" src={profile} />
      </div>
      <div className="vl2"></div>
    </div>
  );
};

export default Sidebar;
