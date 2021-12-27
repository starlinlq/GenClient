import "./App.css";
import NavBar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import { verifyToken, setLoading } from "./store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import RequiredAuth from "./components/RequiredAuth";
import LogIn from "./components/LogIn";
import DisplayProfile from "./components/DisplayProfile";
import DashBoard from "./components/DashBoard";

function App() {
  const { isAuth, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch(verifyToken({ name: user.name, mail: user.email }));
    } else {
      dispatch(setLoading(false));
    }
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {" "}
          <NavBar />
          <Routes>
            <Route
              path="/login"
              element={isAuth ? <Navigate to="/dashboard" /> : <LogIn />}
            />
            <Route
              path="/register"
              element={
                <RequiredAuth redirectTo="/login">
                  <Register />
                </RequiredAuth>
              }
            />
            <Route
              path="/profile/:userId"
              element={
                <RequiredAuth redirectTo="/login">
                  <DisplayProfile />
                </RequiredAuth>
              }
            />
            <Route
              path="/update/:profileId"
              element={
                <RequiredAuth redirectTo="/login">
                  <Register />
                </RequiredAuth>
              }
            />
            <Route
              path="/dashboard"
              element={
                <RequiredAuth redirectTo="/login">
                  <DashBoard />
                </RequiredAuth>
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>{" "}
        </>
      )}
    </div>
  );
}

export default App;
