import React, { useContext } from 'react'
import { characterDataContext } from '../CharacterDetails'
import CharacterDetailsObjectValue from './CharacterDetailsObjectValue'

function Tools() {

  const characterData = useContext(characterDataContext)

  const tools = characterData.tools
  return (

    <CharacterDetailsObjectValue data={tools} >
      TOOLS
    </CharacterDetailsObjectValue>


  )
}

export default Tools