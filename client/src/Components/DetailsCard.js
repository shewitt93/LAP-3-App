import React, { Component } from 'react';
import { connect } from "react-redux";


class DetailsCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.habit[this.props.match.params.id].name}</h1>
            </div >
        )
    }
}

const mSTP = (state) => ({
  habit: state.user.habits,
});
export default connect(mSTP)(DetailsCard)