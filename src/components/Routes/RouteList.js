import Reviews from "../../pages/Reviews";
import ReviewObjectPage from "../../pages/ReviewObjectPage";
import Categories from "../Categories";
// import Category from "../Categories";
// import DeckBuilding from "../../pages/categories/Deck-building";
// import Dexterity from "../../pages/categories/Dexterity";
// import EngineBuilding from "../../pages/categories/Engine-building";
// import HiddenRoles from "../../pages/categories/Hidden-roles";
// import PushYourLuck from "../../pages/categories/Push-your-luck";
// import RollAndWrite from "../../pages/categories/Roll-and-write";

const RouteList = [
  { route: "/", element: <Reviews /> },
  { route: "/:review_id", element: <ReviewObjectPage /> },
  { route: "categories/:category", element: <Categories /> },
  // {route: "/dexterity", element: <Categories category={"dexterity"} /> },
  // {route: "/engine-building", element: <Categories category={"engine-building"} />},
  // {route: "/hidden-roles", element: <Categories category={"hidden-roles"} /> },
  // {route: "/push-your-luck", element: <Categories category={"push-your-luck"} />,},
  // {route: "/roll-and-write",element: <Categories category={"roll-and-write"} />,
  // },
];

export default RouteList;
