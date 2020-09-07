import React from "react";
import Home from "./Containers/Home"
import "./styles/App.css";
class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <h1>New React App</h1>
        <h2>Happy Coding</h2>
        <Home/>
      </>
    );
  }
}
export default App;
