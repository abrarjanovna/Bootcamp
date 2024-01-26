import { CgSearch } from "react-icons/cg";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Sidebar } from "../components";
import frame from "../images/frame.svg";
import frame1 from "../images/frame1.svg";
import frame2 from "../images/frame2.svg";
import frame3 from "../images/frame3.svg";

const columns = [
  { field: "firstName", headerName: "Название", width: 700 },
  { field: "number", headerName: "Номер телефона", width: 300 },
  {
    field: "status",
    headerName: "Статус",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    firstName: "Cody Fisher",
    number: "(907) 555-0101",
    status: "Активный",
  },
  {
    id: 2,
    firstName: "Ronald Richards",
    number: "(319) 555-0115",
    status: "Не активный",
  },
  {
    id: 3,
    firstName: "Devon Lane",
    number: "(684) 555-0102",
    status: "Активный",
  },
  {
    id: 4,
    firstName: "Kathryn Murphy",
    number: "(252) 555-0126",
    status: "Не активный",
  },
  {
    id: 5,
    firstName: "Darrell Steward",
    number: "(302) 555-0107",
    status: "Не активный",
  },
  {
    id: 6,
    firstName: "Dianne Russell",
    number: "(219) 555-0114",
    status: "Активный",
  },
  {
    id: 7,
    firstName: "Jane Cooper",
    number: "(603) 555-0123",
    status: "Активный",
  },
  {
    id: 8,
    firstName: "Eleanor Pena",
    number: "(270) 555-0117",
    status: "Активный",
  },
  {
    id: 9,
    firstName: "Kristin Watson",
    number: "(205) 555-0100",
    status: "Не активный",
  },
  {
    id: 10,
    firstName: "Robert Fox",
    number: "(209) 555-0104",
    status: "Не активный",
  },
  {
    id: 11,
    firstName: "Robert Fox",
    number: "(209) 555-0104",
    status: "Не активный",
  },
  {
    id: 12,
    firstName: "Kristin Watson",
    number: "(205) 555-0100",
    status: "Не активный",
  },
  {
    id: 13,
    firstName: "Eleanor Pena",
    number: "(270) 555-0117",
    status: "Активный",
  },
  {
    id: 14,
    firstName: "Jane Cooper",
    number: "(603) 555-0123",
    status: "Активный",
  },
  {
    id: 15,
    firstName: "Dianne Russell",
    number: "(219) 555-0114",
    status: "Активный",
  },
  {
    id: 16,
    firstName: "Darrell Steward",
    number: "(302) 555-0107",
    status: "Не активный",
  },
  {
    id: 17,
    firstName: "Kathryn Murphy",
    number: "(252) 555-0126",
    status: "Не активный",
  },
  {
    id: 18,
    firstName: "Devon Lane",
    number: "(684) 555-0102",
    status: "Активный",
  },
  {
    id: 19,
    firstName: "Ronald Richards",
    number: "(319) 555-0115",
    status: "Не активный",
  },
  {
    id: 20,
    firstName: "Cody Fisher",
    number: "(907) 555-0101",
    status: "Активный",
  },
  {
    id: 21,
    firstName: "Cody Fisher",
    number: "(907) 555-0101",
    status: "Активный",
  },
  {
    id: 22,
    firstName: "Ronald Richards",
    number: "(319) 555-0115",
    status: "Не активный",
  },
  {
    id: 23,
    firstName: "Devon Lane",
    number: "(684) 555-0102",
    status: "Активный",
  },
  {
    id: 24,
    firstName: "Kathryn Murphy",
    number: "(252) 555-0126",
    status: "Не активный",
  },
  {
    id: 25,
    firstName: "Darrell Steward",
    number: "(302) 555-0107",
    status: "Не активный",
  },
  {
    id: 26,
    firstName: "Dianne Russell",
    number: "(219) 555-0114",
    status: "Активный",
  },
  {
    id: 27,
    firstName: "Jane Cooper",
    number: "(603) 555-0123",
    status: "Активный",
  },
  {
    id: 28,
    firstName: "Eleanor Pena",
    number: "(270) 555-0117",
    status: "Активный",
  },
  {
    id: 29,
    firstName: "Kristin Watson",
    number: "(205) 555-0100",
    status: "Не активный",
  },
  {
    id: 30,
    firstName: "Robert Fox",
    number: "(209) 555-0104",
    status: "Не активный",
  },
  {
    id: 30,
    firstName: "Robert Fox",
    number: "(209) 555-0104",
    status: "Не активный",
  },
  {
    id: 32,
    firstName: "Kristin Watson",
    number: "(205) 555-0100",
    status: "Не активный",
  },
  {
    id: 33,
    firstName: "Eleanor Pena",
    number: "(270) 555-0117",
    status: "Активный",
  },
  {
    id: 34,
    firstName: "Jane Cooper",
    number: "(603) 555-0123",
    status: "Активный",
  },
  {
    id: 35,
    firstName: "Dianne Russell",
    number: "(219) 555-0114",
    status: "Активный",
  },
  {
    id: 36,
    firstName: "Darrell Steward",
    number: "(302) 555-0107",
    status: "Не активный",
  },
  {
    id: 37,
    firstName: "Kathryn Murphy",
    number: "(252) 555-0126",
    status: "Не активный",
  },
  {
    id: 38,
    firstName: "Devon Lane",
    number: "(684) 555-0102",
    status: "Активный",
  },
  {
    id: 39,
    firstName: "Ronald Richards",
    number: "(319) 555-0115",
    status: "Не активный",
  },
  {
    id: 40,
    firstName: "Cody Fisher",
    number: "(907) 555-0101",
    status: "Активный",
  },
  {
    id: 41,
    firstName: "Cody Fisher",
    number: "(907) 555-0101",
    status: "Активный",
  },
  {
    id: 42,
    firstName: "Ronald Richards",
    number: "(319) 555-0115",
    status: "Не активный",
  },
  {
    id: 43,
    firstName: "Devon Lane",
    number: "(684) 555-0102",
    status: "Активный",
  },
  {
    id: 44,
    firstName: "Kathryn Murphy",
    number: "(252) 555-0126",
    status: "Не активный",
  },
  {
    id: 45,
    firstName: "Darrell Steward",
    number: "(302) 555-0107",
    status: "Не активный",
  },
  {
    id: 46,
    firstName: "Dianne Russell",
    number: "(219) 555-0114",
    status: "Активный",
  },
  {
    id: 47,
    firstName: "Jane Cooper",
    number: "(603) 555-0123",
    status: "Активный",
  },
  {
    id: 48,
    firstName: "Eleanor Pena",
    number: "(270) 555-0117",
    status: "Активный",
  },
  {
    id: 49,
    firstName: "Kristin Watson",
    number: "(205) 555-0100",
    status: "Не активный",
  },
  {
    id: 50,
    firstName: "Robert Fox",
    number: "(209) 555-0104",
    status: "Не активный",
  },
  {
    id: 51,
    firstName: "Robert Fox",
    number: "(209) 555-0104",
    status: "Не активный",
  },
  {
    id: 52,
    firstName: "Kristin Watson",
    number: "(205) 555-0100",
    status: "Не активный",
  },
  {
    id: 53,
    firstName: "Eleanor Pena",
    number: "(270) 555-0117",
    status: "Активный",
  },
  {
    id: 54,
    firstName: "Jane Cooper",
    number: "(603) 555-0123",
    status: "Активный",
  },
  {
    id: 55,
    firstName: "Dianne Russell",
    number: "(219) 555-0114",
    status: "Активный",
  },
  {
    id: 56,
    firstName: "Darrell Steward",
    number: "(302) 555-0107",
    status: "Не активный",
  },
  {
    id: 57,
    firstName: "Kathryn Murphy",
    number: "(252) 555-0126",
    status: "Не активный",
  },
  {
    id: 58,
    firstName: "Devon Lane",
    number: "(684) 555-0102",
    status: "Активный",
  },
  {
    id: 59,
    firstName: "Ronald Richards",
    number: "(319) 555-0115",
    status: "Не активный",
  },
  {
    id: 60,
    firstName: "Cody Fisher",
    number: "(907) 555-0101",
    status: "Активный",
  },
  {
    id: 61,
    firstName: "Cody Fisher",
    number: "(907) 555-0101",
    status: "Активный",
  },
  {
    id: 62,
    firstName: "Ronald Richards",
    number: "(319) 555-0115",
    status: "Не активный",
  },
  {
    id: 63,
    firstName: "Devon Lane",
    number: "(684) 555-0102",
    status: "Активный",
  },
  {
    id: 64,
    firstName: "Kathryn Murphy",
    number: "(252) 555-0126",
    status: "Не активный",
  },
  {
    id: 65,
    firstName: "Darrell Steward",
    number: "(302) 555-0107",
    status: "Не активный",
  },
  {
    id: 66,
    firstName: "Dianne Russell",
    number: "(219) 555-0114",
    status: "Активный",
  },
  {
    id: 67,
    firstName: "Jane Cooper",
    number: "(603) 555-0123",
    status: "Активный",
  },
  {
    id: 68,
    firstName: "Eleanor Pena",
    number: "(270) 555-0117",
    status: "Активный",
  },
  {
    id: 69,
    firstName: "Kristin Watson",
    number: "(205) 555-0100",
    status: "Не активный",
  },
  {
    id: 70,
    firstName: "Robert Fox",
    number: "(209) 555-0104",
    status: "Не активный",
  },
  {
    id: 71,
    firstName: "Robert Fox",
    number: "(209) 555-0104",
    status: "Не активный",
  },
  {
    id: 72,
    firstName: "Kristin Watson",
    number: "(205) 555-0100",
    status: "Не активный",
  },
  {
    id: 73,
    firstName: "Eleanor Pena",
    number: "(270) 555-0117",
    status: "Активный",
  },
  {
    id: 74,
    firstName: "Jane Cooper",
    number: "(603) 555-0123",
    status: "Активный",
  },
  {
    id: 75,
    firstName: "Dianne Russell",
    number: "(219) 555-0114",
    status: "Активный",
  },
  {
    id: 76,
    firstName: "Darrell Steward",
    number: "(302) 555-0107",
    status: "Не активный",
  },
  {
    id: 77,
    firstName: "Kathryn Murphy",
    number: "(252) 555-0126",
    status: "Не активный",
  },
  {
    id: 78,
    firstName: "Devon Lane",
    number: "(684) 555-0102",
    status: "Активный",
  },
  {
    id: 79,
    firstName: "Ronald Richards",
    number: "(319) 555-0115",
    status: "Не активный",
  },
  {
    id: 80,
    firstName: "Cody Fisher",
    number: "(907) 555-0101",
    status: "Активный",
  },
  {
    id: 81,
    firstName: "Cody Fisher",
    number: "(907) 555-0101",
    status: "Активный",
  },
  {
    id: 82,
    firstName: "Ronald Richards",
    number: "(319) 555-0115",
    status: "Не активный",
  },
  {
    id: 83,
    firstName: "Devon Lane",
    number: "(684) 555-0102",
    status: "Активный",
  },
  {
    id: 84,
    firstName: "Kathryn Murphy",
    number: "(252) 555-0126",
    status: "Не активный",
  },
  {
    id: 85,
    firstName: "Darrell Steward",
    number: "(302) 555-0107",
    status: "Не активный",
  },
  {
    id: 86,
    firstName: "Dianne Russell",
    number: "(219) 555-0114",
    status: "Активный",
  },
];

export default function Table() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-[55px] w-[1376px] bg-white">
        <p className="m-3 text-2xl font-bold">Клиенты</p>
        <div className="mb-4 ml-4 h-[32px] w-[400px] border text-gray-500">
          <div className="flex p-2">
            <CgSearch />
            <input
              type="text"
              placeholder="Поиск..."
              className="h-1 p-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex h-[965px] bg-[#4094F726]">
          <div className="box flex">
            <span className="ml-5 mt-8 text-2xl font-semibold text-[#4094F7]">
              24
            </span>
            <span className="-ml-7 mt-[70px] text-gray-500">Филиалы</span>
            <img className="ml-[90px] w-[72px]" src={frame} />
          </div>
          <div className="box flex">
            <span className="ml-5 mt-8 text-2xl font-semibold text-[#4094F7]">
              110,823
            </span>
            <span className="-ml-20 mt-[70px] text-gray-500">Клиенты</span>
            <img className="ml-24 w-[72px]" src={frame1} />
          </div>
          <div className="box flex">
            <span className="ml-5 mt-8 text-2xl font-semibold text-[#4094F7]">
              110,823
            </span>
            <span className="-ml-20 mt-[70px] text-gray-500">Подписчики</span>
            <img className="ml-16 w-[72px]" src={frame2} />
          </div>
          <div className="box flex">
            <span className="ml-5 mt-8 text-2xl font-semibold text-[#4094F7]">
              75
            </span>
            <span className="-ml-7 mt-[70px] text-gray-500">Курьеры</span>
            <img className="ml-[90px] w-[72px]" src={frame3} />
          </div>
        </div>
        <div className="-mt-[790px] ml-8 w-[1176px] bg-white">
          <Link to="/about-clients">
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[10, 20]}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

// spisok aktsiy shu page da bo'ladi!
