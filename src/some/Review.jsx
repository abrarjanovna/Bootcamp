import { CgSearch } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Sidebar } from "../components";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "firstName", headerName: "Название", width: 700 },
  { field: "type", headerName: "Тип", width: 300 },
  {
    field: "status",
    headerName: "Статус",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    firstName: "😉 Курьер молодец",
    type: "👍",
    status: "Активный",
  },
  {
    id: 2,
    firstName: "⚡️ Быстрая доставка",
    type: "👍",
    status: "Активный",
  },
  {
    id: 3,
    firstName: "😋 Вкусная еда",
    type: "👍",
    status: "Активный",
  },
  {
    id: 4,
    firstName: "🤝 Оператор был вежлив и дружелюбен",
    type: "👍",
    status: "Активный",
  },
  {
    id: 5,
    firstName: "🐌 Долгая доставка",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 6,
    firstName: "🫤 Остывшая еда",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 7,
    firstName: "😬 Проблемы с курьером",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 8,
    firstName: "😑 Проблемы с оператором",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 9,
    firstName: "😑 Проблемы с оператором",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 10,
    firstName: "😬 Проблемы с курьером",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 11,
    firstName: "🫤 Остывшая еда",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 12,
    firstName: "🐌 Долгая доставка",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 13,
    firstName: "🤝 Оператор был вежлив и дружелюбен",
    type: "👍",
    status: "Активный",
  },
  {
    id: 14,
    firstName: "😋 Вкусная еда",
    type: "👍",
    status: "Активный",
  },
  {
    id: 15,
    firstName: "⚡️ Быстрая доставка",
    type: "👍",
    status: "Активный",
  },
  {
    id: 16,
    firstName: "😉 Курьер молодец",
    type: "👍",
    status: "Активный",
  },
  {
    id: 17,
    firstName: "😉 Курьер молодец",
    type: "👍",
    status: "Активный",
  },
  {
    id: 18,
    firstName: "⚡️ Быстрая доставка",
    type: "👍",
    status: "Активный",
  },
  {
    id: 19,
    firstName: "😋 Вкусная еда",
    type: "👍",
    status: "Активный",
  },
  {
    id: 20,
    firstName: "🤝 Оператор был вежлив и дружелюбен",
    type: "👍",
    status: "Активный",
  },
  {
    id: 21,
    firstName: "🐌 Долгая доставка",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 22,
    firstName: "🫤 Остывшая еда",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 23,
    firstName: "😬 Проблемы с курьером",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 24,
    firstName: "😑 Проблемы с оператором",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 25,
    firstName: "😑 Проблемы с оператором",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 26,
    firstName: "😬 Проблемы с курьером",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 27,
    firstName: "🫤 Остывшая еда",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 28,
    firstName: "🐌 Долгая доставка",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 29,
    firstName: "🤝 Оператор был вежлив и дружелюбен",
    type: "👍",
    status: "Активный",
  },
  {
    id: 30,
    firstName: "😋 Вкусная еда",
    type: "👍",
    status: "Активный",
  },
  {
    id: 31,
    firstName: "⚡️ Быстрая доставка",
    type: "👍",
    status: "Активный",
  },
  {
    id: 32,
    firstName: "😉 Курьер молодец",
    type: "👍",
    status: "Активный",
  },
  {
    id: 33,
    firstName: "😉 Курьер молодец",
    type: "👍",
    status: "Активный",
  },
  {
    id: 34,
    firstName: "⚡️ Быстрая доставка",
    type: "👍",
    status: "Активный",
  },
  {
    id: 35,
    firstName: "😋 Вкусная еда",
    type: "👍",
    status: "Активный",
  },
  {
    id: 36,
    firstName: "🤝 Оператор был вежлив и дружелюбен",
    type: "👍",
    status: "Активный",
  },
  {
    id: 37,
    firstName: "🐌 Долгая доставка",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 38,
    firstName: "🫤 Остывшая еда",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 39,
    firstName: "😬 Проблемы с курьером",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 40,
    firstName: "😑 Проблемы с оператором",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 41,
    firstName: "😑 Проблемы с оператором",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 42,
    firstName: "😬 Проблемы с курьером",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 43,
    firstName: "🫤 Остывшая еда",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 44,
    firstName: "🐌 Долгая доставка",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 45,
    firstName: "🤝 Оператор был вежлив и дружелюбен",
    type: "👍",
    status: "Активный",
  },
  {
    id: 46,
    firstName: "😋 Вкусная еда",
    type: "👍",
    status: "Активный",
  },
  {
    id: 47,
    firstName: "⚡️ Быстрая доставка",
    type: "👍",
    status: "Активный",
  },
  {
    id: 48,
    firstName: "😉 Курьер молодец",
    type: "👍",
    status: "Активный",
  },
  {
    id: 49,
    firstName: "😉 Курьер молодец",
    type: "👍",
    status: "Активный",
  },
  {
    id: 50,
    firstName: "⚡️ Быстрая доставка",
    type: "👍",
    status: "Активный",
  },
  {
    id: 51,
    firstName: "😋 Вкусная еда",
    type: "👍",
    status: "Активный",
  },
  {
    id: 52,
    firstName: "🤝 Оператор был вежлив и дружелюбен",
    type: "👍",
    status: "Активный",
  },
  {
    id: 53,
    firstName: "🐌 Долгая доставка",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 54,
    firstName: "🫤 Остывшая еда",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 55,
    firstName: "😬 Проблемы с курьером",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 56,
    firstName: "😑 Проблемы с оператором",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 57,
    firstName: "😑 Проблемы с оператором",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 58,
    firstName: "😬 Проблемы с курьером",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 59,
    firstName: "🫤 Остывшая еда",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 60,
    firstName: "🐌 Долгая доставка",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 61,
    firstName: "🤝 Оператор был вежлив и дружелюбен",
    type: "👍",
    status: "Активный",
  },
  {
    id: 62,
    firstName: "😋 Вкусная еда",
    type: "👍",
    status: "Активный",
  },
  {
    id: 63,
    firstName: "⚡️ Быстрая доставка",
    type: "👍",
    status: "Активный",
  },
  {
    id: 64,
    firstName: "😉 Курьер молодец",
    type: "👍",
    status: "Активный",
  },
  {
    id: 65,
    firstName: "😉 Курьер молодец",
    type: "👍",
    status: "Активный",
  },
  {
    id: 66,
    firstName: "⚡️ Быстрая доставка",
    type: "👍",
    status: "Активный",
  },
  {
    id: 67,
    firstName: "😋 Вкусная еда",
    type: "👍",
    status: "Активный",
  },
  {
    id: 68,
    firstName: "🤝 Оператор был вежлив и дружелюбен",
    type: "👍",
    status: "Активный",
  },
  {
    id: 69,
    firstName: "🐌 Долгая доставка",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 70,
    firstName: "🫤 Остывшая еда",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 71,
    firstName: "😬 Проблемы с курьером",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 72,
    firstName: "😑 Проблемы с оператором",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 73,
    firstName: "😑 Проблемы с оператором",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 74,
    firstName: "😬 Проблемы с курьером",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 75,
    firstName: "🫤 Остывшая еда",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 76,
    firstName: "🐌 Долгая доставка",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 77,
    firstName: "🤝 Оператор был вежлив и дружелюбен",
    type: "👍",
    status: "Активный",
  },
  {
    id: 78,
    firstName: "😋 Вкусная еда",
    type: "👍",
    status: "Активный",
  },
  {
    id: 79,
    firstName: "⚡️ Быстрая доставка",
    type: "👍",
    status: "Активный",
  },
  {
    id: 80,
    firstName: "😉 Курьер молодец",
    type: "👍",
    status: "Активный",
  },
  {
    id: 81,
    firstName: "😉 Курьер молодец",
    type: "👍",
    status: "Активный",
  },
  {
    id: 82,
    firstName: "⚡️ Быстрая доставка",
    type: "👍",
    status: "Активный",
  },
  {
    id: 83,
    firstName: "😋 Вкусная еда",
    type: "👍",
    status: "Активный",
  },
  {
    id: 84,
    firstName: "🤝 Оператор был вежлив и дружелюбен",
    type: "👍",
    status: "Активный",
  },
  {
    id: 85,
    firstName: "🐌 Долгая доставка",
    type: "👎🏽",
    status: "Активный",
  },
  {
    id: 86,
    firstName: "🫤 Остывшая еда",
    type: "👎🏽",
    status: "Активный",
  },
];

const Review = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[1292px] pt-4">
        <div className="flex">
          <p className="ml-5 text-2xl font-bold text-[#5B6871]">
            Список отзывов
          </p>
          <div className="ml-[555px] mt-1  h-[32px] w-[400px] border text-gray-500">
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
          <div className="m-4 h-[630px] cursor-pointer bg-white">
            <Link to="/stockList/reviews/reviews-about/uzb">
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 8 },
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

export default Review;
