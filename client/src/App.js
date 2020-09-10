import React from "react";
import ActiveSession from "./Containers/ActiveSession";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Containers/Login";
import NotFound404 from "./Containers/NotFound404";
import NewUser from "./Containers/NewUser";
import PrivateRoute from "./Components/PrivateRoute";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/newUser" component={NewUser} />
          <PrivateRoute path="/session" component={ActiveSession} />

          <Route component={NotFound404} />
        </Switch>
      </>
    );
  }
}
export default App;
