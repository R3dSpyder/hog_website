import axios from "axios";

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
      console.log(categories);
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
  console.log("retrieveUserTriggered,", username);
  if (username) {
    return axios
      .get(`https://hog-api-r3dspyder.herokuapp.com/api/users/${username}`)
      .then((reply) => {
        console.log(reply.data.user[0]);
        return reply.data.user[0];
      });
  }
};

export const RetrieveReviewComments = (review_id) => {
  console.log("here");
  if (review_id) {
    return axios
      .get(
        `https://hog-api-r3dspyder.herokuapp.com/api/reviews/${review_id}/comments`
      )
      .then((reply) => {
        console.log(reply.data.comments, "<<Reply");
        return reply.data.comments;
      });
  }
};
