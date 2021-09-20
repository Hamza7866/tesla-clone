import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <Alert />
      <Header />
      <Home />
    </div>
  );
}

export default App;
