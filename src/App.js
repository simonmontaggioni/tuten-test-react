import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Bookings from "./pages/Bookings";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/bookings">
          <Bookings />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
