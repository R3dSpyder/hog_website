import "../styling/Page.css";
import GetLocation from "../HelperComponents";

const Page = ({ path }) => {
  const loc = GetLocation();
  // const pageToDisplay=
  return <section className="page-layout">{loc}</section>;
};

export default Page;
