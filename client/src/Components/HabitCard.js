import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HabitCard extends Component {
    render() {
        return (          
            <div>
                <h2>Habit Name: {this.props.name}</h2>
                <h2>Streak: {this.props.streak}</h2>
                <button>Complete</button>
                <button><Link to= {`/session/details/${this.props.idx}`}>More Info</Link></button>
                
            </div>
        )
    }
}

export default HabitCard;