import { useState, useEffect } from "react";
import { RetrieveReviews, RetrieveCategory } from "../components/api";
import { ReviewCard } from "../components/ReviewCard";
import SubNav from "../components/SubNav";
import "../styling/Page.css";
import "../styling/SubNav.css";
import { GetLocation, GetParameters } from "../HelperComponents";
import ErrorPage from "./ErrorPage";

const Reviews = () => {
  const parameters = GetParameters(["category"]);

  const [reviews, setReviewItems] = useState();
  const [hasParams, setHasParams] = useState("");

  useEffect(() => {
    console.log(parameters, "param on first load");
    if (parameters[0] === null) {
      RetrieveReviews().then((result) => {
        const mapped = result.map((item) => {
          const card = ReviewCard(item);

          return card;
        });

        return setReviewItems(mapped);
      });
    }
  }, []);

  useEffect(() => {
    if (parameters[0] !== null) {
      const parameter = parameters[0];
      RetrieveCategory([parameter]).then((result) => {
        const mapped = result.map((item) => {
          const card = ReviewCard(item);
          setHasParams(false);
          return card;
        });

        return setReviewItems(mapped);
      });
    }
  }, [hasParams]);

  return (
    <div className="position-content-with-subnav">
      <section className="SubNav">
        <SubNav setReviewItems={setReviewItems} setHasParams={setHasParams} />
      </section>
      <section className="ReviewCards">
        <br />
        <section>{reviews !== undefined ? reviews : <ErrorPage />}</section>
      </section>
    </div>
  );
};
export default Reviews;
