import React from "react";
import ReactDOM from "react-dom";

const fname = "Alok";
const lname = "Singh";

const luckyNumber = 3;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname} .</h1>
    <h1>
      Hello {fname} {lname} .
    </h1>
    <h1>Hello {"${fname} ${lname}"} . </h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
