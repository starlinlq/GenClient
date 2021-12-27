import data from "../api/data";
import { user } from "../api/client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Employees({ data }) {
  const handleDelete = async (id) => {
    const data = await user.delete(id);
    console.log(data);
  };
  return (
    <div className="">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Hired Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.hiredDate}</td>
              <td>
                <Link
                  to={`/update/${user.profileId}`}
                  className="btn btn-primary me-2"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-danger me-2"
                  type="button"
                >
                  Delete
                </button>
                <Link
                  to={`/profile/${user.profileId}`}
                  className="btn  btn-info"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
