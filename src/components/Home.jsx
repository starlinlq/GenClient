import Employees from "./Employees";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { user } from "../api/client";
import { useDispatch, useSelector } from "react-redux";
import { logInAuth } from "../store/userSlice";
function Home() {
  const dispatch = useDispatch();

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
