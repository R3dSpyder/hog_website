import "../styling/Login.css";
import { React, useContext, useState } from "react";
import { UserContext } from "../components/ContextProvider";
import { useNavigate } from "react-router-dom";
import { RetrieveUser } from "../components/api";
import { useCookies } from "react-cookie";

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const [dropBoxValue, setDropBoxValue] = useState();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user"]);
  // setCookie("user", "not-logged-in");

  const dropBoxToggler = (e) => {
    setDropBoxValue(e.target.value);
  };

  const setUserOnSubmit = (event) => {
    event.preventDefault();
    const user = RetrieveUser(dropBoxValue).then((response) => {
      setCookie("user", response);
      setUser(user.username);
      console.log(cookies.user.username, "cooky created");
      console.log(user, "from login user");
      navigate("/reviews");
    });
  };

  return (
    <section id="login-container">
      <div id="form-container">
        <div id="test-form">
          <div id="form-fields">
            <form onSubmit={setUserOnSubmit}>
              <label htmlFor="choice">Please select a test user: </label>
              <select
                name="Users"
                id="scrollbox"
                value={dropBoxValue}
                onChange={dropBoxToggler}
              >
                <option value="tickle122">Tickle122</option>
                <option value="grumpy19">Grumpy19</option>
                <option value="happyamy2016">Happyamy2016</option>
                <option value="cooljmessy">Cooljmessy</option>
                <option value="jessjelly">Jessjelly</option>
                <option value="weegembump">Weegembump</option>
              </select>
              <input type="submit" value="Login"></input>
            </form>
            <div></div>
          </div>
        </div>
        <div id="domino">
          <div id="domino-left">
            <span className="circle" id="circle-1"></span>
            <span className="circle" id="circle-2"></span>
            <span className="circle" id="circle-3"></span>
          </div>
          <div id="domino-right">
            <span className="circle" id="circle-4"></span>
            <span className="circle" id="circle-5"></span>
            <span className="circle" id="circle-6"></span>
            <span className="circle" id="circle-7"></span>
            <span className="circle" id="circle-8"></span>
            <span className="circle" id="circle-9"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
