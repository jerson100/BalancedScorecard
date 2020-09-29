import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Presentation from "../pages/Presentation";
import Home from "../pages/Home";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/presentation" exact component={Presentation} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
