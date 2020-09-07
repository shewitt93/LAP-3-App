import React from "react";
import Dashboard from "./Containers/Dashboard"
import "./styles/App.css";
import { Switch, Route } from 'react-router-dom';
import DetailsCard from "./Components/DetailsCard";

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path='/details/:id' component={DetailsCard}/>
      </Switch>
        </>
    );
  }
}
export default App;
