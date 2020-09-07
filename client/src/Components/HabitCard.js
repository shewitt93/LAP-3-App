import React, { Component } from 'react'


class HabitCard extends Component {
    render() {
        return (          
            <div>
                <h2>Habit Name: {this.props.name}</h2>
                <h2>Streak: {this.props.streak}</h2>
                <button>Complete</button>
                <button>More Info</button>
            </div>
        )
    }
}

export default HabitCard;