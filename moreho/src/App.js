import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./views/Pages/Navbar";
import Movies from "./views/components/main/Movies";
import Login from "./views/Pages/Login";
import Register from "./views/Pages/Register";
import NotFound from "./views/Pages/NotFound";

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/movies" component={Movies} />
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/notfound" component={NotFound} />
                <Redirect exact from="/" to="/movies" />
                <Redirect to="/notfound" />
            </Switch>
        </>
    );
};

export default App;
