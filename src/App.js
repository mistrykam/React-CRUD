import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/adduser" component={AddUser}></Route>
            <Route path="/edituser/:id" component={EditUser}></Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
