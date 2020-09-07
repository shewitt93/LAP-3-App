import React, { Component } from 'react';
import { connect } from "react-redux";


class DetailsCard extends Component {
    
    render() {

        const id = this.props.match.params.id;

        return (
            <div>
                <h1>{this.props.habit[id].name}</h1>
                <p>{this.props.habit[id].description}</p>
                <h2>Streak: {this.props.habit[id].streak}</h2>
                <button>Delete Habit</button>
            </div>    
        )
    }
}

const mSTP = (state) => ({
  habit: state.user.habits,
});
export default connect(mSTP)(DetailsCard)