import { Routes, Route } from "react-router-dom";

const Routing = ({ RouteList }) => {
  if (RouteList) {
    return (
      <section>
        <Routes>
          {RouteList.map((item) => {
            console.log(item.component);
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
