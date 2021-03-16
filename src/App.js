import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/about">
                        <h1>About page</h1>
                    </Route>
                    <Route path="/users">
                        <h1>Users page</h1>
                    </Route>
                    <Route path="/">
                        <h1>Home page</h1>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
