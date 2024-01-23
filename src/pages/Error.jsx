import { Link } from "react-router-dom";
import img from "../images/404.svg";

const Error = () => {
  return (
    <div>
      <Link to="/dashboard">
        <img className="ml-60 mt-32" src={img} />
      </Link>
    </div>
  );
};

export default Error;
