import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/profile.css";

class Profile extends Component {
  render() {
    return (
      <>
        <div className="profileContainer">
          <h1>{this.props.name}</h1>
          <h2>Number of Active Habits: {this.props.habits.length}</h2>
          <h2>
            Accumulated Current Streak:{" "}
            {this.props.user.habits.reduce((a, b) => a.streak + b.streak)}
          </h2>
        </div>
      </>
    );
  }
}

<<<<<<< HEAD
const mSTP = (state) => ({ user: state.user });
export default connect(mSTP)(Profile);
=======
const mSTP = state => ({user: state})
export default connect(mSTP)(Profile)
>>>>>>> 0d906c4fb4b1bcede40cd1c28d249ae8537ccb12
