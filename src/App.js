import "./App.css";
import { React } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Routes/Routing";
import RouteList from "./components/Routes/RouteList";
import Title from "./components/Title";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <section className="wrapper">
        <Title />
        <NavBar />
        <section className="app-main-body">
          <section className="main-body-container">
            <Routing RouteList={RouteList} />
          </section>
        </section>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
