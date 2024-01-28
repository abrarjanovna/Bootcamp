import { Sidebar } from "../components";
import {
  YellowChart,
  PurpleChart,
  RedChart,
  LineChart,
  TopOrderChart,
  AverageOrderChart,
} from "../charts";
import frame from "../images/frame.svg";
import frame1 from "../images/frame1.svg";
import frame2 from "../images/frame2.svg";
import frame3 from "../images/frame3.svg";
import img from "../images/1850.svg";
import img2 from "../images/6250.svg";
import img3 from "../images/12750.svg";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-[55px] bg-white">
        <p className="m-3 ml-5 text-2xl font-bold">Dashboard</p>
        <div className="flex h-[1700px] w-[1292px] bg-[#4094F726]">
          <div className="flex cursor-pointer">
            <div className="box flex w-[271px]">
              <span className="ml-5 mt-8 text-2xl font-semibold text-[#4094F7]">
                24
              </span>
              <span className="-ml-7 mt-[70px] text-gray-500">Филиалы</span>
              <img className="ml-[95px] w-[72px]" src={frame} />
            </div>
            <div className="box flex w-[271px]">
              <span className="ml-5 mt-8 text-2xl font-semibold text-[#4094F7]">
                110,823
              </span>
              <span className="-ml-20 mt-[70px] text-gray-500">Клиенты</span>
              <img className="ml-24 w-[72px]" src={frame1} />
            </div>
            <div className="box flex w-[271px]">
              <span className="ml-5 mt-8 text-2xl font-semibold text-[#4094F7]">
                110,823
              </span>
              <span className="-ml-20 mt-[70px] text-gray-500">Подписчики</span>
              <img className="ml-16 w-[72px]" src={frame2} />
            </div>
            <div className="box flex w-[271px]">
              <span className="ml-5 mt-8 text-2xl font-semibold text-[#4094F7]">
                75
              </span>
              <span className="-ml-7 mt-[70px] text-gray-500">Курьеры</span>
              <img className="ml-[90px] w-[72px]" src={frame3} />
            </div>
          </div>
          <div className="-ml-[96.2%] mt-44">
            <div className="ml-[40px] flex">
              <YellowChart />
              <img className="-ml-[250px] -mt-40" src={img} />
              <div className="ml-14 h-[280px] w-[413px] rounded-xl bg-white">
                <div className="-ml-8 mt-10">
                  <TopOrderChart />
                </div>
              </div>
              <div className="ml-9 h-[280px] w-[413px] rounded-xl bg-white">
                <div className="-ml-8 mt-10">
                  <AverageOrderChart />
                </div>
              </div>
            </div>
            <div className="ml-[40px] mt-8 flex">
              <PurpleChart />
              <img className="-ml-[250px] -mt-40" src={img2} />
            </div>
            <div className="ml-[40px] mt-8 flex">
              <RedChart />
              <img className="-ml-[250px] -mt-40" src={img3} />
            </div>
            <div className="-mt-[595px] ml-[380px]">
              <LineChart />
            </div>
          </div>
          <table id="customers" className="cursor-pointer rounded-lg bg-white">
            <tr className="text-[#5B6871]">
              <th>Общий отчет</th>
            </tr>
            <hr className="hr" />
            <tr className="font-bold">
              <td>Число</td>
              <td>Доставка</td>
              <td>Доставка</td>
              <td>Самовывоз</td>
              <td>Агрегаторы</td>
            </tr>
            <hr className="hr" />
            <tr>
              <td>5560</td>
              <td>4600</td>
              <td>6065</td>
              <td>1577</td>
              <td>1317</td>
            </tr>
            <hr className="hr" />
            <tr>
              <td>5045</td>
              <td>3536</td>
              <td>8829</td>
              <td>8881</td>
              <td>8861</td>
            </tr>
            <hr className="hr" />
            <tr>
              <td>9151</td>
              <td>9462</td>
              <td>6025</td>
              <td>3993</td>
              <td>7791</td>
            </tr>
            <hr className="hr" />
            <tr>
              <td>1148</td>
              <td>2798</td>
              <td>5626</td>
              <td>5028</td>
              <td>4349</td>
            </tr>
            <hr className="hr" />
            <tr>
              <td>9359</td>
              <td>6690</td>
              <td>1439</td>
              <td>9374</td>
              <td>1784</td>
            </tr>
            <hr className="hr" />
            <tr>
              <td>4152</td>
              <td>9261</td>
              <td>8013</td>
              <td>4846</td>
              <td>5948</td>
            </tr>
            <hr className="hr" />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
