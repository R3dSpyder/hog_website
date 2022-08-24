import { NavLink } from "react-router-dom";
import "../styling/Nav-bar.css";
import { React } from "react";

const NavBar = () => {
  return (
    <nav className="Nav-bar">
      <div className="nav-bar-item">
        <NavLink to={`/`} className="Nav-bar-link">
          Home
        </NavLink>
      </div>
      <div className="nav-bar-item">
        <NavLink to={`/categories/deck-building`} className="Nav-bar-link">
          Deck Building
        </NavLink>
      </div>

      <div className="nav-bar-item">
        <NavLink to={`/categories/dexterity`} className="Nav-bar-link">
          Dexterity
        </NavLink>
      </div>
      <div className="nav-bar-item">
        <NavLink to={`/categories/engine-building`} className="Nav-bar-link">
          Engine Building
        </NavLink>
      </div>
      <div className="nav-bar-item">
        <NavLink to={`/categories/hidden-roles`} className="Nav-bar-link">
          Hidden Roles
        </NavLink>
      </div>
      <div className="nav-bar-item">
        <NavLink to={`/categories/push-your-luck`} className="Nav-bar-link">
          Push your Luck
        </NavLink>
      </div>
      <div className="nav-bar-item">
        <NavLink to={`/categories/roll-and-write`} className="Nav-bar-link">
          Roll and Write
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
