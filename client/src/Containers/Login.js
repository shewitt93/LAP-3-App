import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

export default class Login extends Component {
  state = { username: "", password: "" };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let LogIn = {
      email: this.state.username,
      password: this.state.password,
    };
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json", token: localStorage.user },
      body: JSON.stringify(LogIn),
    };

    fetch("http://localhost:3000/users/login", options)
      .then((r) => r.json())
      .then((data) => {
        if (data.length !== 143) {
          alert(data)
        } else {
          localStorage.setItem("user", data);
          window.location = `/session`;
        }
      });
  };

  render() {
    return (
      <>
        <div className="loginPageContainer">
          <form onSubmit={this.handleFormSubmit}>
            <input
              required
              className="formInput"
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.nameInput}
              onChange={this.handleInput}
            />
            <br />
            <input
              required
              className="formInput"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInput}
            />
            <br />
            <input type="submit" value="Login" className="loginButton" />
          </form>
          <div className="callToAction">
            <h2>Not Registered yet?</h2>
            <br />
            <Link to="/newUser">Click here to create an account</Link>
          </div>
        </div>
      </>
    );
  }
}
