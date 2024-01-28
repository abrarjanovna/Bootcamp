import { GrLinkPrevious, GrNext } from "react-icons/gr";
import { Sidebar } from "../components";
import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa";

const RegionsAbout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[1292px] pt-4">
        <Link to="/settings/regions">
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
          <span className="-mt-1 ml-2 text-black">Узбекистан</span>
        </div>
        <div className="pt-4">
          <hr />
          <div className="flex h-[965px] bg-[#4094F726]"></div>
        </div>
        <div className="-mt-[72%] ml-8 h-[198px] w-[678px] rounded-md bg-white">
          <p className="p-4 font-semibold">Общие сведения</p>
          <hr />
          <div className="p-4">
            <div className="font-semibold text-[#48535B]">
              Название
              <p className="-mt-7 ml-44 h-[40px] w-[460px] rounded-md border border-gray-300 p-2 font-normal text-black">
                Узбекистан
              </p>
              <div className="mt-4">
                Краткое навание
                <p className="-mt-7 ml-44 h-[40px] w-[460px] rounded-md border border-gray-300 p-2 font-normal text-black">
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

export default RegionsAbout;
