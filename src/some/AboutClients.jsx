import { Link } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";
import { FaFolder } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { Sidebar } from "../components";
import frame4 from "../images/frame4.svg";
import frame5 from "../images/frame5.svg";
import frame6 from "../images/frame6.svg";
import frame7 from "../images/frame7.svg";
import avatar from "../images/girl.svg";

const About = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[1292px] pt-4">
        <Link to="/clients">
          <p className="m-4 flex text-[#B0BABF]">
            <GrLinkPrevious />
            <span className="ml-4">
              <FaFolder />
            </span>
            <span className="-m-[6px] ml-3">Клиенты</span>
          </p>
        </Link>
        <div className="-mt-8 ml-36 text-[#b0babf]">
          <GrNext />
        </div>
        <div className="-mt-4 ml-44 flex text-[#4094F7]">
          <FaFolder />
          <span className="-mt-1 ml-2 text-black">Eleanor Pena</span>
        </div>
        <div className="pt-4">
          <hr />
          <div className="h-[40px] bg-[#6E8BB70D] p-2 text-[#6E8BB7]">
            <Link
              to="/clients/about-clients"
              className="ml-4 cursor-pointer hover:text-[#4094f7]"
            >
              О клиенте
            </Link>
            <Link
              to="/clients/about-clients/orders"
              className="ml-4 cursor-pointer hover:text-[#4094f7]"
            >
              Заказы
            </Link>
          </div>
        </div>
        <div className="flex h-[965px] bg-[#4094F726]">
          <div className="box2 flex">
            <span className="ml-5 mt-6 text-[25px] font-semibold text-[#4094F7]">
              420 000 сум
            </span>
            <span className="-ml-36 mt-[70px] text-gray-500">
              Общая сумма заказов
            </span>
            <img className="ml-[50px] w-[72px]" src={frame4} />
          </div>
          <div className="box2 flex">
            <span className="ml-5 mt-6 text-[25px] font-semibold text-[#4094F7]">
              27 500 сум
            </span>
            <span className="-ml-32 mt-[70px] text-gray-500">Средний чек</span>
            <img className="ml-[115px] w-[72px]" src={frame5} />
          </div>
          <div className="box2 flex">
            <span className="ml-5 mt-6 text-[25px] font-semibold text-[#4094F7]">
              16
            </span>
            <span className="-ml-6 mt-[70px] text-gray-500">
              Количество заказов
            </span>
            <img className="ml-[60px] w-[72px]" src={frame6} />
          </div>
          <div className="box2 flex">
            <span className="ml-5 mt-6 text-[25px] font-semibold text-[#4094F7]">
              23 500 сум
            </span>
            <span className="-ml-32 mt-[70px] text-gray-500">LTV</span>
            <img className="ml-[180px] w-[72px]" src={frame7} />
          </div>
        </div>
        <div className="-mt-[60%] ml-3 h-[310px] w-[1266px] rounded-md bg-white">
          <p className="p-4 font-semibold">Клиент</p>
          <hr />
          <div className="p-4">
            <img src={avatar} />
            <p className="m-1 cursor-pointer font-semibold text-[#4094F7] ">
              Изменить фото
            </p>
            <div className="-mt-36 ml-36 font-semibold text-[#48535B]">
              Имя
              <p className="-mt-7 ml-28 h-[40px] w-[948px] rounded-md border border-gray-300 p-2 font-normal text-black">
                Eleanor
              </p>
              <div className="mt-4">
                Фамилия
                <p className="-mt-7 ml-28 h-[40px] w-[948px] rounded-md border border-gray-300 p-2 font-normal text-black">
                  Eleanor Pena
                </p>
              </div>
              <div className="mt-4">
                Телефон
                <p className="-mt-7 ml-28 h-[40px] w-[948px] rounded-md border border-gray-300 p-2 font-normal text-black">
                  (319) 555-0155
                </p>
              </div>
              <div className="mt-4">
                Тип клиента
                <div className="-mt-4">
                  <select className="-mt-7 ml-28 h-[40px] w-[948px] rounded-md border border-gray-300 p-2 font-normal text-black">
                    <option>VIP</option>
                    <option>VIP</option>
                    <option>VIP</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
