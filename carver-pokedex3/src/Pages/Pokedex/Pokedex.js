import { useContext } from "react"
import PokeCard from "../../components/PokeCard/PokeCard"
import GlobalStateContext from "../../contexts/GlobalStateContext"
import { MainContainer } from "../Main/styled"

const Pokedex = () => {
    const { pokedex } = useContext(GlobalStateContext)



    return (
        <MainContainer>

            {pokedex && pokedex.map((poke) => {
                return <PokeCard isPokedex key={poke.name} poke={poke} />;
            })}


        </MainContainer>
    )
}

export default Pokedex