import Routing from "./Routes/Routing";
import { useState } from "react";
import RouteList from "./Routes/RouteList";
import AccoladeButton from "./AccoladeButton";

const Body = () => {
  const [page, setPage] = useState("/");
  return (
    <section className="app-main-body">
      <section className="main-body-container">
        <AccoladeButton />
        <div>
          <Routing RouteList={RouteList} />
        </div>
      </section>
    </section>
  );
};
export default Body;
