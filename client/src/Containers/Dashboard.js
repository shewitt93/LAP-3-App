import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import HabitCard from '../Components/HabitCard'


class Dashboard extends Component {
    render() {
        return (
            <>
                <h1>{this.props.user.name}'s Dashboard</h1>
                <Link to='/session/newHabit' >+</Link>
                {this.props.user.habits.map((habit, idx) => <HabitCard idx={idx} key={idx} name={habit.name} streak={habit.streak}/> )}
                <button>Complete All</button>
            </>
        )
    }
}

const mSTP = state => ({user: state.user})
export default connect(mSTP)(Dashboard)