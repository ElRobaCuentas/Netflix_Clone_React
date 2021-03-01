import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Inicio from '../views/Inicio'
import Series from '../views/Series'

const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ Inicio } />
                <Route path="/series" component={ Series } />
                    
                <Redirect to="/" />
            </Switch>
        </Router>    
    )
}

export default AppRoute
