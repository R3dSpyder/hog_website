import Reviews from "../../pages/Reviews";
import SingleReview from "../../pages/SingleReview";

const RouteList = [
  { route: "/", component: Reviews },
  { route: "/:category", component: Reviews },
  { route: "/review/:review", component: SingleReview },
];

export default RouteList;
