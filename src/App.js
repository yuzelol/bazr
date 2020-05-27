import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";

import Home from "./components/home";
import Search from "./components/search";
import Careers from "./components/careers";
import Contact from "./components/contact";
import Order from "./components/order";

const App = () => {
  const [basket, setBasket] = useState([]);

  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/search" render={() => <Search basket={basket} setBasket={setBasket}/>} />
      <Route exact path="/search/:query"
        render={({ match }) => <Search basket={basket} setBasket={setBasket} searchTerm={match.params.query} />}
      />
      <Route exact path="/careers" render={() => <Careers basket={basket} />} />
      <Route exact path="/contact" render={() => <Contact basket={basket} />} />
      <Route exact path="/order" render={() => <Order basket={basket} setBasket={setBasket} />} />
    </BrowserRouter>
  );
};

export default App;
