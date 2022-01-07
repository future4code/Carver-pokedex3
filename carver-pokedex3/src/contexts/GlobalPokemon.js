import { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../constants/urls'
import GlobalStateContext from './GlobalStateContext'


const GlobalPokemon = (props) => {
  const [mostrarPokemon, setMostrarPokemon] = useState([])
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    detalhesPokemon()
  }, [])



  const detalhesPokemon = () => {
    
    const list = [] 
    for (let i = 1; i <= 20; i++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((res) => {
          list.push(res.data)
          if (list.length === 20) {
            const listaOrdenada = list.sort((a, b) => {
              return a.id - b.id
            })
            setMostrarPokemon(listaOrdenada)
          }
          
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }
 
  const data = {
    mostrarPokemon,
    setMostrarPokemon,
    pokedex,
    setPokedex
  }

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}


export default GlobalPokemon