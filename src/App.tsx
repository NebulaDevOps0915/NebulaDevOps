import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Nav from "./page/Nav.tsx";
import Header from "./page/Header.tsx";
import Main from "./page/Main.tsx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <div id="_next">
          <Nav />
          <Header />
          <Main />
        </div>
      </body>
    </div>
  );
}

export default App;
