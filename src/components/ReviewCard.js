import "../styling/Review-cards.css";

export const ReviewCard = (object) => {
  const loadReviewObject = (event) => {
    console.log(event.target.value);
  };

  const date = new Date(object.created_at).toString();

  return (
    <div
      className="cards"
      value={object.review_id}
      // onClick={loadReviewObject((this.value = value))}
    >
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
      <div className="hidden">
        <span>{object.review_id}</span>
      </div>
    </div>
  );
};
