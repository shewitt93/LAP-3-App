import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = { username: "", password: "" };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    let LogIn = {
      email: this.state.username,
      password: this.state.password,
    };
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(LogIn),
    };

    console.log(options);
    fetch("http://localhost:3000/users/login", options).then((r) => r.json());
    //   .then((data) => {
    //     if (data.status) {
    //       console.log("Redirect");
    //     } else {
    //       console.log("Stay here");
    //     }
    //   });

    console.log("CONNECT TO DB");
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <input
            required
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.nameInput}
            onChange={this.handleInput}
          />
          <br />
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
        <h2>Not Registered yet?</h2>
        <br />
        <Link to="/newUser">Click here to create an account</Link>
      </>
    );
  }
}
