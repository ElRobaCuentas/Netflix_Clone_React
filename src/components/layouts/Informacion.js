import React from 'react'

const Informacion = (props) => {
    return (
        <>
            <div className="">
                <h1>Hola Mundo</h1>
                <div>
                    {props.children}
                </div>    
            </div>  
        </>
    )
}

export default Informacion;
