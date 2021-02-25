import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './home/Home'

const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ Home } />
                    
                <Redirect to="/" />
            </Switch>
        </Router>    
    )
}

export default AppRoute
