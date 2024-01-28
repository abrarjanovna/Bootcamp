import { GrLinkPrevious, GrNext } from "react-icons/gr";
import { Sidebar } from "../components";
import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa";

const ReviewsAbout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[1292px] pt-4">
        <Link to="/stockList/reviews">
          <p className="m-4 flex text-[#B0BABF]">
            <GrLinkPrevious />
            <span className="ml-4">
              <FaFolder />
            </span>
            <span className="-m-[6px] ml-3">Fikrlar Ro'yxati</span>
          </p>
        </Link>
        <div className="-mt-8 ml-[185px] text-[#b0babf]">
          <GrNext />
        </div>
        <div className="-mt-4 ml-52 flex text-[#4094F7]">
          <FaFolder />
          <span className="-mt-1 ml-2 text-black">😉 Kuryer juda yaxshi</span>
        </div>
        <div className="pt-4">
          <hr />
          <div className="h-[40px] bg-[#6E8BB70D] p-2 text-[#6E8BB7]">
            <Link
              to="/stockList/reviews/reviews-about/uzb"
              className="ml-4 cursor-pointer hover:text-[#4094f7]"
            >
              Узбекский
            </Link>
            <Link
              to="/stockList/reviews/reviews-about/ru"
              className="ml-4 cursor-pointer hover:text-[#4094f7]"
            >
              Русский
            </Link>
          </div>
        </div>
        <div className="flex h-[965px] bg-[#4094F726]"></div>
        <div className="-mt-[72%] ml-8 h-[310px] w-[740px] rounded-md bg-white">
          <p className="p-4 font-semibold">Fikr</p>
          <hr />
          <div className="p-4">
            <div className="ml-2 mt-4 font-semibold text-[#48535B]">
              Tavsif
              <p className="-mt-7 ml-48 h-[40px] w-[350px] rounded-md border border-gray-300 p-2 font-normal text-black">
                😉 Kuryer juda yaxshi
              </p>
              <div className="mt-4">
                Murojaat qilish:
                <select className="-mt-7 ml-[80px] h-[40px] w-[350px] rounded-md border border-gray-300 p-2 font-normal text-black focus:outline-none">
                  <option value="kuryer">Kuryerga</option>
                  <option value="kuryer">Operatorga</option>
                  <option value="kuryer">Mutaxassisga</option>
                </select>
              </div>
              <div className="mt-6">
                Tur
                <div className="-mt-9">
                  <button className="switch2 ml-48 mt-3 border-neutral-300 bg-neutral-300">
                    <label>
                      <input type="checkbox" id="theme-switch-input2" hidden />
                      <div className="ball2"></div>
                    </label>
                  </button>
                  <div className="-mt-8 ml-[265px] font-normal text-black">
                    Ijobiy
                  </div>
                </div>
              </div>
              <div className="mt-8">
                Holat
                <div className="-mt-9">
                  <button className="switch2 ml-48 mt-3 border-neutral-300 bg-neutral-300">
                    <label>
                      <input type="checkbox" id="theme-switch-input2" hidden />
                      <div className="ball2"></div>
                    </label>
                  </button>
                  <div className="-mt-8 ml-[265px] font-normal text-black">
                    Faol
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

export default ReviewsAbout;
