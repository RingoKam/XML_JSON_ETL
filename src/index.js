import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom"

import App from "./App";

const Root = () => (
  <BrowserRouter>
    <App />  
  </BrowserRouter>
);

render(<Root />, document.getElementById("root"));
