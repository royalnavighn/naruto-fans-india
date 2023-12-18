import React from 'react'
import { useContext } from 'react'
import { getRankSectionByRankDetails } from '../../../helper/sectionContentHelper'
import { characterDataContext } from '../../CharacterDetails'
import { SubHeaderContent } from './JutsuAndNatureType'


function Debut() {
  const {debut} = useContext(characterDataContext)
  let debutSection = getRankSectionByRankDetails(debut)
  return (


    <div>
    {debut &&
      <div className='debut'>
        <SubHeaderContent>Debut</SubHeaderContent>

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