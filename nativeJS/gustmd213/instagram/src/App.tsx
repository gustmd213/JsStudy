import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form id="login-container">
        <h1>instagram</h1>
        <div id="login-form">
          <input type="text" placeholder="input your id"></input>
          <input type="password" placeholder="input your pw"></input>
          <button type="submit">Log in</button>
        </div>
        <div id="sign-up">
          <button>Sign-In</button>
        </div>
      </form>
      
    </div>
  );
}

export default App;
