import React from 'react'
import { useContext } from 'react'
import { characterDataContext } from '../CharacterDetails'
import CharacterDetailsObjectKeyValue from './CharacterDetailsObjectKeyValue'

function Debut() {
  const characterData = useContext(characterDataContext)
  let debut = Object.entries(characterData.debut || {})
  return (



    <CharacterDetailsObjectKeyValue data={debut} >
      DEBUT
    </CharacterDetailsObjectKeyValue>


  )
}

export default Debut