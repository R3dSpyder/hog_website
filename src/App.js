import "./App.css";
import { React, useState, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Routes/Routing";
import RouteList from "./components/Routes/RouteList";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import { RetrieveReviews } from "./components/api";
import { UserContext } from "./components/ContextProvider.js";
import { CookiesProvider } from "react-cookie";

function App() {
  const [userContext, setUserContext] = useState(null);
  return (
    <UserContext.Provider value={[userContext, setUserContext]}>
      <CookiesProvider>
        <BrowserRouter>
          <section className="wrapper">
            <Title />
            <NavBar />
            <div className="app-main-body">
              <Routing RouteList={RouteList} />
            </div>
            <Footer />
          </section>
        </BrowserRouter>
      </CookiesProvider>
    </UserContext.Provider>
  );
}

export default App;
