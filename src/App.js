import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route exact path="/">
            <Header />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
