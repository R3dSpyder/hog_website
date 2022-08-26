import { useParams } from "react-router-dom";
import {
  RetrieveSingleReviewObject,
  RetrieveUser,
  RetrieveReviewComments,
  AlterVote,
} from "../components/api";
import { useState, useEffect, useRef } from "react";
import "../styling/FocusReviewsPage.css";
import { formatDate, formatTime } from "../HelperComponents";
import CommentCard from "../components/CommentCard";
import { useCookies } from "react-cookie";
import PopUp from "../components/Popup";

const SingleReview = () => {
  const { review } = useParams();
  const [reviewObject, setReviewObject] = useState([]);
  const [user, setUser] = useState("setUser");
  const [userCards, setUserCards] = useState([]);
  const [voteNumber, setVoteNumber] = useState([]);
  const [Vote, isVoteDisabled] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const [refreshAfterDelete, setRefreshAfterDelete] = useState(false);
  const [popup, isPopUp] = useState(false);

  useEffect(() => {
    if (review !== undefined) {
      RetrieveSingleReviewObject(review).then((result) => {
        setReviewObject(result);
        console.log(result.votes, "result.votes");
        setVoteNumber(result.votes);
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
    if (reviewObject.review_id !== undefined || refreshAfterDelete === true) {
      RetrieveReviewComments(reviewObject.review_id).then((comment) => {
        const cards = [];
        comment.forEach((singleComment) => {
          RetrieveUser(singleComment.author)
            .then((user) => {
              return cards.push(
                <CommentCard
                  singleComment={singleComment}
                  user={user}
                  setRefreshAfterDelete={setRefreshAfterDelete}
                />
              );
            })
            .then(() => {
              if (cards.length === comment.length) {
                return setUserCards(cards);
              }
            });
        });
      });
    }
  }, [reviewObject, refreshAfterDelete]);

  useEffect(() => {
    if (voteNumber !== undefined) {
      AlterVote(reviewObject.review_id, voteNumber);
    }
  }, [voteNumber]);

  const increaseVote = () => {
    Vote === true ? isVoteDisabled(false) : isVoteDisabled(true);

    setVoteNumber(voteNumber + 1);
  };
  const decreaseVote = () => {
    Vote === true ? isVoteDisabled(false) : isVoteDisabled(true);

    setVoteNumber(voteNumber - 1);
  };

  useEffect(() => {}, [popup]);

  const openPopUp = () => {
    isPopUp(true);
  };

  return (
    <div className="focused-review-container">
      <section className="focused-review-avatar-area">
        <img
          src={user.avatar_url}
          height="150px"
          width="150x"
          alt="image-not-loaded"
        />
        <div id="title-container">
          <p id="userName">{user.username}</p>
          <p id="title">
            {" "}
            <i>"{reviewObject.title}"</i>
          </p>
        </div>
      </section>
      <section className="focused-review-score-plane ">
        <span id="downvote-span"></span>
        <button
          id="downvote"
          onClick={decreaseVote}
          disabled={Vote === false ? true : false}
        >
          Downvote
        </button>
        <div id="voteText">{voteNumber}</div>
        <span id="upvote-span">
          <button
            id="upvote"
            onClick={increaseVote}
            disabled={Vote === false ? false : true}
          >
            Upvote
          </button>
        </span>
      </section>
      <section className="focused-review-review-plane ">
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
      <section className="focused-review-comment-plane">
        {popup === true ? (
          <PopUp
            cookies={cookies}
            isPopUp={isPopUp}
            review_id={reviewObject.review_id}
          />
        ) : null}
        <div id="make-comment-button-plane">
          <button onClick={openPopUp}>
            <b>Post A Comment</b>
          </button>
        </div>
        <div>{userCards !== undefined ? userCards : <p>not found</p>}</div>
      </section>
    </div>
  );
};
export default SingleReview;
