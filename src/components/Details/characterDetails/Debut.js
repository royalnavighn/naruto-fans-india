import React from 'react'
import { useContext } from 'react'
import { getRankSectionByRankDetails } from '../../../helper/sectionContentHelper'
import { characterDataContext } from '../../CharacterDetails'


function Debut() {
  const {debut} = useContext(characterDataContext)
  let debutSection = getRankSectionByRankDetails(debut)
  return (


    <div>
    {debut &&
      <div className='debut'>
        <h2>Debut</h2>

        <div dangerouslySetInnerHTML={{
          __html: debutSection
        }} />

      </div>


    }
  </div>



    // <CharacterDetailsObjectKeyValue data={debut} >
    //   {debut.length > 0 ? 'DEBUT' : ''}
    // </CharacterDetailsObjectKeyValue>


  )
}

export default Debut