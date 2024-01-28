import { Link } from "react-router-dom";
import { Sidebar } from "../components";
import { GrLinkPrevious, GrNext } from "react-icons/gr";
import { FaFolder } from "react-icons/fa";

const AboutCompany = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[1292px] pt-4">
        <Link to="/settings">
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
        <div className="-mt-4 ml-60 flex text-[#4094F7]">
          <FaFolder />
          <span className="-mt-1 ml-2 text-black">L'Oréal</span>
        </div>
        <div className="pt-4">
          <hr />
          <div className="h-[40px] bg-[#6E8BB70D] p-2 text-[#6E8BB7]">
            <Link
              to="/settings/about-company"
              className="ml-4 cursor-pointer hover:text-[#4094f7]"
            >
              О компании
            </Link>
            <Link
              to="/settings/company-branch"
              className="ml-8 cursor-pointer hover:text-[#4094f7]"
            >
              Филиалы компаний
            </Link>
            <Link to="/settings/regions" className="ml-8 cursor-pointer hover:text-[#4094f7]">
              Регионы
            </Link>
          </div>
          <div className="flex h-[965px] bg-[#4094F726]"></div>
          <div className="flex">
            <div className="-mt-[72%] ml-8 h-[422px] w-[600px] rounded-md bg-white">
              <p className="p-4 font-semibold">Общие сведения</p>
              <hr />
              <div className="p-4">
                <div className="ml-2 mt-4 font-semibold text-[#48535B]">
                  Название компании
                  <p className="-mt-7 ml-48 h-[40px] w-[360px] rounded-md border border-gray-300 p-2 font-normal text-black focus:outline-none">
                    L'Oréal
                  </p>
                  <div className="mt-4">
                    Владелец
                    <p className="-mt-7 ml-[193px] h-[40px] w-[360px] rounded-md border border-gray-300 p-2 font-normal text-black focus:outline-none">
                      Андианова София
                    </p>
                  </div>
                  <div className="mt-4">
                    Год основания
                    <p className="-mt-7 ml-[193px] h-[40px] w-[360px] rounded-md border border-gray-300 p-2 font-normal text-black focus:outline-none">
                      2008
                    </p>
                  </div>
                  <p className="mt-4">Тип компании</p>
                  <div className="-mt-7">
                    <select className="ml-[193px] h-[40px] w-[360px] rounded-md border border-gray-300 p-2 font-normal text-black focus:outline-none">
                      <option value="proizvodstvo">Производство</option>
                      <option value="proizvodstvo">Производство</option>
                      <option value="proizvodstvo">Производство</option>
                    </select>
                  </div>
                  <p className="mt-4">Индустрия</p>
                  <div className="-mt-7">
                    <select className="ml-[193px] h-[40px] w-[360px] rounded-md border border-gray-300 p-2 font-normal text-black focus:outline-none">
                      <option value="proizvodstvo">Еда и напитки</option>
                      <option value="proizvodstvo">Еда и напитки</option>
                      <option value="proizvodstvo">Еда и напитки</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    Bеб сайт организации
                    <p className="-mt-7 ml-[193px] h-[40px] w-[360px] rounded-md border border-gray-300 p-2 font-normal text-black focus:outline-none">
                      loreal.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mt-[58.2rem] ml-8 h-[356px] w-[600px] rounded-md bg-white">
              <p className="p-4 font-semibold">Рабочий процесс</p>
              <hr />
              <div className="p-4">
                <div className="ml-2 mt-4 font-semibold text-[#48535B]">
                  Главный офис
                  <p className="-mt-7 ml-48 h-[40px] w-[360px] rounded-md border border-gray-300 p-2 font-normal text-black focus:outline-none">
                    Лондон
                  </p>
                  <div className="mt-4">
                    Кол-во сотрудников от
                    <p className="-mt-7 ml-[193px] h-[40px] w-[360px] rounded-md border border-gray-300 p-2 font-normal text-black focus:outline-none">
                      100
                    </p>
                  </div>
                  <div className="mt-4">
                    Кол-во сотрудников до
                    <p className="-mt-7 ml-[193px] h-[40px] w-[360px] rounded-md border border-gray-300 p-2 font-normal text-black focus:outline-none">
                      5 000
                    </p>
                  </div>
                  <div className="mt-4">
                    Доход от
                    <p className="-mt-7 ml-[193px] h-[40px] w-[360px] rounded-md border border-gray-300 p-2 font-normal text-black focus:outline-none">
                      5 000 000 сум
                    </p>
                  </div>
                  <div className="mt-4">
                    Доход до
                    <p className="-mt-7 ml-[193px] h-[40px] w-[360px] rounded-md border border-gray-300 p-2 font-normal text-black focus:outline-none">
                      100 000 000 сум
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-[30rem] ml-8 h-[266px] w-[600px] rounded-md bg-white">
            <p className="p-4 font-semibold">Описание</p>
            <hr />
            <div className="ml-4 mt-4 w-[95%] rounded-xl border p-4">
              Physical space is often conceived in three linear dimensions,
              although modern physicists usually consider it, with time, to be
              part of a boundless four-dimensional continuum known as spacetime.
              The concept of space is considered to be of fundamental importance
              to an understanding of the physical universe. However,
              disagreement continues between philosophers over whether it is
              itself an entity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
