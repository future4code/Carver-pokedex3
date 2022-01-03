import { ButtonsCard, ButtonsCardContainer, CardContainer, Photo, PhotoCard } from "./styled"

const PokeCard = () => {
    return (
        <CardContainer>

            <PhotoCard>
               <Photo src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"/>
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