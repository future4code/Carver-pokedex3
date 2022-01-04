import PokeCard from "../../components/PokeCard/PokeCard"
import { MainContainer } from "./styled"
import useRequestData from "../../components/useRequestData/useRequestData";


const Main = () => {

   

    return (
       <div>
            <MainContainer>
        <PokeCard/>
            </MainContainer>
       </div>
    )
}

export default Main