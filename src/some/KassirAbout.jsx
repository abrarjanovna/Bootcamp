import { GrLinkPrevious, GrNext } from "react-icons/gr";
import { Sidebar } from "../components";
import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa";
import photo from "../images/boy.svg";

const KassirAbout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[1292px] pt-4">
        <Link to="/settings/company-branch/personal/kassir">
          <p className="m-4 flex text-[#B0BABF]">
            <GrLinkPrevious />
            <span className="ml-4">
              <FaFolder />
            </span>
            <span className="-m-[6px] ml-3">Список компаний</span>
          </p>
        </Link>
        <div className="-mt-8 ml-[215px] text-[#b0babf]">
          <GrNext />
        </div>
        <div className="-mt-4 ml-60 flex text-[#b0babf]">
          <FaFolder />
          <span className="-mt-1 ml-2">L'Oréal</span>
        </div>
        <div className="-mt-5 ml-[325px] text-[#b0babf]">
          <GrNext />
        </div>
        <div className="-mt-4 ml-[27%] flex text-[#4094F7]">
          <FaFolder />
          <span className="-mt-1 ml-2 text-black">Исхаков Низомиддин</span>
        </div>
        <div className="pt-4">
          <hr />
          <div className="flex h-[965px] bg-[#4094F726]"></div>
        </div>
        <div className="-mt-[72%] ml-8 h-[300px] w-[560px] rounded-md bg-white">
          <p className="p-4 font-semibold">Общие сведения</p>
          <hr />
          <div className="p-4">
            <img src={photo} />
            <p className="m-1 cursor-pointer font-semibold text-[#4094F7]">
              Изменить фото
            </p>
            <div className="-mt-36 ml-36 font-semibold text-[#48535B]">
              Полное имя
              <p className="-mt-7 ml-28 h-[40px] w-[252px] rounded-md border border-gray-300 p-2 font-normal text-black">
                Исхаков Низомиддин
              </p>
              <div className="mt-4">
                Телефон
                <p className="-mt-7 ml-28 h-[40px] w-[252px] rounded-md border border-gray-300 p-2 font-normal text-black">
                  +998 (90) 123-45-67
                </p>
              </div>
              <div className="mt-4">
                Филиал
                <p className="-mt-7 ml-28 h-[40px] w-[252px] rounded-md border border-gray-300 p-2 font-normal text-black">
                  Oqtepa
                </p>
              </div>
              <div className="mt-4">
                Статус
                <div className="-mt-4">
                  <select className="-mt-7 ml-28 h-[40px] w-[252px] rounded-md border border-gray-300 p-2 font-normal text-black">
                    <option>Активный</option>
                    <option>Не активный</option>
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

export default KassirAbout;
