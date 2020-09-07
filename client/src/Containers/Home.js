import React, { Component } from 'react'
import {connect} from 'react-redux'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.appState.name}</h1>
            </div>
        )
    }
}

const mSTP = state => ({appState: state.user})
export default connect(mSTP)(Home)