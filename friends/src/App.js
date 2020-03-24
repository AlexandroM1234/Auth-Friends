import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import FriendsList from "./Components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/protected">Protected Page</Link>
      </div>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
