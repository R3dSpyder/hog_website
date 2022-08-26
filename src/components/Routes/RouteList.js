import Reviews from "../../pages/Reviews";
import SingleReview from "../../pages/SingleReview";
import NotFound from "../../pages/NotFound";
import Login from "../../pages/Login";

const RouteList = [
  { route: "/", component: Login },
  { route: "/categories/:category", component: Reviews },
  { route: "/reviews", component: Reviews },

  { route: "/reviews/:category", component: Reviews },
  { route: "/reviews/review/:review", component: SingleReview },
];

export default RouteList;
