import frame from "../images/frame.svg";
import frame1 from "../images/frame1.svg";
import frame2 from "../images/frame2.svg";
import frame3 from "../images/frame3.svg";
import { CgSearch } from "react-icons/cg";
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "../components/Sidebar";

const columns = [
  { field: "id", headerName: "№", width: 1 },
  { field: "firstName", headerName: "Название", width: 650 },
  { field: "number", headerName: "Номер телефона", width: 200 },
  {
    field: "status",
    headerName: "Статус",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, firstName: "Cody Fisher", number: "(907) 555-0101", status: 35 },
  { id: 2, firstName: "Ronald Richards", number: "(319) 555-0115", status: 42 },
  { id: 3, firstName: "Devon Lane", number: "(684) 555-0102", status: 45 },
  { id: 4, firstName: "Kathryn Murphy", number: "(252) 555-0126", status: 16 },
  { id: 5, firstName: "Darrell Steward", number: "(302) 555-0107", status: 16 },
  { id: 6, firstName: "Dianne Russell", number: "(219) 555-0114", status: 150 },
  { id: 7, firstName: "Jane Cooper", number: "(603) 555-0123", status: 44 },
  { id: 8, firstName: "Eleanor Pena", number: "(270) 555-0117", status: 36 },
  { id: 9, firstName: "Kristin Watson", number: "(205) 555-0100", status: 65 },
  { id: 10, firstName: "Robert Fox", number: "(209) 555-0104", status: 65 },
];

export default function DataTable() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[1376px] bg-white h-[55px]">
        <p className="font-bold m-3 text-2xl">Клиенты</p>
        <div className="text-gray-500 border w-[400px] h-[32px] ml-4 mb-4">
          <div className="flex p-2">
            <CgSearch />
            <input
              type="text"
              placeholder="Поиск"
              className="p-2 h-1 focus:outline-none"
            />
          </div>
        </div>
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
        </div>
        <div className="-mt-[790px] ml-8 w-[1176px] bg-white">
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </div>
    </div>
  );
}
