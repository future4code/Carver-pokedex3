import { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../constants/urls'


const GlobalPokemon = (props) =>{

    const pokemon = useRequestData([], url)
    return (
        <GlobalContext.Provider value={{pokemon}}>
          {props.children}
        </GlobalContext.Provider>
      )
}

}
export default GlobalPokemon