import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
      </div>
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
