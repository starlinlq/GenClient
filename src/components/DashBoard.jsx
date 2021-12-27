import Employees from "./Employees";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { user } from "../api/client";
import { useDispatch, useSelector } from "react-redux";
import { logInAuth } from "../store/userSlice";
import { useState } from "react";
function DashBoard() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      let response = [];
      try {
        if (query.length > 0) {
          const { data: profiles } = await user.search(query);
          response = profiles;
        } else {
          const { data: profiles } = await user.getAll(filter);
          response = profiles;
        }
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [filter, query]);

  const handleFilter = (e) => {
    if (filter.includes(`sort=${e.target.value}&`)) {
      console.log("hey");
      setFilter(filter.replace(`sort=${e.target.value}&`, ""));
    } else {
      setFilter(`${filter}sort=${e.target.value}&`);
    }
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container home">
      <div className="row ">
        <div className="col-md-2">
          <Link className="btn btn-primary mb-3" to="/register">
            Add Employee
          </Link>
        </div>
        <div className="col-md-3">
          <input
            name="query"
            className="form-control "
            placeholder="Search by First name"
            value={query}
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <div
          className="btn-group-sm"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <label htmlFor="filte" className="me-2">
            Filter by:
          </label>
          <input
            type="checkbox"
            name="id"
            className="btn-check"
            value={"id"}
            id="btncheck1"
            autoComplete="off"
            onClick={(e) => handleFilter(e)}
          />
          <label className="btn btn-outline-primary me-2" htmlFor="btncheck1">
            Id
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="btncheck2"
            autoComplete="off"
            value="firstName"
            name="name"
            onClick={(e) => handleFilter(e)}
          />
          <label className="btn btn-outline-primary me-2" htmlFor="btncheck2">
            First name
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="btncheck3"
            autoComplete="off"
            name="date"
            value="hiredDate"
            onClick={(e) => handleFilter(e)}
          />
          <label className="btn btn-outline-primary me-2" htmlFor="btncheck3">
            Hired Date
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="btncheck4"
            autoComplete="off"
            value="email"
            name="email"
            onClick={(e) => handleFilter(e)}
          />
          <label className="btn btn-outline-primary me-2" htmlFor="btncheck4">
            Email
          </label>
        </div>

        <div className="col-md-3"></div>
      </div>
      <Employees data={data} />
    </div>
  );
}

export default DashBoard;
