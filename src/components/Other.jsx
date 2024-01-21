import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Login from "./Login";
import "../index.css";

const Other = () => {
  const user = useSelector(selectUser);

  return (
    <div className="container">
      <h1 className="p-5 text-2xl text-white">Bootcamp Delever</h1>
      {user ? <Logout /> : <Login />}
    </div>
  );
};

export default Other;
