import React, { useContext } from 'react'
import { characterDataContext } from '../../CharacterDetails'

function UniqueTraits() {
  const characterData = useContext(characterDataContext)
  const uniqueTraits = (characterData.uniqueTraits)
  return (
    <div>
      {uniqueTraits ?
        <>
          <h2>Unique Traits</h2>
          <div>  {uniqueTraits.map(uniqueTraits => (<p>{uniqueTraits}</p>))}</div>
        </> : null
      }
    </div>
  )
}

export default UniqueTraits