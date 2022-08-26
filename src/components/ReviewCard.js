import "../styling/Review-cards.css";

import { NavLink } from "react-router-dom";

// Only selected data from the review object is used to display the review.
//the review_id is kept inside the review card but hidden from the user (not secret just useless to them)
//each review card is actually a link, and when clicked it navigates to the SingleReview page with the path /review/review_id

export const ReviewCard = (object) => {
  return (
    <NavLink to={`/reviews/review/${object.review_id}`} className="cards">
      <div>
        <img src={object.review_img_url} height="100px" width="100px" />

        <ul>
          <li>
            <b>Category: </b> {object.category}
          </li>
          <li>
            <b>Title: </b>
            {object.title}
          </li>
          <li>
            <b>Review: </b>
            <p>{object.review_body}</p>
          </li>
        </ul>
      </div>
      <div className="user-interaction">
        <b>Votes:</b>
        {object.votes}
      </div>
      <div className="hidden user-interaction">
        <span>review_id:</span>
        {object.review_id}
      </div>
    </NavLink>
  );
};
