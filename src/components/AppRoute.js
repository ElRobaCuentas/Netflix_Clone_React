import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './home/Home'
import Movie from './home/Movie'

const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/movie" component={ Movie } />
                    
                <Redirect to="/" />
            </Switch>
        </Router>    
    )
}

export default AppRoute
