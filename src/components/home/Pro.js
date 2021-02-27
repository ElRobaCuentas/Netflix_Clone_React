import React from 'react'

const Pro = (props) => {
    const menudos = props.objetosos ? props.objetosos[50] : {};
    console.log("los objetos son:", menudos);

    return (
        <div>
            <h1>{menudos.title}</h1>
        </div>
    )
}

export default Pro;
