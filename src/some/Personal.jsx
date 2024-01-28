import { Link } from "react-router-dom";
import { Sidebar } from "../components";
import { GrLinkPrevious, GrNext } from "react-icons/gr";
import { FaFolder } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "Name", headerName: "Полное имя", width: 450 },
  { field: "login", headerName: "Логин", width: 250 },
  { field: "number", headerName: "Номер телефона", width: 250 },
  { field: "work", headerName: "Должность", width: 150 },
];

const rows = [
  {
    id: 1,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
  {
    id: 2,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
  {
    id: 3,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
  {
    id: 4,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
  {
    id: 5,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
  {
    id: 6,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
  {
    id: 7,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
  {
    id: 8,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
  {
    id: 9,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
  {
    id: 10,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
  {
    id: 11,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
  {
    id: 12,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
  {
    id: 13,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
  {
    id: 14,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
  {
    id: 15,
    Name: "Халдарова Мухлиса",
    login: "Muhlisa89",
    number: "+998 (90) 123-45-67",
    work: "Курьер Oqtepa",
  },
];

const Personal = () => {
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
          <div className="m-8 -mt-[72%] w-[1226px] rounded-xl bg-white">
            <div className="h-[40px] bg-[#6E8BB70D] p-2 text-[#6E8BB7]">
              <Link
                to="/settings/company-branch/personal/kuryer"
                className="ml-4 cursor-pointer hover:text-[#4094f7]"
              >
                Курьеры
              </Link>
              <Link
                to="/settings/company-branch/personal/kassir"
                className="ml-8 cursor-pointer hover:text-[#4094f7]"
              >
                Кассиры
              </Link>
            </div>
            <hr />
            <div className="m-8 cursor-pointer bg-white">
              <Link to="/settings/company-branch/personal/kuryer/about-kuryer">
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
      </div>
    </div>
  );
};

export default Personal;
