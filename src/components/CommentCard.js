import { formatDate } from "../HelperComponents";
import { formatTime } from "../HelperComponents";
import "../styling/Comment-card.css";

const CommentCard = (comment, getUserData) => {
  console.log(comment, getUserData, "user data");

  return (
    <section className="comment-cards-container">
      <img
        src={getUserData.avatar_url}
        height="50px"
        width="50px"
        alt="image-not-loaded"
      />
      <div className="relative-position-single-comment">
        <div id="userName">{getUserData.username}</div>
        <div id="body-of-comment">{comment.body}</div>
        <div>{comment.votes}</div>
        <div id="dateTime">
          Created on: {formatDate(new Date(comment.created_at))} at{" "}
          {formatTime(new Date(comment.created_at))}
        </div>
      </div>
    </section>
  );
};

export default CommentCard;
