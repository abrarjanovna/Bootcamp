import Sidebar from "../components/Sidebar";
import frame from "../images/frame.svg";
import frame1 from "../images/frame1.svg";
import frame2 from "../images/frame2.svg";
import frame3 from "../images/frame3.svg";
import chart from "../images/chart.svg";
import chart70 from "../images/70.svg";
import chart45 from "../images/45.svg";
import chart12 from "../images/12.svg";
import chart1 from "../images/12chart.svg";
import line_chart from "../images/line_chart.svg";
// import FirstChart from "../charts/FirstChart";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
     <div className="w-[1376px] bg-white h-[55px]">
        <p className="font-bold m-3 text-2xl">Dashboard</p>
        <div className="bg-[#4094F726] h-[965px] flex">
          <div className="box flex">
            <span className="font-semibold text-2xl ml-5 mt-8 text-[#4094F7]">
              24
            </span>
            <span className="mt-[70px] -ml-7 text-gray-500">Филиалы</span>
            <img className="w-[72px] ml-[90px]" src={frame} />
          </div>
          <div className="box flex">
            <span className="font-semibold text-2xl ml-5 mt-8 text-[#4094F7]">
              110,823
            </span>
            <span className="mt-[70px] -ml-20 text-gray-500">Клиенты</span>
            <img className="w-[72px] ml-24" src={frame1} />
          </div>
          <div className="box flex">
            <span className="font-semibold text-2xl ml-5 mt-8 text-[#4094F7]">
              110,823
            </span>
            <span className="mt-[70px] -ml-20 text-gray-500">Подписчики</span>
            <img className="w-[72px] ml-16" src={frame2} />
          </div>
          <div className="box flex">
            <span className="font-semibold text-2xl ml-5 mt-8 text-[#4094F7]">
              75
            </span>
            <span className="mt-[70px] -ml-7 text-gray-500">Курьеры</span>
            <img className="w-[72px] ml-[90px]" src={frame3} />
          </div>
          <div className="mt-44 -ml-[85.4%] ">
            <div className="flex">
      {/* <FirstChart/> */}
              <img src={chart} />
              <img className="ml-[25px]" src={chart70} />
              <img className="ml-[45px]" src={chart45} />
            </div>
            <img src={line_chart} className="ml-[330px] mt-4" />
            <img src={chart12} className="-mt-[470px]" />
            <img src={chart1} className="mt-8" />
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Dashboard;
