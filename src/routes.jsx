import React from "react";
import { Switch , Route } from "react-router-dom";

import Home from "./components/home";
import PestoMenu from "./components/pesto-menu";

import AboutUs from "./components/about-us";
import ContactUs from "./components/contact-us";

import Login from "./components/login";
import Register from "./components/register";

const routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pesto-menu" component={PestoMenu} />

            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/contact-us" component={ContactUs} />
            
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
    );
};

export default routes;