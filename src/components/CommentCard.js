import { formatDate } from "../HelperComponents";
import { formatTime } from "../HelperComponents";
import "../styling/Comment-card.css";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { deleteComment } from "./api";

const CommentCard = ({ singleComment, user, setRefreshAfterDelete }) => {
  const [cookies, setCookie] = useCookies(["user"]);
  const deleteButton = singleComment.author === cookies.user.username;
  const [deleteActivated, isDeleteActivated] = useState(false);
  const [forDelete, isForDelete] = useState(false);

  const handleDelete = () => {
    console.log("delete triggered");
    isForDelete(true);
    isDeleteActivated(true);
  };

  useEffect(() => {
    if (forDelete === true && user.username === cookies.user.username) {
      deleteComment(singleComment.comment_id).then(() => {
        setRefreshAfterDelete(true);
      });
    }
  }, [deleteActivated]);

  return (
    <section className="comment-cards-container">
      <img
        src={user.avatar_url}
        height="50px"
        width="50px"
        alt="image-not-loaded"
      />
      <div className="relative-position-single-comment">
        <div id="userName">{user.username}</div>
        <div id="body-of-comment">{singleComment.body}</div>
        <div>{singleComment.votes}</div>
        <div id="dateTime">
          Created on: {formatDate(new Date(singleComment.created_at))} at{" "}
          {formatTime(new Date(singleComment.created_at))}
        </div>
        <div id="delete">
          {deleteButton === true && deleteActivated === false ? (
            <button onClick={handleDelete}>delete</button>
          ) : null}
          <div id="loading">
            {deleteActivated === true ? (
              <div className="lds-dual-ring"></div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentCard;
