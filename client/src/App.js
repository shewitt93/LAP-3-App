import React from "react";
import Dashboard from "./Containers/Dashboard"
import "./styles/App.css";
import { Switch, Route } from 'react-router-dom';
import DetailsCard from "./Components/DetailsCard";
import NavBar from "./Components/NavBar"
import Profile from "./Containers/Profile";
import NotFound404 from "./Containers/NotFound404"
import Login from "./Containers/Login";
import NewHabit from "./Containers/NewHabit"
import NewUser from "./Containers/NewUser";

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <NavBar/>  
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/newUser" component={NewUser} />
          <Route path="/newHabit" component={NewHabit} />
          <Route path='/details/:id' component={DetailsCard}/>
          <Route path='/profile' component={Profile}/>
          <Route component={NotFound404} />
        </Switch>
      </>
    );
  }
}
export default App;
