import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './history'

import Home from './components/Home'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={ history }>
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/dashboard" component={ Dashboard } />
                    <Route component={ NotFound } />
                </Switch>
            </Router>
        )
    }
}