import React from "react";
import Header from "./components/header.js";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
