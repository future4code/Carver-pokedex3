import Router from "./route/Router"
import GlobalStateContext from "./contexts/GlobalStateContext";
import { useEffect, useState } from 'react'
import axios from 'axios'
import GlobalPokemon from "./contexts/GlobalPokemon";

const App = () => {
  

  return (
    <GlobalPokemon>
      <Router />
    </GlobalPokemon>
  )
}

export default App;