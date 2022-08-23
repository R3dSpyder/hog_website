import "./App.css";
import { Component, React, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Routing from "./components/Routes/Routing.js";

import Title from "./components/Title";
import Footer from "./components/Footer";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import { RetrieveReviews } from "./components/api";
import RouteList from "./components/Routes/RouteList";

function App() {
  const [page, setPage] = useState("/");

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
