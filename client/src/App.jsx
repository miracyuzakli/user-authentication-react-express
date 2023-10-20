import { useState } from "react";
import Banner from "./components/banner";
import DefaultButton from "./components/defaultButton";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [name, setName] = useState("Default name");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
