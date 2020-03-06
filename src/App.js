import React from "react";
import "./App.css";
import TimeList from "./components/TimeList";

function App() {
  return (
    <div className="container">
      <h1 className="display-6">
        Simple Example for firebase database insertion
      </h1>
      <TimeList />
    </div>
  );
}

export default App;
