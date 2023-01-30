import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import "./css/register.css";
import Courses from "./components/Courses";
import Addcourse from "./components/Addcourse";
import Course from "./components/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route />
          <Route path="course" element={<Courses />} />
          <Route path="addcourse" element={<Addcourse />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
