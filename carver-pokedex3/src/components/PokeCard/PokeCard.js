import { ButtonsCard, ButtonsCardContainer, CardContainer, Photo, PhotoCard } from "./styled"
import { useHistory } from "react-router-dom";
import React, {  useContext, useEffect, useState } from 'react'
import axios from 'axios'
import PokeDetails from "../../Pages/PokeDetails/PokeDetails";


import GlobalStateContext from "../../contexts/GlobalStateContext";

const PokeCard = () => {
    const history = useHistory();
    // const [mostrarPokemon, setMostrarPokemon] = useState([])

    const {mostrarPokemon, setMostrarPokemon} = useContext(GlobalStateContext)

    // useEffect(() => {
    //     detalhesPokemon()
    // }, [])



    // const detalhesPokemon = () => {
    //     const list = []
    //     for (let i = 1; i <= 20; i++) {
    //         axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
    //             .then((res) => {
    //                 list.push(res.data)
    //                 if (list.length === 20) {
    //                     setMostrarPokemon(list)
    //                 }
    //             })
    //             .catch((err) => {
    //                 console.log(err.response)
    //             })
    //     }
    // }

    const goToPokeDetails = (history) => {
        history.push('/pokedex')
    }
    
    const details = mostrarPokemon.length && mostrarPokemon.map((poke) => {
        return (
            <CardContainer>
                <PhotoCard>
                    <Photo src={poke.sprites.front_default} />
                    
                </PhotoCard>
                <ButtonsCardContainer>

                    <ButtonsCard>
                        Adicionar a Pokédex
                    </ButtonsCard>

                    <ButtonsCard onClick={() => goToPokeDetails(history, poke.id)}>
                        Ver detalhes
                    </ButtonsCard>

                </ButtonsCardContainer>
            </CardContainer>
        )
    })

    console.log("detalhe", mostrarPokemon)

    return (
        <>


            {details}



            


        </>

    )

}

export default PokeCard