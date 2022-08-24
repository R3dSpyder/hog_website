import axios from "axios";
export const RetrieveReviews = () => {
  console.log("retrieve reviews triggered");
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
        console.log(reply.data.response, "category retrieved here");
        return reply.data.response;
      });
  }
};

export const RetrieveCategoryList = () => {
  console.log("in request");
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
