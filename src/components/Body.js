import Routing from "./Routes/Routing";

import RouteList from "./Routes/RouteList";
import AccoladeButton from "./AccoladeButton";

const Body = () => {
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
