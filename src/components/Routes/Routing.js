import { Routes, Route } from "react-router-dom";

const Routing = ({ RouteList }) => {
  if (RouteList) {
    return (
      <section>
        <Routes>
          {RouteList.map((item) => {
            return (
              <Route exact path={item.route} element={item.element}></Route>
            );
          })}
        </Routes>
      </section>
    );
  }
};

export default Routing;
