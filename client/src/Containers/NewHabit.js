import React, { Component } from 'react'

class NewHabit extends Component {
    render() {
        state = { name: "", description: "" }

        handleInput = e => {
            const { name, value } = e.target;
            this.setState({ [name]: value });
        }
        return (
            <>
                <h1>New Habit</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" name="name" placeholder="Habit Name" onChange={this.handleChange}/>        
                    <br/>
                    <input required type="text area" name="description" placeholder="Habit Description" onChange={this.handleChange} />    
                    <br />
                    <input tyep/>
                    <input type="submit" value="Create Habit" />
                </form>
            </>
        )
    }
}

export default NewHabit