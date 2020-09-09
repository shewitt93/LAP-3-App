import React, { Component } from 'react'
import '../styles/newHabit.css'

class NewHabit extends Component {
    state = { name: "", description: "", frequency:null }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        console.log("CONNECT TO DB")
    }
    render() {
       
        return (
          <>
          <div className='newHabitContainer'>
            <h1>New Habit</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                className='formInput'
                required
                type="text"
                name="name"
                placeholder="Habit Name"
                onChange={this.handleChange}
              />
              <br />
              <input
                className='formInput'
                required
                type="text area"
                name="description"
                placeholder="Habit Description"
                onChange={this.handleChange}
              />
              <br />
              <input
                className='formInput'
                required
                type="number"
                name="frequency"
                step="1"
                placeholder="Frequency Per Day"
                min="1" 
                onChange={this.handleChange}
              />
              <br/>
                
              <input className='createHabitButton' type="submit" value="Create Habit" />
            </form>
            </div>
          </>
        );
    }
}

export default NewHabit