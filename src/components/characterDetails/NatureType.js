import React, { useContext } from 'react'
import { characterDataContext } from '../CharacterDetails'
import CharacterDetailsArray from './CharacterDetailsArray'
import CharacterDetailsObjectValue from './CharacterDetailsObjectValue'

function NatureType() {

  const characterData = useContext(characterDataContext)
  const natureType = (characterData.natureType)

  return (


    <CharacterDetailsArray data={natureType}>
      NATURE TYPE
    </CharacterDetailsArray>

    // <CharacterDetailsObjectValue data={natureType} >
    //   NATURE TYPE
    // </CharacterDetailsObjectValue>


    // <div>

    //   {natureType ?
    //     <>
    //       <h2>Nature Type </h2>
    //       {natureType.map(naturetype => (<> {naturetype} , </>))}
    //     </>
    //     : null}

    // </div>
  )
}

export default NatureType