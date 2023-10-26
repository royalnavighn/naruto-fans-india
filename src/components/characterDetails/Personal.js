import React, { useContext } from 'react'
import { characterDataContext } from '../CharacterDetails'
import CharacterDetailsObjectKeyValue from './CharacterDetailsObjectKeyValue'

function Personal() {
    const characterData = useContext(characterDataContext)

    const personal = Object.entries(characterData.personal || {})
    return (


            <CharacterDetailsObjectKeyValue data={personal}  >
                <h2> PERSONAL </h2>
            </CharacterDetailsObjectKeyValue>



    )
}

export default Personal