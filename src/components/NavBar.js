import { NavLink } from "react-router-dom";
import "../styling/Nav-bar.css";

const NavBar = () => {
  return (
    <nav className="Nav-bar">
      <div className="nav-bar-item">
        <NavLink to={`/home/profile`} className="Nav-bar-link">
          Profile
        </NavLink>
      </div>
      <div className="nav-bar-item">
        <NavLink to={`/home/new-review`} className="Nav-bar-link">
          Start a Review{" "}
        </NavLink>
      </div>
      <div className="nav-bar-item">
        <NavLink to={`/home/inbox`} className="Nav-bar-link">
          Inbox
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
