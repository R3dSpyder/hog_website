import Routing from "./Routes/Routing";
import { useState } from "react";
import RouteList from "./Routes/RouteList";
import NavBar from "./NavBar";
import UI from "./UI";
import AccoladeButton from "./AccoladeButton";
import Page from "./Page";

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
