import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Login extends Component {
    
    state = { username: "", password: "" }

    handleInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <>
            <form onSubmit={this.handleFormSubmit}>
                <input required type="text" name="nameInput" placeholder="Username" value={this.state.nameInput} onChange={this.handleInput} />
                <br />
                <input required type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInput} />
                <br />
                <input type="submit" value="Update!"/>
            </form>
                <h2>Not Registered yet?</h2>
                <br />
                <Link to='/newUser'>Click here to create an account</Link>
            </>
        )
    }
}
