import React from 'react'
import { Link } from 'react-router-dom';
import './styles/menu.css'

const Menu = () => {
    
    return (
        <>
            <div className="menu_bar">
                
                <div className="logo_opciones">
                    <a href="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=""/>
                    </a>
                    <div className="opciones">
                        <Link to="/">Inicio</Link>
                        <Link to="/series">Series</Link>
                        <Link to="/peliculas">Peliculas</Link>
                        <Link to="/novedades">Novedades Populares</Link>
                        <Link to="/milista">Mi lista</Link>
                        
                    </div>
                    <div className="opciones_responsive">
                        <a href="">
                            <p>Explorar</p>
                            <i className="fas fa-sort-down"></i>
                        </a>
                    </div>
                </div>
                <div className="iconos">
                    <i className="fas fa-search "></i>
                    <i className="fas fa-gift "></i>
                    <i className="fas fa-bell "></i>
                    
                    <a href="" className="foto_perfil">
                        <img className="imagen" src="https://www.mirales.es/sites/default/files/styles/hero_small/public/heros/Foto-de-perfil.jpg" alt=""/>
                        <i className="fas fa-caret-down"></i>
                    </a>
                </div>  
            </div>
        </>
    )
}

export default Menu;