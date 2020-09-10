import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/habitCard.css";
import addStreak from "../Reducer/Reducer";

class HabitCard extends Component {
  state = {
    counter: 0,
  };
  handleSubmit = () => {
    console.log(this.props.user);
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
    }
  };
  // handleClick = () => {
  //     if (this.state.counter < this.props.frequency)
  // }

  render() {
    return (
      <div className="habitCardContainer">
        <h2 className="habitCardName">Habit Name: {this.props.name}</h2>
        <h2 className="habitCardStreak">Streak: {this.props.streak} </h2>
        {/* <button
          className="completeButton"
          onClick={() => this.props.addStreak(this.props.idx)}
        >
          Complete
        </button> */}
        <button className="moreInfoButton">
          <Link to={`/session/details/ ${this.props.idx}`}>More Info</Link>
        </button>
        <button onClick={this.handleSubmit}>delete</button>
      </div>
    );
  }
}
const mSTP = (state) => ({ user: state.user });
export default connect(mSTP, { addStreak })(HabitCard);
