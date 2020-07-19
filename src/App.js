import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/states" component={Dashboard} />
          <Route exact path="/states/:state" component={Dashboard} />
          <Route exact path="/news" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
