import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/detailsCard.css";
import { getHabitId } from "../Actions/Actions";

class DetailsCard extends Component {
  render() {
    const id = this.props.match.params.id;

    return (
      <div className="detailsContainer">
        <h1>{this.props.habit[id].name}</h1>
        <p>{this.props.habit[id].description}</p>
        <h2>Streak: {this.props.habit[id].streak}</h2>
        {/* <button
          onClick={() => {
            this.props.getHabitId(id);
          }}
        >
          Delete Habit
        </button> */}
      </div>
    );
  }
}

const mSTP = (state) => ({
  habit: state.habits,
});
export default connect(mSTP, { getHabitId })(DetailsCard);
