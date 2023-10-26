import React, { useContext } from 'react'
import { characterDataContext } from '../CharacterDetails'
import CharacterDetailsObjectKeyValue from './CharacterDetailsObjectKeyValue'
import CharacterDetailsObjectValue from './CharacterDetailsObjectValue'

function Jutsu() {

  const characterData = useContext(characterDataContext)
  const jutsu = Object.entries(characterData.jutsu || {})

  return (

    <CharacterDetailsObjectValue data={jutsu} > JUTSU </CharacterDetailsObjectValue>

  )
}

export default Jutsu