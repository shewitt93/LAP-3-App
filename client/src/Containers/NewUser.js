import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class NewUser extends Component {

    state = { username: "", password: "", passwordTwo: "" }

    handleInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        if (this.state.password === this.state.passwordTwo)
            {
            console.log("you have created an account");
            console.log("CONNECT TO DB");
            console.log(this.state);}
            else {
                alert("The passwords do not match, please try again")
            }
    };

    render() {
        return (
            <>
            <form onSubmit={this.handleFormSubmit}>
                <input required type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInput} />
                <br />
                <input required type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInput} />
                <br />
                <input required type="password" name="passwordTwo" placeholder="Re-enter Password" value={this.state.passwordTwo} onChange={this.handleInput} />
                <br />
                <input type="submit" value="Create Account" />
            </form>
                <h2>Already have an account?</h2>
                <br />
                <Link to='/'>Click here to Login</Link>
            </>
        )
    }
}
