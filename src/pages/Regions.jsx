import { Link } from "react-router-dom";
import { Sidebar } from "../components";
import { GrLinkPrevious, GrNext } from "react-icons/gr";
import { FaFolder } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import { CgSearch } from "react-icons/cg";

const columns = [
  { field: "Name", headerName: "Название", width: 550 },
  {
    field: "some",
    headerName: "Краткое название",
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    Name: "Узбекистан",
    some: "UZ",
  },
  {
    id: 2,
    Name: "Россия",
    some: "RU",
  },
];

const Regions = () => {
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
            <Link
              to="/settings/regions"
              className="ml-8 cursor-pointer hover:text-[#4094f7]"
            >
              Регионы
            </Link>
          </div>
        </div>
        <div className="flex h-[965px] w-[1292px] bg-[#4094F726]"></div>
        <div className="m-8 cursor-pointer bg-white">
          <div className="-mt-[78%] h-[32px] w-[400px] text-gray-500">
            <div className="flex p-2">
              <CgSearch />
              <input
                type="text"
                placeholder="Поиск..."
                className="h-1 p-2 focus:outline-none"
              />
            </div>
          </div>
          <Link to="/settings/regions/about">
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 13 },
                },
              }}
              pageSizeOptions={[10, 20]}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Regions;
