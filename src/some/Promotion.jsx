import { Link } from "react-router-dom";
import { Sidebar } from "../components";
import { GrLinkPrevious, GrNext } from "react-icons/gr";
import { FaFolder } from "react-icons/fa";
import photo from "../images/photo.svg";
import "./Switch.css";

const Promotion = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[1292px] pt-4">
        <Link to="/stockList">
          <p className="m-4 flex text-[#B0BABF]">
            <GrLinkPrevious />
            <span className="ml-4">
              <FaFolder />
            </span>
            <span className="-m-[6px] ml-3">Список акций</span>
          </p>
        </Link>
        <div className="-mt-8 ml-[185px] text-[#b0babf]">
          <GrNext />
        </div>
        <div className="-mt-4 ml-52 flex text-[#4094F7]">
          <FaFolder />
          <span className="-mt-1 ml-2 text-black">
            Vulputate velit lacus, enim viverra quis.
          </span>
        </div>
        <div className="pt-4">
          <hr />
        </div>
        <div className="flex h-[965px] bg-[#4094F726]"></div>
        <div className="-mt-[72%] ml-8 h-[310px] w-[740px] rounded-md bg-white">
          <p className="p-4 font-semibold">Общие сведения</p>
          <hr />
          <div className="p-4">
            <img src={photo} />
            <p className="m-1 cursor-pointer font-semibold text-[#4094F7]">
              Изменить фото
            </p>
            <div className="-mt-36 ml-36 font-semibold text-[#48535B]">
              Название
              <p className="-mt-7 ml-28 h-[40px] w-[450px] rounded-md border border-gray-300 p-2 font-normal text-black">
                Vulputate velit lacus, enim viverra quis.
              </p>
              <div className="mt-4">
                Начало акции
                <div className="-mt-4">
                  <input
                    type="date"
                    value="2021-06-10"
                    className="-mt-7 ml-28 h-[40px] w-[450px] rounded-md border border-gray-300 p-2 font-normal text-black focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4">
                Конец акции
                <div className="-mt-7">
                  <input
                    type="date"
                    value="2021-09-01"
                    className="ml-28 h-[40inputx] w-[450px] rounded-md border border-gray-300 p-2 font-normal text-black focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4">
                Cтатус
                <div className="-mt-9">
                  <button className="switch2 ml-28 mt-3 border-neutral-300 bg-neutral-300">
                    <label>
                      <input type="checkbox" id="theme-switch-input2" hidden />
                      <div className="ball2"></div>
                    </label>
                  </button>
                  <div className="-mt-8 ml-[185px] font-normal text-black">
                    Активный
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
