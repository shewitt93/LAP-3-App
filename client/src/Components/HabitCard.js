import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/habitCard.css";

class HabitCard extends Component {
  deleteItem = (id) => {
    let confirmDelete = window.confirm("delete Habit?");
    if (confirmDelete) {
      fetch("http://localhost:3000/dashboard/", {
        method: "delete",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id }),
      })
        .then((r) => r.json())
        .then((item) => {
          this.props.deleteItem(id);
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <div className="habitCardContainer">
        <h2 className="habitCardName">Habit Name: {this.props.name}</h2>
        <h2 className="habitCardStreak">Streak: {this.props.streak}</h2>
        <button className="completeButton">Complete</button>
        <button className="moreInfoButton">
          <Link to={`/session/details/${this.props.idx}`}>More Info</Link>
        </button>
        <button onClick={() => this.deleteItem(item.id)}>delete</button>
      </div>
    );
  }
}

export default HabitCard;
