import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Form from './components/Form'

function App() {
  const [player, setPlayer] = useState('')
  const [name, setName] = useState('')
  const [specie, setSpecie] = useState('Humano')
  const [cClass, setCClass] = useState('Guerrero')
  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (player.length < 3 || /^\s/.test(player) || name.length < 6) {
      alert("Por favor chequea que la información sea correcta")
    } else {
      setShow(true)
    }
  }


  return (
    <div className="App">
      <h1>Tu personaje de D&D</h1>
      <Form handleSubmit={handleSubmit} setPlayer={setPlayer} setName={setName} setSpecie={setSpecie} setCClass={setCClass}/>
      {show && <Card player={player} name={name} specie={specie} cClass={cClass}/>}
    </div>
  )
}

export default App
