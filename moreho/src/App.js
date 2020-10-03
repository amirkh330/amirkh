import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./views/page/Navbar";
import Movies from "./views/components/main/Movies";
import Login from "./views/page/Login";
import Register from "./views/page/Register";
import NotFound from "./views/page/NotFound";

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/movies" component={Movies} />
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/notfound" component={NotFound} />
                <Redirect from="" exact to="notfound"/>
            </Switch>
        </>
    );
};

export default App;
