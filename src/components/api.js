import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RetrieveReviews = () => {
  return axios
    .get(`https://hog-api-r3dspyder.herokuapp.com/api/reviews`)
    .then((reply) => {
      return reply.data.response;
    });
};

export const RetrieveCategory = (category_name) => {
  console.log(category_name, "category-name here");
  if (category_name) {
    return axios
      .get(
        `https://hog-api-r3dspyder.herokuapp.com/api/reviews?category=${category_name}`
      )
      .then((reply) => {
        return reply.data.response;
      });
  }
};

export const RetrieveCategoryList = () => {
  return axios
    .get(`https://hog-api-r3dspyder.herokuapp.com/api/categories`)
    .then((reply) => {
      const categories = reply.data.categories.map((category) => {
        return category.slug;
      });

      return categories;
    });
};

export const RetrieveSingleReviewObject = (review_id) => {
  if (review_id) {
    return axios
      .get(`https://hog-api-r3dspyder.herokuapp.com/api/reviews/${review_id}`)
      .then((reply) => {
        return reply.data.review;
      });
  }
};

export const RetrieveUser = (username) => {
  console.log(username.length > 0);
  if (username) {
    const query = `https://hog-api-r3dspyder.herokuapp.com/api/users/${username}`;
    console.log(query);
    return axios.get(query).then((reply) => {
      return reply.data.user[0];
    });
  }
};

export const RetrieveReviewComments = (review_id) => {
  if (review_id) {
    return axios
      .get(
        `https://hog-api-r3dspyder.herokuapp.com/api/reviews/${review_id}/comments`
      )
      .then((reply) => {
        return reply.data.comments;
      });
  }
};

export const AlterVote = (review_id, vote) => {
  if (vote && review_id) {
    const voteObject = { inc_votes: vote };
    return axios
      .put(`https://hog-api-r3dspyder.herokuapp.com/api/reviews/${review_id}`, {
        voteObject,
      })
      .then((reply) => {
        console.log(reply, "reply here");
        return reply.data.comments;
      });
  } else {
    return null;
  }
};

export const deleteComment = (comment_id) => {
  console.log(`delete triggered on comment ${comment_id}`);
  return axios
    .delete(
      `https://hog-api-r3dspyder.herokuapp.com/api/comments/${comment_id}`
    )
    .then((reply) => {
      console.log(reply);
    });
};

export const postComment = (username, body, review_id) => {
  console.log("into post");
  if (username.length > 0 && body.length > 0 && review_id > 0) {
    const postBody = { username: username, body: body };
    console.log(postBody, "postbody .................................");
    return axios
      .post(
        `https://hog-api-r3dspyder.herokuapp.com/api/reviews/${review_id}/comments`,
        postBody
      )
      .then((reply) => {
        console.log(reply);
      });
  }
};
