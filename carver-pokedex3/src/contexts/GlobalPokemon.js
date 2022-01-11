import { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../constants/urls'
import GlobalStateContext from './GlobalStateContext'


const GlobalPokemon = (props) => {
  const [mostrarPokemon, setMostrarPokemon] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    getPokemonNames()
  }, [])



  useEffect(() => {
      
    const list = []
    pokemonNames.forEach((pokemon) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
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
    })
  },[pokemonNames])


  const getPokemonNames = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=20`)
      .then((res) => {
        setPokemonNames(res.data.results);
      })
      .catch((err) => console.log(err.message));
  };
 
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