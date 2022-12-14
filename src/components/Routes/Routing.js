import { Routes, Route } from "react-router-dom";
import NotFound from "../../pages/NotFound";

const Routing = ({ RouteList }) => {
  if (RouteList) {
    return (
      <section>
        <Routes>
          {RouteList.map((item) => {
            return (
              <Route
                exact
                path={item.route}
                element={<item.component />}
              ></Route>
            );
          })}
        </Routes>
      </section>
    );
  }
};

export default Routing;
