import { DataGrid } from "@mui/x-data-grid";
import { CgSearch } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Sidebar } from "../components";

const columns = [
  { field: "firstName", headerName: "Название", width: 700 },
  { field: "startOfAction", headerName: "Начало акции", width: 150 },
  { field: "endOfAction", headerName: "Конец акции", width: 150 },
  {
    field: "status",
    headerName: "Статус",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    firstName: "Vulputate velit lacus, enim viverra quis.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 2,
    firstName: "Eget vulputate iaculis aliquam vel nulla tristique nec.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 3,
    firstName: "Et sed eu volutpat tincidunt.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 4,
    firstName: "Quam morbi laoreet arcu amet, orci, volutpat.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 5,
    firstName: "Ut ut sem arcu cursus.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 6,
    firstName: "Libero neque, et amet elementum diam amet nisl cras.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 7,
    firstName: "Enim, a ipsum mattis est ultrices.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 8,
    firstName: "Parturient sit lobortis ultrices dictum quis egestas.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 9,
    firstName: "Feugiat vitae viverra purus massa iaculis in.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 10,
    firstName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 11,
    firstName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 12,
    firstName: "Feugiat vitae viverra purus massa iaculis in.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 13,
    firstName: "Parturient sit lobortis ultrices dictum quis egestas.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 14,
    firstName: "Enim, a ipsum mattis est ultrices.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 15,
    firstName: "Libero neque, et amet elementum diam amet nisl cras.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 16,
    firstName: "Ut ut sem arcu cursus.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 17,
    firstName: "Quam morbi laoreet arcu amet, orci, volutpat.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 18,
    firstName: "Et sed eu volutpat tincidunt.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 19,
    firstName: "Eget vulputate iaculis aliquam vel nulla tristique nec.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 20,
    firstName: "Vulputate velit lacus, enim viverra quis.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 21,
    firstName: "Vulputate velit lacus, enim viverra quis.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 22,
    firstName: "Eget vulputate iaculis aliquam vel nulla tristique nec.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 23,
    firstName: "Et sed eu volutpat tincidunt.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 24,
    firstName: "Quam morbi laoreet arcu amet, orci, volutpat.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 25,
    firstName: "Ut ut sem arcu cursus.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 26,
    firstName: "Libero neque, et amet elementum diam amet nisl cras.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 27,
    firstName: "Enim, a ipsum mattis est ultrices.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 28,
    firstName: "Parturient sit lobortis ultrices dictum quis egestas.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 29,
    firstName: "Feugiat vitae viverra purus massa iaculis in.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 30,
    firstName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 31,
    firstName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 32,
    firstName: "Feugiat vitae viverra purus massa iaculis in.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 33,
    firstName: "Parturient sit lobortis ultrices dictum quis egestas.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 34,
    firstName: "Enim, a ipsum mattis est ultrices.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 35,
    firstName: "Libero neque, et amet elementum diam amet nisl cras.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 36,
    firstName: "Ut ut sem arcu cursus.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 37,
    firstName: "Quam morbi laoreet arcu amet, orci, volutpat.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 38,
    firstName: "Et sed eu volutpat tincidunt.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 39,
    firstName: "Eget vulputate iaculis aliquam vel nulla tristique nec.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 40,
    firstName: "Vulputate velit lacus, enim viverra quis.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 41,
    firstName: "Vulputate velit lacus, enim viverra quis.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 42,
    firstName: "Eget vulputate iaculis aliquam vel nulla tristique nec.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 43,
    firstName: "Et sed eu volutpat tincidunt.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 44,
    firstName: "Quam morbi laoreet arcu amet, orci, volutpat.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 45,
    firstName: "Ut ut sem arcu cursus.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 46,
    firstName: "Libero neque, et amet elementum diam amet nisl cras.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 47,
    firstName: "Enim, a ipsum mattis est ultrices.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 48,
    firstName: "Parturient sit lobortis ultrices dictum quis egestas.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 49,
    firstName: "Feugiat vitae viverra purus massa iaculis in.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 50,
    firstName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 51,
    firstName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 52,
    firstName: "Feugiat vitae viverra purus massa iaculis in.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 53,
    firstName: "Parturient sit lobortis ultrices dictum quis egestas.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 54,
    firstName: "Enim, a ipsum mattis est ultrices.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 55,
    firstName: "Libero neque, et amet elementum diam amet nisl cras.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 56,
    firstName: "Ut ut sem arcu cursus.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 57,
    firstName: "Quam morbi laoreet arcu amet, orci, volutpat.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 58,
    firstName: "Et sed eu volutpat tincidunt.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 59,
    firstName: "Eget vulputate iaculis aliquam vel nulla tristique nec.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 60,
    firstName: "Vulputate velit lacus, enim viverra quis.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 61,
    firstName: "Vulputate velit lacus, enim viverra quis.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 62,
    firstName: "Eget vulputate iaculis aliquam vel nulla tristique nec.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 63,
    firstName: "Et sed eu volutpat tincidunt.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 64,
    firstName: "Quam morbi laoreet arcu amet, orci, volutpat.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 65,
    firstName: "Ut ut sem arcu cursus.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 66,
    firstName: "Libero neque, et amet elementum diam amet nisl cras.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 67,
    firstName: "Enim, a ipsum mattis est ultrices.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 68,
    firstName: "Parturient sit lobortis ultrices dictum quis egestas.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 69,
    firstName: "Feugiat vitae viverra purus massa iaculis in.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 70,
    firstName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 71,
    firstName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 72,
    firstName: "Feugiat vitae viverra purus massa iaculis in.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 73,
    firstName: "Parturient sit lobortis ultrices dictum quis egestas.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 74,
    firstName: "Enim, a ipsum mattis est ultrices.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 75,
    firstName: "Libero neque, et amet elementum diam amet nisl cras.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 76,
    firstName: "Ut ut sem arcu cursus.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 77,
    firstName: "Quam morbi laoreet arcu amet, orci, volutpat.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 78,
    firstName: "Et sed eu volutpat tincidunt.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 79,
    firstName: "Eget vulputate iaculis aliquam vel nulla tristique nec.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 80,
    firstName: "Vulputate velit lacus, enim viverra quis.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 81,
    firstName: "Vulputate velit lacus, enim viverra quis.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 82,
    firstName: "Eget vulputate iaculis aliquam vel nulla tristique nec.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 83,
    firstName: "Et sed eu volutpat tincidunt.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 84,
    firstName: "Quam morbi laoreet arcu amet, orci, volutpat.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 85,
    firstName: "Ut ut sem arcu cursus.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
  {
    id: 86,
    firstName: "Libero neque, et amet elementum diam amet nisl cras.",
    startOfAction: "10.06.2021",
    endOfAction: "01.09.2021",
    status: "Активный",
  },
];

const StockList = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-[55px] w-[1376px] bg-white">
        <p className="m-3 text-2xl font-bold">Список акций</p>
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
        <div className="flex h-[965px] w-[1455px] bg-[#4094F726]"></div>
        <div className="-mt-[930px] ml-8 w-[1176px] bg-white">
          <Link to="/promotion">
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
};

export default StockList;
