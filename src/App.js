import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import States from "./pages/States";
import Singlestate from "./pages/Singlestate";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import News from "./pages/News";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/states" component={States} />
          <Route exact path="/states/:state" component={Singlestate} />
          <Route exact path="/news" component={News} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
