import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Update from "./Update";
import Home from "./Home";
import ViewPolicyCount from "./ViewPolicyCount";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/update" exact component={Update} />
        <Route path="/chart" exact component={ViewPolicyCount} />
      </div>
    </BrowserRouter>
  );
};

export default App;
