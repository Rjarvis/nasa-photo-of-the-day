import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import ApiData from "./components/apiComponents/ApiData.js";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <ApiData />
    </div>
  );
}

export default App;
