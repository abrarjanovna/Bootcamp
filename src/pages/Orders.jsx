import { DataGrid } from "@mui/x-data-grid";
import { CgSearch } from "react-icons/cg";
import Sidebar from "../components/Sidebar";

const columns = [
  { field: "id", headerName: "№", width: 10 },
  { field: "firstName", headerName: "Клиент", width: 200 },
  { field: "num", headerName: "Ид.заказа", width: 100 },
  {
    field: "time",
    headerName: "Таймер",
    width: 90,
  },
  {
    field: "no",
    headerName: "Курьер",
    width: 100,
  },
  {
    field: "name",
    headerName: "Филиал",
    width: 100,
  },
  {
    field: "delivery",
    headerName: "Тип доставки",
    width: 130,
  },
  {
    field: "price",
    headerName: "Цена заказа",
    width: 110,
  },
  {
    field: "address",
    headerName: "Адресс клиента",
    width: 300,
  },
];

const rows = [
  {
    id: 1,
    firstName: "Арсений Морозов",
    num: "5262261",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 2,
    firstName: "Дамир Баранов",
    num: "5637657",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 3,
    firstName: "Вероника Новикова",
    num: "5425683",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 4,
    firstName: "Денис Андреев",
    num: "9003237",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 5,
    firstName: "Дмитрий Лебедев",
    num: "9232734",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 6,
    firstName: "Елизавета Фёдорова",
    num: "5227365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 7,
    firstName: "Марьяна Соловьёва",
    num: "9232735",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 8,
    firstName: "Ева Васильева",
    num: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 9,
    firstName: "Амелия Белова",
    num: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 10,
    firstName: "Павел Титов",
    num: "6426778",
    time: "02:33:48",
    no: "—",
    name: "Oqtepa",
    delivery: "Доставка",
    price: "$888",
    address: "ул. Байкальская‚ д.52‚ кв.22",
  },
  {
    id: 11,
    firstName: "Павел Титов",
    num: "6426778",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г. Алмазар р.Янги Алмазар у.51",
  },
  {
    id: 12,
    firstName: "Амелия Белова",
    num: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г. Алмазар р.Янги Алмазар у.51",
  },
  {
    id: 13,
    firstName: "Ева Васильева",
    num: "7527365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г. Алмазар р.Янги Алмазар у.51",
  },
  {
    id: 14,
    firstName: "Марьяна Соловьёва",
    num: "9232735",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г. Алмазар р.Янги Алмазар у.51",
  },
  {
    id: 15,
    firstName: "Елизавета Фёдорова",
    num: "5227365",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г. Алмазар р.Янги Алмазар у.51",
  },
  {
    id: 16,
    firstName: "Дмитрий Лебедев",
    num: "9232734",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г. Алмазар р.Янги Алмазар у.51",
  },
  {
    id: 17,
    firstName: "Денис Андреев",
    num: "9003237",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г. Алмазар р.Янги Алмазар у.51",
  },
  {
    id: 18,
    firstName: "Вероника Новикова",
    num: "5425683",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г. Алмазар р.Янги Алмазар у.51",
  },
  {
    id: 19,
    firstName: "Дамир Баранов",
    num: "5637657",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г. Алмазар р.Янги Алмазар у.51",
  },
  {
    id: 20,
    firstName: "Арсений Морозов",
    num: "5262261",
    time: "02:33:48",
    no: "—",
    name: "Chilonzor",
    delivery: "Доставка",
    price: "$999",
    address: "Ташкент г. Алмазар р.Янги Алмазар у.51",
  },
];

export default function DataTable() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[1376px] bg-white h-[55px] ">
        <p className="font-bold m-3 text-2xl">Заказы</p>
        <div className="text-gray-500 border w-[400px] h-[32px]">
          <div className="flex p-2">
            <CgSearch />
            <input
              type="text"
              placeholder="Поиск"
              className="p-2 h-1 focus:outline-none"
            />
          </div>
        </div>
        <div className="bg-[#4094F726] h-[965px] flex"></div>
      </div>
      <div className="bg-white h-[400px], w-[88%] -ml-[89%] mt-28">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
