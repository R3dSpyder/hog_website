import { useState, useEffect } from "react";
import { RetrieveReviews } from "./api";
import { ReviewCard } from "./ReviewCard";

const UI = () => {
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

  return <section className="ui">{reviews}</section>;
};

export default UI;
