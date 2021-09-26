import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Update from "./Update";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/update" exact component={Update} />
      </div>
    </BrowserRouter>
  );
};

export default App;
