import React from "react";
import ActiveSession from "./Containers/ActiveSession";
import { Switch, Route } from "react-router-dom";
import Login from "./Containers/Login";
import NotFound404 from "./Containers/NotFound404";
import NewUser from "./Containers/NewUser";
// import Register from "./Containers/register";

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route path="/register" Component={Register} /> */}
          <Route path="/newUser" component={NewUser} />
          <Route path="/session" component={ActiveSession} />
          <Route component={NotFound404} />
        </Switch>
      </>
    );
  }
}
export default App;

// function App() {
//   const authenticated = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/users/authorised", {
//         method: "GET",
//         headers: { token: localStorage.token },
//       });
//       const isRes = await res.json();
//       isRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };
//   useEffect(() => {
//     authenticated();
//   }, []);

//   const [setIsAuthenticated, setIsAuthenticated] = useState(false);

//   const setAuth = (boolean) => {
//     setIsAuthenticated(boolean);
//   };
