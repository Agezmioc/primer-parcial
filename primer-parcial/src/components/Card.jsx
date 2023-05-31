import React from 'react'

const Card = ({player, name, specie, cClass}) => {
    return (
        <div className='card'>
                <div className='card2'>
                <h2>{player}, este es tu personaje:</h2>
                <div className='info'>
                    <h3>Nombre: {name}</h3>
                    <h3>Especie: {specie}</h3>
                    <h3>Clase: {cClass}</h3>
                </div>
                <h1>¡Ya estás listo para rolear!</h1>
            </div>
        </div>
    )
}

export default Card