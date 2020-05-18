import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import HomePage from "./_views/HomePage";
import LoginPage from "./_views/LoginPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login/">
          <LoginPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
