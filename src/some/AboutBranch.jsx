import { Link } from "react-router-dom";
import { Sidebar } from "../components";
import { GrLinkPrevious, GrNext } from "react-icons/gr";
import { FaFolder } from "react-icons/fa";
import photo from "../images/photo.svg";

const AboutBranch = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[1292px] pt-4">
        <Link to="/settings/company-branch">
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
          <span className="-mt-1 ml-2 text-black">The Walt Disney Company</span>
        </div>
        <div className="pt-4">
          <hr />
          <div className="h-[40px] bg-[#6E8BB70D] p-2 text-[#6E8BB7]">
            <Link
              to="/settings/company-branch/about-branch"
              className="ml-4 cursor-pointer hover:text-[#4094f7]"
            >
              О филиале
            </Link>
            <Link
              to="/settings/company-branch/catalog/category"
              className="ml-8 cursor-pointer hover:text-[#4094f7]"
            >
              Каталог
            </Link>
            <Link
              to="/settings/company-branch/personal/kuryer"
              className="ml-8 cursor-pointer hover:text-[#4094f7]"
            >
              Персонал
            </Link>
          </div>
          <div className="flex h-[965px] bg-[#4094F726]"></div>
        </div>
        <div className="-mt-[72%] ml-8 h-[260px] w-[560px] rounded-md bg-white">
          <p className="p-4 font-semibold">Общие сведения</p>
          <hr />
          <div className="p-4">
            <img src={photo} />
            <p className="m-1 cursor-pointer font-semibold text-[#4094F7]">
              Изменить фото
            </p>
            <div className="-mt-36 ml-36 font-semibold text-[#48535B]">
              Hазвание
              <p className="-mt-7 ml-28 h-[40px] w-[252px] rounded-md border border-gray-300 p-2 font-normal text-black">
                София
              </p>
              <div className="mt-4">
                Телефон
                <p className="-mt-7 ml-28 h-[40px] w-[252px] rounded-md border border-gray-300 p-2 font-normal text-black">
                  +998 (90) 123-45-67
                </p>
              </div>
              <div className="mt-4">
                Адрес
                <p className="-mt-7 ml-28 h-[40px] w-[252px] rounded-md border border-gray-300 p-2 font-normal text-black">
                  Алмазар т. Янги Алмазар 51
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="-mt-[238px] ml-[110%] h-[450px] rounded-md bg-white">
              <p className="p-4 font-semibold">График работы</p>
              <hr />
              <div className="p-4">
                <div className="ml-2 font-semibold text-[#48535B]">
                  <p>Понедельник</p>
                  <p className="-mt-7 ml-32 h-[40px] w-[322px] rounded-md border border-gray-300 p-2 font-normal text-black">
                    09:00 - 18:00
                  </p>
                </div>
                <div className="ml-2 font-semibold text-[#48535B]">
                  <p className="mt-4">Вторник</p>
                  <p className="-mt-7 ml-32 h-[40px] w-[322px] rounded-md border border-gray-300 p-2 font-normal text-black">
                    09:00 - 18:00
                  </p>
                </div>
                <div className="ml-2 font-semibold text-[#48535B]">
                  <p className="mt-4">Среда</p>
                  <p className="-mt-7 ml-32 h-[40px] w-[322px] rounded-md border border-gray-300 p-2 font-normal text-black">
                    09:00 - 18:00
                  </p>
                </div>
                <div className="ml-2 font-semibold text-[#48535B]">
                  <p className="mt-4">Четверг</p>
                  <p className="-mt-7 ml-32 h-[40px] w-[322px] rounded-md border border-gray-300 p-2 font-normal text-black">
                    09:00 - 18:00
                  </p>
                </div>
                <div className="ml-2 font-semibold text-[#48535B]">
                  <p className="mt-4">Пятница</p>
                  <p className="-mt-7 ml-32 h-[40px] w-[322px] rounded-md border border-gray-300 p-2 font-normal text-black">
                    09:00 - 18:00
                  </p>
                </div>
                <div className="ml-2 font-semibold text-[#48535B]">
                  <p className="mt-4">Суббота</p>
                  <p className="-mt-7 ml-32 h-[40px] w-[322px] rounded-md border border-gray-300 p-2 font-normal text-black">
                    09:00 - 18:00
                  </p>
                </div>
                <div className="ml-2 font-semibold text-[#84919A]">
                  <p className="mt-4">Воскресенье</p>
                  <p className="-mt-7 ml-32 h-[40px] w-[322px] rounded-md border border-gray-300 p-2 font-normal text-[#84919A]">
                    09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-36 h-96 bg-white">
            <p className="pl-5 pt-5 text-2xl font-bold">Локация</p>
            <div className="relative h-80">
              <iframe
                className="h-full w-[100%] p-4"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBranch;
