import { Link } from "react-router-dom";
import { Sidebar } from "../components";
import { GrLinkPrevious, GrNext } from "react-icons/gr";
import { FaFolder } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "Name", headerName: "Название категории", width: 250 },
  { field: "description", headerName: "Описание", width: 750 },
  { field: "price", headerName: "Цена", width: 150 },
];

const rows = [
  {
    id: 1,
    Name: "Lavash",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "24 500",
  },
  {
    id: 2,
    Name: "Set",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "27 500",
  },
  {
    id: 3,
    Name: "Xaggi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "4 500",
  },
  {
    id: 4,
    Name: "Burger",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "8 000",
  },
  {
    id: 5,
    Name: "Pizza",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    price: "17 000",
  },
  {
    id: 6,
    Name: "Sendvich",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "5 400",
  },
  {
    id: 7,
    Name: "Doner",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    price: "32 000",
  },
  {
    id: 8,
    Name: "Xot-Dog",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "13 000",
  },
  {
    id: 9,
    Name: "Fri",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "20 000",
  },
  {
    id: 10,
    Name: "Napitki",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "15 000",
  },
  {
    id: 11,
    Name: "Napitki",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "15 000",
  },
  {
    id: 12,
    Name: "Fri",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "20 000",
  },
  {
    id: 13,
    Name: "Xot-Dog",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "13 000",
  },
  {
    id: 14,
    Name: "Doner",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    price: "32 000",
  },
  {
    id: 15,
    Name: "Sendvich",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "5 400",
  },
  {
    id: 16,
    Name: "Pizza",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    price: "17 000",
  },
  {
    id: 17,
    Name: "Burger",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "8 000",
  },
  {
    id: 18,
    Name: "Xaggi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "4 500",
  },
  {
    id: 19,
    Name: "Set",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "27 500",
  },
  {
    id: 20,
    Name: "Lavash",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "24 500",
  },
  {
    id: 21,
    Name: "Lavash",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "24 500",
  },
  {
    id: 22,
    Name: "Set",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "27 500",
  },
  {
    id: 23,
    Name: "Xaggi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "4 500",
  },
  {
    id: 24,
    Name: "Burger",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "8 000",
  },
  {
    id: 25,
    Name: "Pizza",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    price: "17 000",
  },
  {
    id: 26,
    Name: "Sendvich",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "5 400",
  },
  {
    id: 27,
    Name: "Doner",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    price: "32 000",
  },
  {
    id: 28,
    Name: "Xot-Dog",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "13 000",
  },
  {
    id: 29,
    Name: "Fri",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "20 000",
  },
  {
    id: 30,
    Name: "Napitki",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "15 000",
  },
  {
    id: 31,
    Name: "Napitki",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "15 000",
  },
  {
    id: 32,
    Name: "Fri",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "20 000",
  },
  {
    id: 33,
    Name: "Xot-Dog",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "13 000",
  },
  {
    id: 34,
    Name: "Doner",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    price: "32 000",
  },
  {
    id: 35,
    Name: "Sendvich",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "5 400",
  },
  {
    id: 36,
    Name: "Pizza",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    price: "17 000",
  },
  {
    id: 37,
    Name: "Burger",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "8 000",
  },
  {
    id: 38,
    Name: "Xaggi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "4 500",
  },
  {
    id: 39,
    Name: "Set",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "27 500",
  },
  {
    id: 40,
    Name: "Lavash",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "24 500",
  },
  {
    id: 41,
    Name: "Lavash",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "24 500",
  },
  {
    id: 42,
    Name: "Set",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "27 500",
  },
  {
    id: 43,
    Name: "Xaggi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "4 500",
  },
  {
    id: 44,
    Name: "Burger",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "8 000",
  },
  {
    id: 45,
    Name: "Pizza",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    price: "17 000",
  },
  {
    id: 46,
    Name: "Sendvich",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "5 400",
  },
  {
    id: 47,
    Name: "Doner",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    price: "32 000",
  },
  {
    id: 48,
    Name: "Xot-Dog",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "13 000",
  },
  {
    id: 49,
    Name: "Fri",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "20 000",
  },
  {
    id: 50,
    Name: "Napitki",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "15 000",
  },
  {
    id: 51,
    Name: "Napitki",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "15 000",
  },
  {
    id: 52,
    Name: "Fri",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "20 000",
  },
  {
    id: 53,
    Name: "Xot-Dog",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "13 000",
  },
  {
    id: 54,
    Name: "Doner",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    price: "32 000",
  },
  {
    id: 55,
    Name: "Sendvich",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "5 400",
  },
  {
    id: 56,
    Name: "Pizza",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    price: "17 000",
  },
  {
    id: 57,
    Name: "Burger",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "8 000",
  },
  {
    id: 58,
    Name: "Xaggi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "4 500",
  },
  {
    id: 59,
    Name: "Set",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "27 500",
  },
  {
    id: 60,
    Name: "Lavash",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "24 500",
  },
  {
    id: 61,
    Name: "Lavash",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "24 500",
  },
  {
    id: 62,
    Name: "Set",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "27 500",
  },
  {
    id: 63,
    Name: "Xaggi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "4 500",
  },
  {
    id: 64,
    Name: "Burger",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "8 000",
  },
  {
    id: 65,
    Name: "Pizza",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    price: "17 000",
  },
  {
    id: 66,
    Name: "Sendvich",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "5 400",
  },
  {
    id: 67,
    Name: "Doner",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    price: "32 000",
  },
  {
    id: 68,
    Name: "Xot-Dog",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "13 000",
  },
  {
    id: 69,
    Name: "Fri",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "20 000",
  },
  {
    id: 70,
    Name: "Napitki",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "15 000",
  },
  {
    id: 71,
    Name: "Napitki",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "15 000",
  },
  {
    id: 72,
    Name: "Fri",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "20 000",
  },
  {
    id: 73,
    Name: "Xot-Dog",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "13 000",
  },
  {
    id: 74,
    Name: "Doner",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    price: "32 000",
  },
  {
    id: 75,
    Name: "Sendvich",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "5 400",
  },
  {
    id: 76,
    Name: "Pizza",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    price: "17 000",
  },
  {
    id: 77,
    Name: "Burger",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "8 000",
  },
  {
    id: 78,
    Name: "Xaggi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "4 500",
  },
  {
    id: 79,
    Name: "Set",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "27 500",
  },
  {
    id: 80,
    Name: "Lavash",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "24 500",
  },
  {
    id: 81,
    Name: "Lavash",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    price: "24 500",
  },
  {
    id: 82,
    Name: "Set",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "27 500",
  },
  {
    id: 83,
    Name: "Xaggi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "4 500",
  },
  {
    id: 84,
    Name: "Burger",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    price: "8 000",
  },
  {
    id: 85,
    Name: "Pizza",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    price: "17 000",
  },
  {
    id: 86,
    Name: "Sendvich",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    price: "5 400",
  },
];

const Product = () => {
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
              to="/settings/company-branch/catalog"
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
                to="/settings/company-branch/catalog/category"
                className="ml-4 cursor-pointer hover:text-[#4094f7]"
              >
                Категории
              </Link>
              <Link
                to="/settings/company-branch/catalog/product"
                className="ml-8 cursor-pointer hover:text-[#4094f7]"
              >
                Продукты
              </Link>
            </div>
            <hr />
            <div className="m-8 cursor-pointer bg-white">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
