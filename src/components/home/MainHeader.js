import React from 'react'

const MainHeader = () => {
    return (
        <>
            <div className="main_header_body">
                <div className="detalle">
                     <img src="https://occ-0-2645-1740.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQJINKoJHp7xqM6TjXzvQlwxHFt1UN-Fl5ob2amdK0IMPiaYdHjuPkjZTi8GShLX1rSh9ED3qE0YITcC4NvGF0FdSrYBvCr30byK.webp?r=53b" alt=""/>
                     <p>Descender a las catacumbas de París parecía una gran aventura, pero se encontraron con una laberíntica pesadilla.</p>
                     <div className="botones">
                            <div className="boton_reproducir">
                                <i class="fas fa-play"></i>
                                <a href="">Reproducir</a>
                            </div>
                            <div className="boton_informacion">
                                <i class="far fa-question-circle"></i>
                                <a href="">Más Información</a>
                            </div>
                     </div>
                </div>
            </div>
        </>
    )
}


export default MainHeader;