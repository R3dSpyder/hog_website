import Landing from "../../pages/Landing";
import Profile from "../Profile";
import Home from "../../pages/Home";

const RouteList = [
  { route: "/", component: Landing },
  { route: "home", component: Home },
  { route: "home/profile", component: Profile },
];

export default RouteList;
