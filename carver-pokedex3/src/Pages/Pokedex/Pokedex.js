import { useContext } from "react"
import PokeCard from "../../components/PokeCard/PokeCard"
import GlobalStateContext from "../../contexts/GlobalStateContext"

const Pokedex = () => {
    const { pokedex } = useContext(GlobalStateContext)
    console.log("pokedex", pokedex)
    


    return (
        <div>
            Pokedex
            

        </div>
    )
}

export default Pokedex