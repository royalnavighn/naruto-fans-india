import React, { useContext } from 'react'
import { characterDataContext } from '../../CharacterDetails'
import CharacterDetailsObjectValue from './CharacterDetailsObjectValue'



function JutsuAndNatureType() {

    const characterData = useContext(characterDataContext)

    const jutsu = characterData.jutsu
    const nature = characterData.natureType
    return (

        <div className='jutsu-and-naturetype'>

            {jutsu &&
                <div className='jutsu'>
                    <h2>Jutsu</h2>
                    <CharacterDetailsObjectValue data={jutsu} />
                </div>
            }
            {nature &&
                <div className='naturetype'>
                    <h2>Nature Type</h2>
                    <CharacterDetailsObjectValue data={nature} />
                </div>
            }
        </div >

    )
}

export default JutsuAndNatureType