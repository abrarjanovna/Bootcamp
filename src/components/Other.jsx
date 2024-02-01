import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Login from "./Login";
import img from "../images/comp.svg";
import "../index.css";

const Other = () => {
  const user = useSelector(selectUser);

  return (
    <div className="flex">
      <div className="container">
        <h1 className="p-5 text-2xl font-semibold text-white">Delever</h1>
        <img className="m-12" src={img} />
      </div>
      {user ? <Logout /> : <Login />}
    </div>
  );
};

export default Other;
