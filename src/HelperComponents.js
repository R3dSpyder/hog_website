import { useLocation } from "react-router-dom";

const GetLocation = () => {
  const location = useLocation();
  return location.pathname;
};

export default GetLocation;
