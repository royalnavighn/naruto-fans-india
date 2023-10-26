import React, { useContext } from 'react'
import { characterDataContext } from '../CharacterDetails'
import CharacterDetailsObjectKeyValue from './CharacterDetailsObjectKeyValue'

function Family() {

  const characterData = useContext(characterDataContext)
  const family = Object.entries(characterData.family || {})
  return (




    <CharacterDetailsObjectKeyValue data={family} >
      FAMILY
    </CharacterDetailsObjectKeyValue>



  )
}

export default Family