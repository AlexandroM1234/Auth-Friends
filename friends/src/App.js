import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Components/Login";
import FriendsList from "./Components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <FriendsList />
      </div>
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
