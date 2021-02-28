import React from 'react'

const Pro = (props) => {

    const recibir = props.nombre;
    console.log(recibir)

    return (
        <div>
            <h1>{recibir}</h1>
        </div>
    )
}

export default Pro;
