import { React, useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { RetrieveCategory, RetrieveCategoryList } from "./api";
import RouteList from "./Routes/RouteList";
import { NavLink } from "react-router-dom";
import Reviews from "../pages/Reviews";
import { render } from "@testing-library/react";

const SubNav = ({ setHasParams }) => {
  const [categoryList, setCagetoryList] = useState([]);

  const setParams = () => {
    setHasParams(true);
  };

  console.log(RouteList);
  useEffect(() => {
    if (categoryList.length === 0) {
      RetrieveCategoryList().then((result) => {
        const categories = result.map((category) => {
          RouteList.push({
            route: `/reviews?category=${category}`,
            component: { Reviews },
          });
          return (
            <NavLink
              to={`/reviews?category=${category}`}
              className="Category-menu-items"
              onClick={setParams}
            >
              {category}
            </NavLink>
          );
        });
        console.log(categories, "<<");
        return setCagetoryList(categories);
      });
    }
  }, []);

  return (
    <section className="Sub-nav-inner">
      <section>{categoryList.length > 0 ? categoryList : null} </section>
    </section>
  );
};
export default SubNav;
