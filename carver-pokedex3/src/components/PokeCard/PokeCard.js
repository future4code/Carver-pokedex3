import { ButtonsCard, ButtonsCardContainer, CardContainer, Photo, PhotoCard } from "./styled"
import { useHistory } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import PokeDetails from "../../Pages/PokeDetails/PokeDetails";


import GlobalStateContext from "../../contexts/GlobalStateContext";

const PokeCard = () => {
    const history = useHistory();


    const { mostrarPokemon, setMostrarPokemon } = useContext(GlobalStateContext)
    const { pokedex, setPokedex } = useContext(GlobalStateContext)


    const addToPokedex = (poke) => {
        const pokeIndex = mostrarPokemon.findIndex((newPokemon) => newPokemon.id === poke.id);

        const newPokemons = [...mostrarPokemon]
        newPokemons.splice(pokeIndex, 1)

        const listaOrdenadaPokemons = newPokemons.sort((a, b) => {
            return a.id - b.id
        })
        
        const newPokedex = [...pokedex, poke];

        const listaOrdenadaPokedex = newPokedex.sort((a, b) => {
            return a.id - b.id
          })


        setPokedex(listaOrdenadaPokedex);
        setMostrarPokemon(listaOrdenadaPokemons)
        console.log("pokemon adicionado", pokedex)
    };

    const goToPokeDetails = (history) => {
        history.push('/pokedex')
    }
    console.log("pokedex", pokedex)
    const details = mostrarPokemon.length && mostrarPokemon.map((poke) => {
        return (
            <CardContainer>
                <PhotoCard>
                    <Photo src={poke.sprites.front_default} alt={poke.name} />

                </PhotoCard>
                <ButtonsCardContainer>

                    <ButtonsCard onClick={() => addToPokedex(poke)}>
                        Adicionar a Pokédex
                    </ButtonsCard>

                    <ButtonsCard onClick={() => goToPokeDetails(history, poke.id)}>
                        Ver detalhes
                    </ButtonsCard>

                </ButtonsCardContainer>
            </CardContainer>
        )
    })

    



    return (
        <>


            {details}
            

        </>

    )

}

export default PokeCard