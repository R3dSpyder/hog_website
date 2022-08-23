import axios from "axios";
export const RetrieveReviews = () => {
  return axios
    .get(`https://hog-api-r3dspyder.herokuapp.com/api/reviews`)
    .then((reply) => {
      return reply.data.response;
    });
};
