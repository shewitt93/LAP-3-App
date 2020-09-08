import React from "react";
import ActiveSession from "./Containers/ActiveSession";
import { Switch, Route } from 'react-router-dom';
import Login from "./Containers/Login";
import NotFound404 from "./Containers/NotFound404";
import NewUser from "./Containers/NewUser";


class App extends React.Component {
  state = {};
  render() {
    return (
      <>       
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/newUser" component={NewUser} />
          <Route path="/session" component={ActiveSession} />
          <Route component={NotFound404} />
        </Switch>
      </>
    );
  }
}
export default App;
