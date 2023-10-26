import React, { useContext } from 'react'
import CharacterDetails, { characterDataContext } from '../CharacterDetails'
import CharacterDetailsArray from './CharacterDetailsArray'
import CharacterDetailsObjectValue from './CharacterDetailsObjectValue'

function Tools() {

  const characterData = useContext(characterDataContext)

  const tools = characterData.tools
  return (

    <CharacterDetailsArray data={tools}>
      TOOLS
    </CharacterDetailsArray>

  )
}

export default Tools