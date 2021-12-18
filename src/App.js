import "./App.css";
import Counter from "./components/Counter";
import NavBar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
