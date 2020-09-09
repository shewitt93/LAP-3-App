import React, { Component } from 'react'
import { connect } from 'react-redux'
import HabitCard from '../Components/HabitCard'

class Dashboard extends Component {
    render() {
        return (
            <>
                <h1>{this.props.appState.name}'s Dashboard</h1>
                {this.props.appState.habits.map((habit, idx) => <HabitCard key={idx} name={habit.name} streak={habit.streak}/> )}
                <button>Complete All</button>
            </>
        )
    }
}

const mSTP = state => ({appState: state.user})
export default connect(mSTP)(Dashboard)