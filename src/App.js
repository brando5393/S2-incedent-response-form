import React from "react";
import "./App.css";
import Form from "./components/Form.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col l12">
            <h1>Discount Juice Shop</h1>
            <hr id="title-rule" />
            <h3>Incident Management Form</h3>
          </div>
        </div>
        <div className="row">
          <div className="col l12">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
