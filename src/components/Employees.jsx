import data from "../api/data";
import { user } from "../api/client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Employees() {
  const { email: userEmail } = useSelector((state) => state.user);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await user.getAll();

        // const filtered = data.filter((u) => u.email !== userEmail);

        setData(data);
      } catch (error) {
        console.log(error);
      }
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
            <th scope="col">Email</th>
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
              <td>
                <Link
                  to={`/update/${user.profileId}`}
                  className="btn btn-primary me-2"
                >
                  Update
                </Link>
                <button className="btn btn-danger me-2" type="button">
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
