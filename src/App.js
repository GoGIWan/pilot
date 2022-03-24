import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
function App() {
  // 서버와 통신하는 메소드
  const [message, setMessage] = useState("");
  useEffect(() => {
    // 서버 url
    fetch("/api/hello")
      .then((response) => response.text())
      .then((message) => {
        setMessage(message);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{message}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}
export default App;
