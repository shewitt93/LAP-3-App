import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NewUser extends Component {
  state = { username: "", email: "", password: "", passwordTwo: "" };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.passwordTwo) {
      const userData = {
        email: this.state.email,
        name: this.state.username,
        password: this.state.password,
        password2: this.state.passwordTwo,
      };
      const options = {
        method: "POST",
        body: JSON.stringify(userData),
      };

      fetch("http://localhost:3000/users/register", options);
      // .then((r) => r.json())
      // .then(addUser)
      // .catch(console.warn);

      console.log("CONNECT TO DB");
      //   console.log(options);
    } else {
      alert("The passwords do not match, please try again");
    }
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
            value={this.state.username}
            onChange={this.handleInput}
          />
          <br />
          <input
            required
            type="email"
            name="email"
            placeholder="Email Address"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <br />
          <input
            required
            type="password"
            name="password"
            minLength="6"
            placeholder="Password Minimum of 6 characters"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <br />
          <input
            required
            type="password"
            name="passwordTwo"
            minLength="6"
            placeholder="Re-enter Password"
            value={this.state.passwordTwo}
            onChange={this.handleInput}
          />
          <br />
          <input type="submit" value="Create Account" />
        </form>
        <h2>Already have an account?</h2>
        <br />
        <Link to="/">Click here to Login</Link>
      </>
    );
  }
}
