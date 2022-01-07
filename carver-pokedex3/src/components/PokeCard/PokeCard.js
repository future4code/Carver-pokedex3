import { ButtonsCard, ButtonsCardContainer, CardContainer, Photo, PhotoCard } from "./styled"
import { useHistory } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import PokeDetails from "../../Pages/PokeDetails/PokeDetails";


import GlobalStateContext from "../../contexts/GlobalStateContext";

const PokeCard = (props) => {
    const history = useHistory();


    const { mostrarPokemon, setMostrarPokemon } = useContext(GlobalStateContext)
    const { pokedex, setPokedex } = useContext(GlobalStateContext)


    const addPokedex = () => {
        const index = mostrarPokemon.findIndex((newPokemon) => newPokemon.id === props.poke.id);

        const newPokemons = [...mostrarPokemon]
        newPokemons.splice(index, 1)

        const listaOrdenadaPokemons = newPokemons.sort((a, b) => {
            return a.id - b.id
        })

        const newPokedex = [...pokedex, props.poke];

        const listaOrdenadaPokedex = newPokedex.sort((a, b) => {
            return a.id - b.id
        })


        setPokedex(listaOrdenadaPokedex);
        setMostrarPokemon(listaOrdenadaPokemons)
        alert(`${props.poke.name} adicionado a pokedex`)
    };
    const removePokedex = () => {
        const index = pokedex.findIndex((newPokemon) => newPokemon.id === props.poke.id);

        const newPokedex = [...pokedex]
        newPokedex.splice(index, 1)

        const listaOrdenadaPokedex = newPokedex.sort((a, b) => {
            return a.id - b.id
        })

        const newPokemon = [...mostrarPokemon, props.poke];

        const listaOrdenadaPokemons = newPokemon.sort((a, b) => {
            return a.id - b.id
        })


        setPokedex(listaOrdenadaPokedex);
        setMostrarPokemon(listaOrdenadaPokemons)
        alert(`${props.poke.name} removido da pokedex`)
    
    }

    const goToPokeDetails = (history) => {
        history.push('/pokedex')
    }



    return (
        <>


            <CardContainer>
                <PhotoCard>
                    <Photo src={props.poke.sprites.front_default} alt={props.poke.name} />

                </PhotoCard>
                <ButtonsCardContainer>

                    <ButtonsCard onClick={() => props.isPokedex ? removePokedex() : addPokedex()}>
                        {props.isPokedex ? "Remover da pokedex" : "Adicionar a pokedex"}
                    </ButtonsCard>

                    <ButtonsCard onClick={() => goToPokeDetails(history)}>
                        Ver detalhes
                    </ButtonsCard>

                </ButtonsCardContainer>
            </CardContainer>


        </>

    )

}

export default PokeCard