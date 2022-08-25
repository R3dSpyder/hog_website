import { React, useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { RetrieveCategory, RetrieveCategoryList } from "./api";
import RouteList from "./Routes/RouteList";
import { NavLink } from "react-router-dom";
import Reviews from "../pages/Reviews";
import "../styling/Nav-bar.css";

//dynamic creation of the category list for the reviews subnav navigation tabs
//sets each of their paths to :category which when navigated too causes a re-render of the forms page.

const SubNav = () => {
  const [categoryList, setCagetoryList] = useState([]);

  useEffect(() => {
    if (categoryList.length === 0) {
      RetrieveCategoryList().then((result) => {
        const categories = result.map((category) => {
          RouteList.push({
            route: `/${category}`,
            component: { Reviews },
          });
          return (
            <div className="nav-bar-item">
              <NavLink to={`/${category}`} className="Nav-bar-link">
                {category}
              </NavLink>
            </div>
          );
        });
        return setCagetoryList(categories);
      });
    }
  }, []);

  return (
    <div className="align-subnav-horizontal">
      <section>{categoryList.length > 0 ? categoryList : null} </section>
    </div>
  );
};
export default SubNav;
