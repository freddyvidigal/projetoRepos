
import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/index.js';
import Repositorio from './pages/Repositorio/index.js';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/repositorio/:repositorio" component={Repositorio}/>
        </Switch>
        </BrowserRouter>
    );
    }