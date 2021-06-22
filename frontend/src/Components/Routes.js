import React from 'react'
import { Switch, Route } from 'react-router-dom';
import PNF from './PageNotFound.js';
import Header from './Header.js';
import Home from '../Pages/Home/Home.js';
import About from '../Pages/About/About.js';
import Contact from '../Pages/Contact/Contact.js';
import Work from '../Pages/Work/Work.js';

function Routes() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/work">
                    <Work />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route>
                    <PNF />
                </Route>
            </Switch>
        </>
    );
}

export default Routes
