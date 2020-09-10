import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/habitCard.css';


class HabitCard extends Component {
    render() {
        return (          
            <div className="habitCardContainer">
                <h2 className="habitCardName">Habit Name: {this.props.name}</h2>
                <h2 className="habitCardStreak">Streak: {this.props.streak}</h2>
                <button className="completeButton">Complete</button>
                <button className="moreInfoButton"><Link to= {`/session/details/${this.props.idx}`}>More Info</Link></button>
                
            </div>
        )
    }
}

export default HabitCard;