import React from "react";
import ActiveSession from "./Containers/ActiveSession";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Containers/Login";
import NotFound404 from "./Containers/NotFound404";
import NewUser from "./Containers/NewUser";
import PrivateRoute from "./Components/PrivateRoute";
import { isLogin, logout } from "./utils";

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isLogin: isLogin(),
  //   };
  // }
  // handleLogout = () => {
  //   logout();
  //   this.setState({ isLogin: false });
  // };
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Login} />

          <Route path="/newUser" component={NewUser} />

          <PrivateRoute path="/session" component={ActiveSession} />
          <Route component={NotFound404} />
          {/* {this.state.isLogin ? (
            <button onClick={() => this.handleLogout()}>LOGOUT</button>
          ) : (
            <Link to="/">SIGN IN</Link>
          )} */}
        </Switch>
      </>
    );
  }
}
export default App;
