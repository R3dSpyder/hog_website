import "../styling/Popup.css";
import { postComment } from "./api";

import { useEffect, useState } from "react";

const PopUp = ({ cookies, isPopUp, review_id }) => {
  const [text, setText] = useState();

  const handleText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handlePost = () => {
    postComment(cookies.user.username, text, review_id).then(() => {
      {
        isPopUp(false);
      }
    });
  };

  return (
    <section className="popup">
      <div id="popup-container">
        <div id="image">
          <img src={cookies.user.avatar_url} height="100px" width="100px" />
        </div>
        <form on Submit={handlePost}>
          <div id="center-form">
            <div id="username">
              <label htmlFor="name">Username: {cookies.user.username}</label>
            </div>
            <div id="message">
              <label htmlFor="message" value={text} onChange={handleText}>
                Message
              </label>
              <textarea id="message" />
            </div>
            <div id="submit-button-popup">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default PopUp;
