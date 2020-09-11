import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/habitCard.css";
import addStreak from "../Reducer/Reducer";

class HabitCard extends Component {
  state = {
    counter: 0,
    date: new Date(),
    streak: this.props.streak,
    disbled: false,
  };
  handleSubmit = () => {
    let card = {
      name: this.props.name,
      id: this.props.idx,
    };

    let confirmDelete = window.confirm("Delete Habit?");
    if (confirmDelete) {
      fetch("http://localhost:3000/dashboard", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          token: localStorage.getItem("user"),
        },
        body: JSON.stringify(card),
      }).catch(console.warn);
      window.location.reload();
    }
  };

  //check last project for this bit
  // handleClick = () => {
  //   console.log(this.state);
  //   if (this.state.counter < this.props.frequency) {
  //     document.getElementById("freq");
  //   }
  // };
  componentDidMount() {
    let day1 = new Date(this.props.date);
    const day = day1.getDate();

    let today1 = new Date(this.state.date);
    const today = today1.getDate();
    if (day === today) {
      this.setState({ disabled: true });
    } else this.setState({ disabled: false });
  }

  componentDidUpdate() {
    let updated = {
      streak: this.state.streak,
      today: this.state.date,
      name: this.props.name,
    };
    const options = {
      method: "PATCH",
      headers: { "Content-type": "application/json", token: localStorage.user },
      body: JSON.stringify(updated),
    };
    fetch("http://localhost:3000/dashboard", options).then((r) => r.json());
  }

  handleClick = () => {
    console.log("hi");
    let day1 = new Date(this.props.date);
    const day = day1.getDate();

    let today1 = new Date(this.state.date);
    const today = today1.getDate();
    let streak = this.state.streak;

    if (today - 1 === day) {
      this.setState((prevState) => {
        return { streak: prevState.streak + 1 };
      });
    } else {
      this.setState({ streak: 0 });
    }

    window.location = "/session";
  };

  render() {
    return (
      <div className="habitCardContainer">
        <h2>Name: <span className="habitCardName">{this.props.name}</span></h2>
        <h2>Streak: <span className="habitCardStreak">{this.state.streak}</span> </h2>
        <h2 id="freq" className="habitCardFreq">
          Frequency: 0/{this.props.frequency}
        </h2>
        <button
          disabled={this.state.disabled}
          className="completeButton"
          onClick={this.handleClick}
        >
          Complete
        </button>
        {/* <h3>Last Completed: {this.props.date}</h3> */}
        <Link to={`/session/details/${this.props.idx}`}>
        <button className="moreInfoButton">
          More Info
        </button>
        </Link>
        <button onClick={this.handleSubmit} className="deleteButton">delete</button>
      </div>
    );
  }
}
const mSTP = (state) => ({ user: state.user });
export default connect(mSTP, { addStreak })(HabitCard);
