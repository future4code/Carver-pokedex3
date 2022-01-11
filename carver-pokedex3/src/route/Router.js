import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Error from "../Pages/Error/Error";
import Main from "../Pages/Main/Main";
import PokeDetails from "../Pages/PokeDetails/PokeDetails";
import Pokedex from "../Pages/Pokedex/Pokedex";


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/pokedex">
                    <Pokedex />
                </Route>
                <Route exact path="/pokedetails">
                    <PokeDetails />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router