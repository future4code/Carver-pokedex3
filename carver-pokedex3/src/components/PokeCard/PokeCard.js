import { ButtonsCard, ButtonsCardContainer, CardContainer, Photo, PhotoCard } from "./styled"
import useRequestData from "../useRequestData/useRequestData"
import { useEffect } from "react/cjs/react.development"
const PokeCard = () => {

    const pokemon = useRequestData([], "https://pokeapi.co/api/v2/pokemon/25")
    
    console.log("aqui",pokemon)
    

    
    
    useEffect (()=>{
        
    },{})

 
    return (
        <CardContainer>
          
            <PhotoCard>
            <Photo src = {pokemon && pokemon.sprites.front_default}/>
            
            </PhotoCard>

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