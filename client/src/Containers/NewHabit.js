import React, { Component } from "react";

class NewHabit extends Component {
  state = { name: "", description: "", date: "", id: null };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let newHabit = {
      name: this.state.name,
      description: this.state.description,
      frequency: this.state.frequency,
      latest_date: this.state.date,
      name_id: localStorage.getItem("user"),
    };
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newHabit),
    };

    console.log(options);
    fetch("http://localhost:3000/dashboard/newhabit", options);
  };

  render() {
    return (
      <>
        <h1>New Habit</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            name="name"
            placeholder="Habit Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            type="text area"
            name="description"
            placeholder="Habit Description"
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            type="number"
            name="frequency"
            step="1"
            placeholder="Frequency Per Day"
            min="1"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            required
            type="date"
            name="date"
            placeholder="Date created"
            onChange={this.handleChange}
          />
          <br />

          <input type="submit" value="Create Habit" />
        </form>
      </>
    );
  }
}

export default NewHabit;
