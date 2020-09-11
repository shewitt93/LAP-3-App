import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../styles/profile.css'

class Profile extends Component {
    render() {
        return (
          <>
            <div className ="profilePageContainer" >
              <div className ="profileContainer">
              <h1 className="profileAvatar">👤</h1>
                <h1>{this.props.user.name}</h1>
            <h2>Number of Active Habits: 
              {/* {this.props.user.habits.length} */}
              </h2>
            <h2>Accumulated Current Streak: 
              {/* {this.props.user.habits.reduce((a,b)=> a.streak + b.streak)} */}
              </h2>
            </div>
            </div>
          </>
        );
    }
}

const mSTP = state => ({user: state})
export default connect(mSTP)(Profile)