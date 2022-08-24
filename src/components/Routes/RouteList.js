import Landing from "../../pages/Landing";
import Profile from "../Profile";
import Reviews from "../../pages/Reviews";

const RouteList = [
  { route: "/", component: Landing },
  { route: "/reviews", component: Reviews },
  { route: "home/profile", component: Profile },
];

export default RouteList;
