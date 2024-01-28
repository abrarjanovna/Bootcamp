import { Link } from "react-router-dom";
import { Sidebar } from "../components";
import { GrLinkPrevious, GrNext } from "react-icons/gr";
import { FaFolder } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import { CgSearch } from "react-icons/cg";

const columns = [
  { field: "Name", headerName: "Филиалы", width: 1050 },
  {
    field: "year",
    headerName: "Год основания",
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    Name: "The Walt Disney Company",
    year: "2003",
  },
  {
    id: 2,
    Name: "L'Oréal",
    year: "2008",
  },
  {
    id: 3,
    Name: "Mitsubishi",
    year: "2016",
  },
  {
    id: 4,
    Name: "The Walt Disney Company",
    year: "1998",
  },
  {
    id: 5,
    Name: "Gillette",
    year: "2019",
  },
  {
    id: 6,
    Name: "Sony",
    year: "2020",
  },
  {
    id: 7,
    Name: "Louis Vuitton",
    year: "2016",
  },
  {
    id: 8,
    Name: "IBM",
    year: "1993",
  },
  {
    id: 9,
    Name: "Nintendo",
    year: "2017",
  },
  {
    id: 10,
    Name: "The Walt Disney Company",
    year: "1964",
  },
  {
    id: 11,
    Name: "MasterCard",
    year: "2020",
  },
  {
    id: 12,
    Name: "Gillette",
    year: "2020",
  },
  {
    id: 13,
    Name: "Starbucks",
    year: "2020",
  },
  {
    id: 14,
    Name: "Starbucks",
    year: "2020",
  },
  {
    id: 15,
    Name: "Gillette",
    year: "2020",
  },
  {
    id: 16,
    Name: "MasterCard",
    year: "2020",
  },
  {
    id: 17,
    Name: "The Walt Disney Company",
    year: "1964",
  },
  {
    id: 18,
    Name: "Nintendo",
    year: "2017",
  },
  {
    id: 19,
    Name: "IBM",
    year: "1993",
  },
  {
    id: 20,
    Name: "Louis Vuitton",
    year: "2016",
  },
  {
    id: 21,
    Name: "Sony",
    year: "2020",
  },
  {
    id: 22,
    Name: "Gillette",
    year: "2019",
  },
  {
    id: 23,
    Name: "The Walt Disney Company",
    year: "1998",
  },
  {
    id: 24,
    Name: "Mitsubishi",
    year: "2016",
  },
  {
    id: 25,
    Name: "L'Oréal",
    year: "2008",
  },
  {
    id: 26,
    Name: "The Walt Disney Company",
    year: "2003",
  },
  {
    id: 27,
    Name: "The Walt Disney Company",
    year: "2003",
  },
  {
    id: 28,
    Name: "L'Oréal",
    year: "2008",
  },
  {
    id: 29,
    Name: "Mitsubishi",
    year: "2016",
  },
  {
    id: 30,
    Name: "The Walt Disney Company",
    year: "1998",
  },
  {
    id: 31,
    Name: "Gillette",
    year: "2019",
  },
  {
    id: 32,
    Name: "Sony",
    year: "2020",
  },
  {
    id: 33,
    Name: "Louis Vuitton",
    year: "2016",
  },
  {
    id: 34,
    Name: "IBM",
    year: "1993",
  },
  {
    id: 35,
    Name: "Nintendo",
    year: "2017",
  },
  {
    id: 36,
    Name: "The Walt Disney Company",
    year: "1964",
  },
  {
    id: 37,
    Name: "MasterCard",
    year: "2020",
  },
  {
    id: 38,
    Name: "Gillette",
    year: "2020",
  },
  {
    id: 39,
    Name: "Starbucks",
    year: "2020",
  },
  {
    id: 40,
    Name: "Starbucks",
    year: "2020",
  },
  {
    id: 41,
    Name: "Gillette",
    year: "2020",
  },
  {
    id: 42,
    Name: "MasterCard",
    year: "2020",
  },
  {
    id: 43,
    Name: "The Walt Disney Company",
    year: "1964",
  },
  {
    id: 44,
    Name: "Nintendo",
    year: "2017",
  },
  {
    id: 45,
    Name: "IBM",
    year: "1993",
  },
  {
    id: 46,
    Name: "Louis Vuitton",
    year: "2016",
  },
  {
    id: 47,
    Name: "Sony",
    year: "2020",
  },
  {
    id: 48,
    Name: "Gillette",
    year: "2019",
  },
  {
    id: 49,
    Name: "The Walt Disney Company",
    year: "1998",
  },
  {
    id: 50,
    Name: "Mitsubishi",
    year: "2016",
  },
  {
    id: 51,
    Name: "L'Oréal",
    year: "2008",
  },
  {
    id: 52,
    Name: "The Walt Disney Company",
    year: "2003",
  },
  {
    id: 53,
    Name: "The Walt Disney Company",
    year: "2003",
  },
  {
    id: 54,
    Name: "L'Oréal",
    year: "2008",
  },
  {
    id: 55,
    Name: "Mitsubishi",
    year: "2016",
  },
  {
    id: 56,
    Name: "The Walt Disney Company",
    year: "1998",
  },
  {
    id: 57,
    Name: "Gillette",
    year: "2019",
  },
  {
    id: 58,
    Name: "Sony",
    year: "2020",
  },
  {
    id: 59,
    Name: "Louis Vuitton",
    year: "2016",
  },
  {
    id: 60,
    Name: "IBM",
    year: "1993",
  },
  {
    id: 61,
    Name: "Nintendo",
    year: "2017",
  },
  {
    id: 62,
    Name: "The Walt Disney Company",
    year: "1964",
  },
  {
    id: 63,
    Name: "MasterCard",
    year: "2020",
  },
  {
    id: 64,
    Name: "Gillette",
    year: "2020",
  },
  {
    id: 65,
    Name: "Starbucks",
    year: "2020",
  },
  {
    id: 66,
    Name: "Starbucks",
    year: "2020",
  },
  {
    id: 67,
    Name: "Gillette",
    year: "2020",
  },
  {
    id: 68,
    Name: "MasterCard",
    year: "2020",
  },
  {
    id: 69,
    Name: "The Walt Disney Company",
    year: "1964",
  },
  {
    id: 70,
    Name: "Nintendo",
    year: "2017",
  },
  {
    id: 71,
    Name: "IBM",
    year: "1993",
  },
  {
    id: 72,
    Name: "Louis Vuitton",
    year: "2016",
  },
  {
    id: 73,
    Name: "Sony",
    year: "2020",
  },
  {
    id: 74,
    Name: "Gillette",
    year: "2019",
  },
  {
    id: 75,
    Name: "The Walt Disney Company",
    year: "1998",
  },
  {
    id: 76,
    Name: "Mitsubishi",
    year: "2016",
  },
  {
    id: 77,
    Name: "L'Oréal",
    year: "2008",
  },
  {
    id: 78,
    Name: "The Walt Disney Company",
    year: "2003",
  },
  {
    id: 79,
    Name: "The Walt Disney Company",
    year: "2003",
  },
  {
    id: 80,
    Name: "L'Oréal",
    year: "2008",
  },
  {
    id: 81,
    Name: "Mitsubishi",
    year: "2016",
  },
  {
    id: 82,
    Name: "The Walt Disney Company",
    year: "1998",
  },
  {
    id: 83,
    Name: "Gillette",
    year: "2019",
  },
  {
    id: 84,
    Name: "Sony",
    year: "2020",
  },
  {
    id: 85,
    Name: "Louis Vuitton",
    year: "2016",
  },
  {
    id: 86,
    Name: "IBM",
    year: "1993",
  },
];

const CompanyBranch = () => {
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
          <Link to="/settings/company-branch/about-branch">
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

export default CompanyBranch;
