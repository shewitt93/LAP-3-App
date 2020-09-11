import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import HabitCard from "../Components/HabitCard";
import "../styles/dashboard.css";
import { getActivities, getName } from "../Actions/Actions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getName();
    this.props.getActivities();
  }

  render() {
    console.log(this.props);
    return (
      <>
        <div className="dashboardContainer">
          <h1 className="dashboardTitle">{this.props.user.name}'s Dashboard</h1>
          <div className="habitsContainer">
          <div className="newHabitCard">
                <Link to="/session/newHabit" className="newHabitButton">+</Link>
              </div>
            {this.props.user.habits.map((habit, idx) => (
              <HabitCard
                idx={idx}
                key={idx}
                name={habit.name}
                frequency={habit.frequency}
                streak={habit.streak}
                date={habit.latest_date}
              />))}
          </div>
        </div>
      </>
    );
  }
}

const mSTP = (state) => ({ user: state });
// const mDTP = (dispatch) => ({
//   getAct: dispatch(() => getActivities()),
// });
export default connect(mSTP, { getActivities, getName })(Dashboard);
