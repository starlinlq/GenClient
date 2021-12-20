import "../styles/navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../store/userSlice";
function NavBar() {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logOutUser = () => {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("user");
    dispatch(signOut());
  };
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="">
          <a href="/" className="navbar-brand">
            GenManagement
          </a>
        </div>

        {isAuth && (
          <div className="">
            <button
              onClick={logOutUser}
              type="button"
              className="btn btn-secondary"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
export default NavBar;
