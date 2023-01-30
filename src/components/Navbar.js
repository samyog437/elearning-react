import { Link, Outlet } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <a href="#" className="logo">
              LearnHub
            </a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <Link to="/course">
              <a href="#">Courses</a>
            </Link>
          </li>
          <li>
            <Link to="/addcourse">
              <a href="#">Add</a>
            </Link>
          </li>
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <Link to="/login">
              <a href="#">Login</a>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <a href="#">Register</a>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
