import { useState, useEffect } from "react";
import { RetrieveReviews, RetrieveCategory } from "../components/api";
import { ReviewCard } from "../components/ReviewCard";
import SubNav from "../components/SubNav";
import "../styling/SubNav.css";
import ErrorPage from "./ErrorPage";
import { useParams } from "react-router-dom";

// review page and review subnav work together. If the URL parameters change owing to clicking on a subnav link
// then reviews term will update itself and use the path in the url as the search term against the database.
// each review is displayed using a review card.

const Reviews = () => {
  const { category } = useParams();
  const [loadAllReviews, isLoadingAllReviews] = useState(true);
  const [reviewsToDisplay, setReviewsToDisplay] = useState([]);

  useEffect(() => {
    if (loadAllReviews) {
      RetrieveReviews().then((result) => {
        const makeCards = result.map((item) => {
          const card = ReviewCard(item);
          return card;
        });
        isLoadingAllReviews(false);
        return setReviewsToDisplay(makeCards);
      });
    }
  }, []);

  useEffect(() => {
    if (category !== undefined) {
      RetrieveCategory(category).then((result) => {
        const makeCards = result.map((item) => {
          const card = ReviewCard(item);
          return card;
        });
        return setReviewsToDisplay(makeCards);
      });
    }
  }, [category]);

  return (
    <div className="position-content-with-subnav">
      <section className="SubNav">
        <SubNav />
      </section>
      <section className="ReviewCards">
        <section>
          {reviewsToDisplay !== undefined ? reviewsToDisplay : <ErrorPage />}
        </section>
      </section>
    </div>
  );
};
export default Reviews;
