import { NavLink } from "react-router-dom";
import "../styling/Nav-bar.css";
import { useState, useEffect, useContext } from "react";

import { useCookies } from "react-cookie";

const NavBar = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [welcomeMessage, setWelcomeMessage] = useState(true);
  console.log(cookies);

  useEffect(() => {
    if (
      cookies.user.username !== "not-logged-in" &&
      cookies.user.username !== undefined
    ) {
      setWelcomeMessage(false);
    }
  }, [cookies]);

  useEffect(() => {}, [cookies]);

  return (
    <div className="Nav-bar user">
      {welcomeMessage === false
        ? `Welcome back ${cookies.user.username}`
        : `Please login`}
    </div>
  );

  //     // <nav className="Nav-bar">
  //       {/* <div className="nav-bar-item">
  //         <NavLink to={`/`} className="Nav-bar-link">
  //           Home
  //         </NavLink> */}
  //       {/* </div> */}
  //     // </nav>
  //   )
};

export default NavBar;
