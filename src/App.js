import React from "react";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Region from "./components/crud/region.js";
import Caliber from "./components/crud/caliber.js";
import Event from "./components/crud/event.js";
import Accueil from "./components/dashbord/accueil.js";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NewPrice from "./components/Price/newPrice.js";
import ListOfPrices from "./components/Price/listOfPrices.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div style={{ minHeight: "68.5vh" }}>
          <Switch>
            <Route path="/portail" exact component={Accueil} />
            <Route path="/portail/prix/ajoutprix" exact component={NewPrice} />
            <Route
              path="/portail/prix/listeprix"
              exact
              component={ListOfPrices}
            />
            <Route path="/portail/crud/calibre" exact component={Caliber} />
            <Route path="/portail/crud/region" exact component={Region} />
            <Route path="/portail/crud/evenement" exact component={Event} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
