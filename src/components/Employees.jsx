import data from "../api/data";
import { user } from "../api/client";
import { useState, useEffect } from "react";
function Employees() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const userInfo = await user.getAll();
      setData(userInfo.data);
    };
    getUsers();
  }, []);

  return (
    <div className="">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <th scope="row">1</th>
              <td>{user.username}</td>
              <td>test</td>
              <td>
                <button type="button" className="btn btn-primary me-2">
                  Update
                </button>
                <button className="btn btn-danger me-2" type="button">
                  Delete
                </button>
                <button type="button" className="btn  btn-info">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
