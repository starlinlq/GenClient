import Employees from "./Employees";
import "../styles/home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container home">
      <Link className="btn btn-primary mb-3" to="/register">
        Add Employee
      </Link>
      <Employees />
    </div>
  );
}

export default Home;
