import { useHistory } from "react-router-dom";
import { goToMain, goToPokedex } from "../../route/coordinator";
import { ButtonPokedex, HeaderContainer, Title } from "./styled"
import { useLocation } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const location = useLocation();

    return (
        <HeaderContainer>
            {history.location.pathname === "/" ? (<ButtonPokedex onClick={() => goToPokedex(history)}>Lista de Pokémons </ButtonPokedex>) :(<ButtonPokedex onClick={() => goToMain(history)}>Ir para Pokedex</ButtonPokedex>)}
            <Title>Voltar para lista de pokemons </Title>
        </HeaderContainer>
    )
}

export default Header