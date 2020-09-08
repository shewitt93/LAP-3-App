import React from "react";
import Dashboard from "./Dashboard"
import "../styles/App.css";
import { Switch, Route } from 'react-router-dom';
import DetailsCard from "../Components/DetailsCard";
import NavBar from "../Components/NavBar"
import Profile from "./Profile";
import NotFound404 from "./NotFound404"
import NewHabit from "./NewHabit"

class App extends React.Component {
    state = {};
    render() {
        return (
            <>
                <NavBar />
                <Switch>
                    <Route exact path="/session" component={Dashboard} />
                    <Route path="/session/newHabit" component={NewHabit} />
                    <Route path='/session/details/:id' component={DetailsCard} />
                    <Route path='/session/profile' component={Profile} />
                    <Route component={NotFound404} />
                </Switch>
            </>
        );
    }
}
export default App;
