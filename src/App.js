import "./App.css";
import { React, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Title from "./components/Title";
import Footer from "./components/Footer";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import { RetrieveReviews } from "./components/api";

function App() {
  RetrieveReviews();
  return (
    <BrowserRouter>
      <section className="wrapper">
        <Title />
        <NavBar />
        <Body />
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
