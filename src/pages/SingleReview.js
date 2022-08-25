import { useParams } from "react-router-dom";
import {
  RetrieveSingleReviewObject,
  RetrieveUser,
  RetrieveReviewComments,
} from "../components/api";
import { useState, useEffect } from "react";
import "../styling/Single-review.css";
import { formatDate, formatime, formatTime } from "../HelperComponents";
import CommentCard from "../components/CommentCard";

const SingleReview = () => {
  const { review } = useParams();
  const [reviewObject, setReviewObject] = useState([]);
  const [user, setUser] = useState("setUser");
  const [userComments, setUserComments] = useState([]);
  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    if (review !== undefined) {
      RetrieveSingleReviewObject(review).then((result) => {
        setReviewObject(result);
      });
    }
  }, [review]);

  useEffect(() => {
    if (reviewObject !== undefined) {
      const userName = reviewObject.owner;
      if (userName !== undefined) {
        RetrieveUser(userName).then((result) => {
          setUser(result);
        });
      }
    }
  }, [reviewObject]);

  useEffect(() => {
    if (reviewObject.review_id !== undefined) {
      RetrieveReviewComments(reviewObject.review_id).then((comment) => {
        const cards = [];
        comment.forEach((single) => {
          RetrieveUser(single.author)
            .then((item) => {
              return cards.push(CommentCard(single, item));
            })
            .then(() => {
              setUserCards(cards);
            });
        });
      });
    }
  }, [reviewObject]);

  return (
    <section className="single-review-container">
      <section className="single-review-avatar">
        <div>
          <img
            src={user.avatar_url}
            height="150px"
            width="150x"
            alt="image-not-loaded"
          />
        </div>
        <div>
          <h2>{user.username}</h2>
        </div>
        <div>
          <h3>
            <i>"{reviewObject.title}"</i>
          </h3>
        </div>
      </section>
      <section className="score-plane grid-item">
        <div id="voteText">{reviewObject.votes}</div>
        <div>
          <button>Up Vote</button> <button>Down Vote</button>
        </div>
      </section>
      <section className="review-plane grid-item">
        <div className="review-inner-label-container">
          <span>Category: {reviewObject.category}</span>
          <span>Designer: {reviewObject.designer}</span>
        </div>
        <div>{reviewObject.review_body}</div>

        <span id="dateTime">
          Created on: {formatDate(new Date(reviewObject.created_at))} at{" "}
          {formatTime(new Date(reviewObject.created_at))}
        </span>
      </section>
      <section className="discussion-plane grid-item">
        {userCards !== undefined ? userCards : <p>not found</p>}
      </section>
    </section>
  );
};
export default SingleReview;
