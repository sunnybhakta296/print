import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AnotherExample } from "./components/Print";
import FormOnen from "./components/FormOne";

function App() {
  return (
    <div className="container">
      <div className="row">
        <FormOnen />
        {/* <AnotherExample /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
