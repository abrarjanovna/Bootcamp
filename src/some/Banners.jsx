import { CgSearch } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Sidebar } from "../components";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "uz", headerName: "Hазвание на узбекском", width: 600 },
  { field: "ru", headerName: "Hазвание на русском", width: 500 },
  {
    field: "status",
    headerName: "Статус",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    uz: "Баннер 1",
    ru: "Баннер 1",
    status: "Активный",
  },
  {
    id: 2,
    uz: "Баннер 2",
    ru: "Баннер 2",
    status: "Активный",
  },
  {
    id: 3,
    uz: "Баннер 3",
    ru: "Баннер 3",
    status: "Активный",
  },
  {
    id: 4,
    uz: "Баннер 4",
    ru: "Баннер 4",
    status: "Активный",
  },
  {
    id: 5,
    uz: "Баннер 5",
    ru: "Баннер 5",
    status: "Активный",
  },
  {
    id: 6,
    uz: "Баннер 6",
    ru: "Баннер 6",
    status: "Активный",
  },
  {
    id: 7,
    uz: "Баннер 7",
    ru: "Баннер 7",
    status: "Активный",
  },
  {
    id: 8,
    ru: "Баннер 8",
    uz: "Баннер 8",
    status: "Активный",
  },
  {
    id: 9,
    uz: "Баннер 9",
    ru: "Баннер 9",
    status: "Активный",
  },
  {
    id: 10,
    uz: "Баннер 10",
    ru: "Баннер 10",
    status: "Активный",
  },
  {
    id: 11,
    uz: "Баннер 11",
    ru: "Баннер 11",
    status: "Активный",
  },
  {
    id: 12,
    uz: "Баннер 12",
    ru: "Баннер 12",
    status: "Активный",
  },
  {
    id: 13,
    ru: "Баннер 13",
    uz: "Баннер 13",
    status: "Активный",
  },
  {
    id: 14,
    uz: "Баннер 14",
    ru: "Баннер 14",
    status: "Активный",
  },
  {
    id: 15,
    uz: "Баннер 15",
    ru: "Баннер 15",
    status: "Активный",
  },
  {
    id: 16,
    uz: "Баннер 16",
    ru: "Баннер 16",
    status: "Активный",
  },
  {
    id: 17,
    uz: "Баннер 17",
    ru: "Баннер 17",
    status: "Активный",
  },
  {
    id: 18,
    uz: "Баннер 18",
    ru: "Баннер 18",
    status: "Активный",
  },
  {
    id: 19,
    uz: "Баннер 19",
    ru: "Баннер 19",
    status: "Активный",
  },
  {
    id: 20,
    uz: "Баннер 20",
    ru: "Баннер 20",
    status: "Активный",
  },
  {
    id: 21,
    uz: "Баннер 21",
    ru: "Баннер 21",
    status: "Активный",
  },
  {
    id: 22,
    uz: "Баннер 22",
    ru: "Баннер 22",
    status: "Активный",
  },
  {
    id: 23,
    uz: "Баннер 23",
    ru: "Баннер 23",
    status: "Активный",
  },
  {
    id: 24,
    uz: "Баннер 24",
    ru: "Баннер 24",
    status: "Активный",
  },
  {
    id: 25,
    uz: "Баннер 25",
    ru: "Баннер 25",
    status: "Активный",
  },
  {
    id: 26,
    uz: "Баннер 26",
    ru: "Баннер 26",
    status: "Активный",
  },
  {
    id: 27,
    uz: "Баннер 27",
    ru: "Баннер 27",
    status: "Активный",
  },
  {
    id: 28,
    uz: "Баннер 28",
    ru: "Баннер 28",
    status: "Активный",
  },
  {
    id: 29,
    uz: "Баннер 29",
    ru: "Баннер 29",
    status: "Активный",
  },
  {
    id: 30,
    uz: "Баннер 30",
    ru: "Баннер 30",
    status: "Активный",
  },
  {
    id: 31,
    uz: "Баннер 31",
    ru: "Баннер 31",
    status: "Активный",
  },
  {
    id: 32,
    uz: "Баннер 32",
    ru: "Баннер 32",
    status: "Активный",
  },
  {
    id: 33,
    uz: "Баннер 33",
    ru: "Баннер 33",
    status: "Активный",
  },
  {
    id: 34,
    uz: "Баннер 34",
    ru: "Баннер 34",
    status: "Активный",
  },
  {
    id: 35,
    uz: "Баннер 35",
    ru: "Баннер 35",
    status: "Активный",
  },
  {
    id: 36,
    uz: "Баннер 36",
    ru: "Баннер 36",
    status: "Активный",
  },
  {
    id: 37,
    uz: "Баннер 37",
    ru: "Баннер 37",
    status: "Активный",
  },
  {
    id: 38,
    uz: "Баннер 38",
    ru: "Баннер 38",
    status: "Активный",
  },
  {
    id: 39,
    uz: "Баннер 39",
    ru: "Баннер 39",
    status: "Активный",
  },
  {
    id: 40,
    uz: "Баннер 40",
    ru: "Баннер 40",
    status: "Активный",
  },
  {
    id: 41,
    uz: "Баннер 41",
    ru: "Баннер 41",
    status: "Активный",
  },
  {
    id: 42,
    uz: "Баннер 42",
    ru: "Баннер 42",
    status: "Активный",
  },
  {
    id: 43,
    uz: "Баннер 43",
    ru: "Баннер 43",
    status: "Активный",
  },
  {
    id: 44,
    uz: "Баннер 44",
    ru: "Баннер 44",
    status: "Активный",
  },
  {
    id: 45,
    uz: "Баннер 45",
    ru: "Баннер 45",
    status: "Активный",
  },
  {
    id: 46,
    uz: "Баннер 46",
    ru: "Баннер 46",
    status: "Активный",
  },
  {
    id: 47,
    uz: "Баннер 47",
    ru: "Баннер 47",
    status: "Активный",
  },
  {
    id: 48,
    uz: "Баннер 48",
    ru: "Баннер 48",
    status: "Активный",
  },
  {
    id: 49,
    uz: "Баннер 49",
    ru: "Баннер 49",
    status: "Активный",
  },
  {
    id: 50,
    uz: "Баннер 50",
    ru: "Баннер 50",
    status: "Активный",
  },
  {
    id: 51,
    uz: "Баннер 51",
    ru: "Баннер 51",
    status: "Активный",
  },
  {
    id: 52,
    uz: "Баннер 52",
    ru: "Баннер 52",
    status: "Активный",
  },
  {
    id: 53,
    uz: "Баннер 53",
    ru: "Баннер 53",
    status: "Активный",
  },
  {
    id: 54,
    uz: "Баннер 54",
    ru: "Баннер 54",
    status: "Активный",
  },
  {
    id: 55,
    uz: "Баннер 55",
    ru: "Баннер 55",
    status: "Активный",
  },
  {
    id: 56,
    uz: "Баннер 56",
    ru: "Баннер 56",
    status: "Активный",
  },
  {
    id: 57,
    uz: "Баннер 57",
    ru: "Баннер 57",
    status: "Активный",
  },
  {
    id: 58,
    uz: "Баннер 58",
    ru: "Баннер 58",
    status: "Активный",
  },
  {
    id: 59,
    uz: "Баннер 59",
    ru: "Баннер 59",
    status: "Активный",
  },
  {
    id: 60,
    uz: "Баннер 60",
    ru: "Баннер 60",
    status: "Активный",
  },
  {
    id: 61,
    uz: "Баннер 61",
    ru: "Баннер 61",
    status: "Активный",
  },
  {
    id: 62,
    uz: "Баннер 62",
    ru: "Баннер 62",
    status: "Активный",
  },
  {
    id: 63,
    uz: "Баннер 63",
    ru: "Баннер 63",
    status: "Активный",
  },
  {
    id: 64,
    uz: "Баннер 64",
    ru: "Баннер 64",
    status: "Активный",
  },
  {
    id: 65,
    uz: "Баннер 65",
    ru: "Баннер 65",
    status: "Активный",
  },
  {
    id: 66,
    uz: "Баннер 66",
    ru: "Баннер 66",
    status: "Активный",
  },
  {
    id: 67,
    uz: "Баннер 67",
    ru: "Баннер 67",
    status: "Активный",
  },
  {
    id: 68,
    uz: "Баннер 68",
    ru: "Баннер 68",
    status: "Активный",
  },
  {
    id: 69,
    uz: "Баннер 69",
    ru: "Баннер 69",
    status: "Активный",
  },
  {
    id: 70,
    uz: "Баннер 70",
    ru: "Баннер 70",
    status: "Активный",
  },
  {
    id: 71,
    uz: "Баннер 71",
    ru: "Баннер 71",
    status: "Активный",
  },
  {
    id: 72,
    uz: "Баннер 72",
    ru: "Баннер 72",
    status: "Активный",
  },
  {
    id: 73,
    uz: "Баннер 73",
    ru: "Баннер 73",
    status: "Активный",
  },
  {
    id: 74,
    uz: "Баннер 74",
    ru: "Баннер 74",
    status: "Активный",
  },
  {
    id: 75,
    uz: "Баннер 75",
    ru: "Баннер 75",
    status: "Активный",
  },
  {
    id: 76,
    uz: "Баннер 76",
    ru: "Баннер 76",
    status: "Активный",
  },
  {
    id: 77,
    uz: "Баннер 77",
    ru: "Баннер 77",
    status: "Активный",
  },
  {
    id: 78,
    uz: "Баннер 78",
    ru: "Баннер 78",
    status: "Активный",
  },
  {
    id: 79,
    uz: "Баннер 79",
    ru: "Баннер 79",
    status: "Активный",
  },
  {
    id: 80,
    uz: "Баннер 80",
    ru: "Баннер 80",
    status: "Активный",
  },
  {
    id: 81,
    uz: "Баннер 81",
    ru: "Баннер 81",
    status: "Активный",
  },
  {
    id: 82,
    uz: "Баннер 82",
    ru: "Баннер 82",
    status: "Активный",
  },
  {
    id: 83,
    uz: "Баннер 83",
    ru: "Баннер 83",
    status: "Активный",
  },
  {
    id: 84,
    uz: "Баннер 84",
    ru: "Баннер 84",
    status: "Активный",
  },
  {
    id: 85,
    uz: "Баннер 85",
    ru: "Баннер 85",
    status: "Активный",
  },
  {
    id: 86,
    uz: "Баннер 86",
    ru: "Баннер 86",
    status: "Активный",
  },
];

const Banners = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[1292px] pt-4">
        <div className="flex">
          <p className="ml-5 text-2xl font-bold text-[#5B6871]">
            Список баннеров
          </p>
          <div className="ml-[645px] mt-1  h-[32px] w-[400px] border text-gray-500">
            <div className="flex p-2">
              <CgSearch />
              <input
                type="text"
                placeholder="Поиск..."
                className="h-1 p-2 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="pt-4">
          <hr />
          <div className="h-[40px] bg-[#6E8BB70D] p-2 text-[#6E8BB7]">
            <Link
              to="/stockList/banners"
              className="ml-4 cursor-pointer hover:text-[#4094f7]"
            >
              Баннеры
            </Link>
            <Link
              to="/stockList/reviews"
              className="ml-4 cursor-pointer hover:text-[#4094f7]"
            >
              Отзывы
            </Link>
          </div>
        </div>
        <div className="flex h-[965px] bg-[#4094F726]">
          <div className="m-4 h-[370px] cursor-pointer bg-white">
            <Link to="/stockList/banners/about-banners">
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[10, 20]}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
