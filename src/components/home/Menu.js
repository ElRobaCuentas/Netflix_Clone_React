import React from 'react'

const Menu = () => {
    
    return (
        <>
            <div className="menu_bar">
                
                <div className="logo_opciones">
                    <a href="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=""/>
                    </a>
                    <div className="opciones">
                        <a href=""> Inicio</a>
                        <a href=""> Series</a>
                        <a href=""> Películas</a>
                        <a href=""> Novedades Populares</a>
                        <a href=""> Mi lista</a>
                    </div>
                    <div className="opciones_responsive">
                        <a href="">
                            <p>Explorar</p>
                            <i class="fas fa-sort-down"></i>
                        </a>
                    </div>
                </div>
                <div className="iconos">
                    <i class="fas fa-search "></i>
                    <i class="fas fa-gift "></i>
                    <i class="fas fa-bell "></i>
                    
                    <a href="" className="foto_perfil">
                        <img className="imagen" src="https://www.mirales.es/sites/default/files/styles/hero_small/public/heros/Foto-de-perfil.jpg" alt=""/>
                        <i class="fas fa-caret-down"></i>
                    </a>
                </div>  
            </div>
        </>
    )
}

export default Menu;