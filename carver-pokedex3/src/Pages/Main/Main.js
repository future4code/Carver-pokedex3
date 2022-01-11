import { useContext } from "react"
import PokeCard from "../../components/PokeCard/PokeCard"
import GlobalStateContext from "../../contexts/GlobalStateContext"
import { MainContainer } from "./styled"



const Main = () => {
    const { mostrarPokemon } = useContext(GlobalStateContext)



    return (
        <div>
            <MainContainer>
                
                {mostrarPokemon && mostrarPokemon.map((poke) => {
                        return <PokeCard key={poke.name} poke={poke} />;
                })}
                
            </MainContainer>
        </div>
    )
}

export default Main