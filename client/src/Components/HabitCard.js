import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DetailsCard from './DetailsCard'


class HabitCard extends Component {
    render() {
        return (          
            <div>
                <h2>Habit Name: {this.props.name}</h2>
                <h2>Streak: {this.props.streak}</h2>
                <button>Complete</button>
                <button>More Info</button>
                <Link to= {`/details/${this.props.id}`}>link</Link>
            </div>
        )
    }
}

export default HabitCard;