// App.js

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CartPage from "./CartPage";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
