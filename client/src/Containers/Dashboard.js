import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import HabitCard from '../Components/HabitCard'
import '../styles/dashboard.css'


class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="dashboardContainer">
                <h1>{this.props.user.name}'s Dashboard</h1>
                <Link to='/session/newHabit' >+</Link>
                <div className="habitsContainer">
                {this.props.user.habits.map((habit, idx) => <HabitCard idx={idx} key={idx} name={habit.name} streak={habit.streak}/> )}
                </div>
                <button className="completeAllButton">Complete All</button>
                </div>
            </>
        )
    }
}

const mSTP = state => ({user: state.user})
export default connect(mSTP)(Dashboard)