import "../styling/NotFound.css";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <div id="error-message-and-pic">
        <img
          src={require("../styling/img/mr_bump.png")}
          height="200px"
          width="200px"
          alt="image-not-loaded"
        />
        <p className="error">
          {" "}
          404: The page you are looking for has not been found!
        </p>
        <NavLink to={`/`} className="go-home">
          Home
        </NavLink>
      </div>
    </section>
  );
};

export default NotFound;
