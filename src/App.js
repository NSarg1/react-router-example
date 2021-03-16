import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./components/login/Login.component";
import Home from "./components/home/Home.component";

class App extends React.Component {
    state = {
        isLoggedIn: false,
    };

    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route component={Home} path="/home" />
                        <Route component={Login} path="/" />
                    </Switch>

                    <div>
                        <Link to="/login">To login</Link>
                        <Link to="/home">To home</Link>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
