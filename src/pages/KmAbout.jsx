import { GrLinkPrevious, GrNext } from "react-icons/gr";
import { Sidebar } from "../components";
import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa";

const KmAbout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[1292px] pt-4">
        <Link to="/rates/km">
          <p className="m-4 flex text-[#B0BABF]">
            <GrLinkPrevious />
            <span className="ml-4">
              <FaFolder />
            </span>
            <span className="-m-[6px] ml-3">Тарифы</span>
          </p>
        </Link>
        <div className="-mt-8 ml-[145px] text-[#b0babf]">
          <GrNext />
        </div>
        <div className="-mt-4 ml-[13%] flex text-[#4094F7]">
          <FaFolder />
          <span className="-mt-1 ml-2 text-black">Tortor Nullam Fringilla</span>
        </div>
        <div className="pt-4">
          <hr />
          <div className="flex h-[965px] bg-[#4094F726]"></div>
        </div>
        <div className="-mt-[72%] ml-8 h-[344px] w-[678px] rounded-md bg-white">
          <p className="p-4 font-semibold">Общие сведения</p>
          <hr />
          <div className="p-4">
            <div className="font-semibold text-[#48535B]">
              Название
              <p className="-mt-7 ml-56 h-[40px] w-[420px] rounded-md border border-gray-300 p-2 font-normal text-black">
                VTortor Nullam Fringilla
              </p>
              <div className="mt-4">
                Тип
                <div className="-mt-4">
                  <select className="-mt-7 ml-56 h-[40px] w-[420px] rounded-md border border-gray-300 p-2 font-normal text-black">
                    <option>По километру</option>
                    <option>Фиксированная</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                Базовая цена
                <p className="-mt-7 ml-56 h-[40px] w-[420px] rounded-md border border-gray-300 p-2 font-normal text-black">
                  50 000 сум
                </p>
              </div>
              <div className="mt-4">
                Включенные километры
                <p className="-mt-7 ml-56 h-[40px] w-[420px] rounded-md border border-gray-300 p-2 font-normal text-black">
                  5 км
                </p>
              </div>
              <div className="mt-4">
                Краткое навание
                <p className="-mt-7 ml-56 h-[40px] w-[420px] rounded-md border border-gray-300 p-2 font-normal text-black">
                  UZ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KmAbout;
