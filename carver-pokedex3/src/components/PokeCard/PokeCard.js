import { ButtonsCard, ButtonsCardContainer, CardContainer, Photo, PhotoCard } from "./styled"
import useRequestData from "../useRequestData/useRequestData"


import { useEffect, useState } from 'react'
import axios from 'axios'
const PokeCard = () => {
    const [mostrarPokemon, setMostrarPokemon] = useState([])
    // const pokemonNome = useRequestData([], "https://pokeapi.co/api/v2/pokemon/bulbasaur")
    
    // console.log("aqui",pokemonNome)
    

    const detalhesPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`, {})
        .then((res) => {
            setMostrarPokemon(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
    useEffect(() => {
        detalhesPokemon()
    }, [])


    
    

 
    return (
        <CardContainer>
          
            <PhotoCard>
            {/* <Photo src = {mostrarPoke.sprites.front_default}/> */}
            
            </PhotoCard>

            {/* {mostrarPokemon && mostrarPokemon.type.map(tipo => {
                return <div>{ tidivo.type.name}</div>
            })} */}
            {mostrarPokemon.types[0].type.name}
            
            <ButtonsCardContainer>

                <ButtonsCard>
                    Adicionar a Pokédex
                </ButtonsCard>
                <ButtonsCard>
                    Ver detalhes
                </ButtonsCard>
                
            </ButtonsCardContainer>
            
        </CardContainer>        
    )

}

export default PokeCard