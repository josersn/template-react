// Default import   
import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
// Pages 
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NoMatchPage from "../pages/NoMatchPage"

export default function Routes(){
    return(
        <Switch>
            <Route path="/" component={SignIn} exact />
            <Route path="/register" component={SignUp}  />
            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/profile" component={Profile} isPrivate />
            <Route component={NoMatchPage} />
        </Switch>
    )
}