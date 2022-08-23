import { NavLink } from "react-router-dom";
import "../styling/Accolade-button.css";

const AccoladeButton = () => {
  return (
    <div className="accolade-board-button-frame">
      <div>
        <NavLink to={`/home/profile`} className="accolade-button">
          Accolade Board
        </NavLink>
      </div>
    </div>
  );
};
export default AccoladeButton;
