import { useState, useEffect } from "react";
import { RetrieveReviews } from "../components/api";
import { ReviewCard } from "../components/ReviewCard";
import "../styling/Page.css";

const Home = () => {
  const [reviews, setReviewItems] = useState();
  useEffect(() => {
    RetrieveReviews().then((result) => {
      const mapped = result.map((item) => {
        const card = ReviewCard(item);
        console.log(card);
        return card;
      });

      return setReviewItems(mapped);
    });
  }, []);

  return (
    <section className="ReviewCards">
      <br />
      <section>{reviews}</section>
    </section>
  );
};
export default Home;
