import { useState, useEffect } from "react";
import { RetrieveReviews } from "../components/api";
import { ReviewCard } from "../components/ReviewCard";
import RouteList from "../components/Routes/RouteList";

const Reviews = () => {
  const [reviews, setReviewItems] = useState();

  useEffect(() => {
    RetrieveReviews().then((result) => {
      const mapped = result.map((item) => {
        const card = ReviewCard(item);
        return card;
      });

      return setReviewItems(mapped);
    });
  }, []);
  console.log(RouteList, "<<<<");
  return (
    <div className="position-content-with-subnav">
      <section className="ReviewCards">
        <br />
        <section>{reviews !== undefined ? reviews : null}</section>
      </section>
    </div>
  );
};
export default Reviews;
