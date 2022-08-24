import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { RetrieveCategory } from "./api";
import { ReviewCard } from "./ReviewCard";
import RouteList from "./Routes/RouteList";
// import { RetrieveCategory } from "../../components/api";
// import { ReviewCard } from "../../components/ReviewCard";
// import RouteList from "../../components/Routes/RouteList";

const Categories = () => {
  const { category } = useParams();
  const [reviews, setReviewItems] = useState();
  const searchCategory = category.replace("/", "");
  console.log(category, "<<params");
  useEffect(() => {
    RetrieveCategory(searchCategory).then((result) => {
      const mapped = result.map((item) => {
        const card = ReviewCard(item);
        return card;
      });

      return setReviewItems(mapped);
    });
  }, [category]);

  return (
    <div className="position-content-with-subnav">
      <section className="ReviewCards">
        <br />
        <section>{reviews !== undefined ? reviews : null}</section>
      </section>
    </div>
  );
};

export default Categories;
