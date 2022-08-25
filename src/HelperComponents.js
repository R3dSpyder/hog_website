import { useLocation } from "react-router-dom";

export const GetLocation = () => {
  const location = useLocation();
  return location.pathname;
};

export const GetParameters = (queries) => {
  const search = useLocation().search;
  const query = queries.map((query) => {
    return new URLSearchParams(search).get(`${query}`);
  });

  return query;
};

export const formatDate = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const formatTime = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  date = date < 10 ? "0" + date : date;
  const period = hours < 12 ? "AM" : "PM";

  return hours + ":" + minutes + ":" + seconds + " " + period;
};
