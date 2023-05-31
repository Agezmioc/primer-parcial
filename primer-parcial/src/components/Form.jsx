import React from 'react'

const Form = ({handleSubmit, setPlayer, setName, setSpecie, setCClass}) => {
    return (
        <form className='form' onSubmit={handleSubmit}>
            <label>Nombre del jugador</label>
            <input type='text' onChange={(e) => setPlayer(e.target.value)}/>
            <label>Nombre del personaje</label>
            <input type='text' onChange={(e) => setName(e.target.value)}/>
        
            <label>Selecciona la especie del personaje</label>
            <select onChange={(e) => setSpecie(e.target.value)}>
                <option value="Humano">Humano</option>
                <option value="Elfo">Elfo</option>
                <option value="Enano">Enano</option>
                <option value="Mediano">Mediano</option>
            </select>
        
            <label>Selecciona la clase del personaje</label>
            <select onChange={(e) => setCClass(e.target.value)}>
            <option value="Bárbaro">Bárbaro</option>
            <option value="Bardo">Bardo</option>
            <option value="Guerrero">Guerrero</option>
            <option value="Hechicero">Hechicero</option>
            <option value="Mago">Mago</option>
            <option value="Monje">Monje</option>
            <option value="Explorador">Explorador</option>
            <option value="Brujo">Brujo</option>
        </select>
        <button className='btnEnviar'>Enviar</button>
        </form>
    )
}

export default Form