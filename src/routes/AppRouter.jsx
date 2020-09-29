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
      {/* <div
        style={{
          backgroundImage:
            "url(ttps://web.whatsapp.com/img/bg-chat-tile-dark_9f39e76b5a0e039e53afc5d9d4bdd780.png)",
          backgroundColor: "rgb(30 31 38 / 57%)",
          filter: "blur(4px)",
        }}
      ></div> */}
    </Router>
  );
};

export default AppRouter;
