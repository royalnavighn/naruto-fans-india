import React, { useContext } from 'react'
import { characterDataContext } from '../CharacterDetails'
import CharacterDetailsObjectValue from './CharacterDetailsObjectValue'

function NatureType() {

  const characterData = useContext(characterDataContext)
  const natureType = (characterData.natureType)

  return (


    <CharacterDetailsObjectValue data={natureType} >
      NATURE TYPE
    </CharacterDetailsObjectValue>



  )
}

export default NatureType