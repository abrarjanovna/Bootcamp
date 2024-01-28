import { DataGrid } from "@mui/x-data-grid";
import { CgSearch } from "react-icons/cg";
import { Sidebar } from "../components";
import Calendar from "../calendar/Calendar";
import { Link } from "react-router-dom";

const columns = [
  { field: "Name", headerName: "Название", width: 350 },
  { field: "description", headerName: "Описание", width: 750 },
  {
    field: "year",
    headerName: "Год основания",
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    Name: "L'Oréal",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "2008",
  },
  {
    id: 2,
    Name: "The Walt Disney Company",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "2003",
  },
  {
    id: 3,
    Name: "Mitsubishi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2016",
  },
  {
    id: 4,
    Name: "The Walt Disney Company",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "1998",
  },
  {
    id: 5,
    Name: "Gillette",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    year: "2019",
  },
  {
    id: 6,
    Name: "Sony",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2020",
  },
  {
    id: 7,
    Name: "Louis Vuitton",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    year: "2016",
  },
  {
    id: 8,
    Name: "IBM",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "1993",
  },
  {
    id: 9,
    Name: "Nintendo",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "2017",
  },
  {
    id: 10,
    Name: "The Walt Disney Company",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "1964",
  },
  {
    id: 11,
    Name: "MasterCard",
    description:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional",
    year: "2020",
  },
  {
    id: 12,
    Name: "Gillette",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "2020",
  },
  {
    id: 13,
    Name: "Starbucks",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2020",
  },
  {
    id: 14,
    Name: "Starbucks",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2020",
  },
  {
    id: 15,
    Name: "Gillette",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "2020",
  },
  {
    id: 16,
    Name: "MasterCard",
    description:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional",
    year: "2020",
  },
  {
    id: 17,
    Name: "The Walt Disney Company",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "1964",
  },
  {
    id: 18,
    Name: "Nintendo",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "2017",
  },
  {
    id: 19,
    Name: "IBM",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "1993",
  },
  {
    id: 20,
    Name: "Louis Vuitton",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    year: "2016",
  },
  {
    id: 21,
    Name: "Sony",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2020",
  },
  {
    id: 22,
    Name: "Gillette",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    year: "2019",
  },
  {
    id: 23,
    Name: "The Walt Disney Company",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "1998",
  },
  {
    id: 24,
    Name: "Mitsubishi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2016",
  },
  {
    id: 25,
    Name: "The Walt Disney Company",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "2003",
  },
  {
    id: 26,
    Name: "L'Oréal",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "2008",
  },
  {
    id: 27,
    Name: "L'Oréal",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "2008",
  },
  {
    id: 28,
    Name: "The Walt Disney Company",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "2003",
  },
  {
    id: 29,
    Name: "Mitsubishi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2016",
  },
  {
    id: 30,
    Name: "The Walt Disney Company",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "1998",
  },
  {
    id: 31,
    Name: "Gillette",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    year: "2019",
  },
  {
    id: 32,
    Name: "Sony",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2020",
  },
  {
    id: 33,
    Name: "Louis Vuitton",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    year: "2016",
  },
  {
    id: 34,
    Name: "IBM",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "1993",
  },
  {
    id: 35,
    Name: "Nintendo",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "2017",
  },
  {
    id: 36,
    Name: "The Walt Disney Company",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "1964",
  },
  {
    id: 37,
    Name: "MasterCard",
    description:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional",
    year: "2020",
  },
  {
    id: 38,
    Name: "Gillette",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "2020",
  },
  {
    id: 39,
    Name: "Starbucks",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2020",
  },
  {
    id: 40,
    Name: "Starbucks",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2020",
  },
  {
    id: 41,
    Name: "Gillette",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "2020",
  },
  {
    id: 42,
    Name: "MasterCard",
    description:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional",
    year: "2020",
  },
  {
    id: 43,
    Name: "The Walt Disney Company",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "1964",
  },
  {
    id: 44,
    Name: "Nintendo",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "2017",
  },
  {
    id: 45,
    Name: "IBM",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "1993",
  },
  {
    id: 46,
    Name: "Louis Vuitton",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    year: "2016",
  },
  {
    id: 47,
    Name: "Sony",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2020",
  },
  {
    id: 48,
    Name: "Gillette",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    year: "2019",
  },
  {
    id: 49,
    Name: "The Walt Disney Company",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "1998",
  },
  {
    id: 50,
    Name: "Mitsubishi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2016",
  },
  {
    id: 51,
    Name: "The Walt Disney Company",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "2003",
  },
  {
    id: 52,
    Name: "L'Oréal",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "2008",
  },
  {
    id: 53,
    Name: "L'Oréal",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "2008",
  },
  {
    id: 54,
    Name: "The Walt Disney Company",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "2003",
  },
  {
    id: 55,
    Name: "Mitsubishi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2016",
  },
  {
    id: 56,
    Name: "The Walt Disney Company",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "1998",
  },
  {
    id: 57,
    Name: "Gillette",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    year: "2019",
  },
  {
    id: 58,
    Name: "Sony",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2020",
  },
  {
    id: 59,
    Name: "Louis Vuitton",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    year: "2016",
  },
  {
    id: 60,
    Name: "IBM",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "1993",
  },
  {
    id: 61,
    Name: "Nintendo",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "2017",
  },
  {
    id: 62,
    Name: "The Walt Disney Company",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "1964",
  },
  {
    id: 63,
    Name: "MasterCard",
    description:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional",
    year: "2020",
  },
  {
    id: 64,
    Name: "Gillette",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "2020",
  },
  {
    id: 65,
    Name: "Starbucks",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2020",
  },
  {
    id: 66,
    Name: "Starbucks",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2020",
  },
  {
    id: 67,
    Name: "Gillette",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "2020",
  },
  {
    id: 68,
    Name: "MasterCard",
    description:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional",
    year: "2020",
  },
  {
    id: 69,
    Name: "The Walt Disney Company",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "1964",
  },
  {
    id: 70,
    Name: "Nintendo",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "2017",
  },
  {
    id: 71,
    Name: "IBM",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "1993",
  },
  {
    id: 72,
    Name: "Louis Vuitton",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    year: "2016",
  },
  {
    id: 73,
    Name: "Sony",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2020",
  },
  {
    id: 74,
    Name: "Gillette",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    year: "2019",
  },
  {
    id: 75,
    Name: "The Walt Disney Company",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "1998",
  },
  {
    id: 76,
    Name: "Mitsubishi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2016",
  },
  {
    id: 77,
    Name: "The Walt Disney Company",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "2003",
  },
  {
    id: 78,
    Name: "L'Oréal",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "2008",
  },
  {
    id: 79,
    Name: "L'Oréal",
    description:
      "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in",
    year: "2008",
  },
  {
    id: 80,
    Name: "The Walt Disney Company",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "2003",
  },
  {
    id: 81,
    Name: "Mitsubishi",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2016",
  },
  {
    id: 82,
    Name: "The Walt Disney Company",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub",
    year: "1998",
  },
  {
    id: 83,
    Name: "Gillette",
    description:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that",
    year: "2019",
  },
  {
    id: 84,
    Name: "Sony",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "2020",
  },
  {
    id: 85,
    Name: "Louis Vuitton",
    description:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events",
    year: "2016",
  },
  {
    id: 86,
    Name: "IBM",
    description:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually",
    year: "1993",
  },
];

const Settings = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <p className="m-3 ml-5 text-2xl font-bold text-[#5B6871]">Настройки</p>
        <div className="mb-4 ml-4 flex h-[32px] w-[400px] border text-gray-500">
          <div className="flex p-2">
            <CgSearch />
            <input
              type="text"
              placeholder="Поиск..."
              className="h-1 p-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="-mt-12 ml-[60%] w-[300px] pb-4">
          <Calendar />
        </div>
        <div className="-mt-2">
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
              className="ml-4 cursor-pointer hover:text-[#4094f7]"
            >
              Филиалы компаний
            </Link>
            <Link
              to="/settings/regions"
              className="ml-4 cursor-pointer hover:text-[#4094f7]"
            >
              Регионы
            </Link>
          </div>
        </div>
        <div className="flex h-[965px] w-[1292px] bg-[#4094F726]">
          <div className="m-8 cursor-pointer bg-white">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
