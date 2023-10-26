import React, { useContext } from 'react'
import { characterDataContext } from '../CharacterDetails'
import CharacterDetailsObjectKeyValue from './CharacterDetailsObjectKeyValue'

function Rank() {

    const characterData = useContext(characterDataContext)

    const rank = Object.entries(characterData.rank || {})
    return (



        <CharacterDetailsObjectKeyValue data={rank} >
            <h2> RANK </h2>
        </CharacterDetailsObjectKeyValue>



    )
}

export default Rank