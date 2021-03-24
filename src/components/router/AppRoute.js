import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from '../views/Home'
import MiLista from '../views/MiLista'
import NovedadesPopulares from '../views/NovedadesPopulares'
import Peliculas from '../views/Peliculas'
import Series from '../views/Series'
import DetallePelicula from '../views/DetallePelicula'


const AppRoute = () => {

    return (
        <Router>
            <Switch>
                {/* RUTA ESTATICAS */}
                <Route path="/browse" exact component={ Home } />
                <Route path="/series" exact component={ Series } />
                <Route path="/peliculas" exact component={ Peliculas } />
                <Route path="/novedades-populares" exact component={ NovedadesPopulares } />
                <Route path="/mi-lista" exact component={ MiLista } />
                
                {/* RUTA DINAMICA */}
                <Route path="/browse/url/:index" component={ DetallePelicula } />

                <Redirect to="/browse" />
            </Switch>
        </Router>    
    )
}

export default AppRoute
