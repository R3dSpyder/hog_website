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
