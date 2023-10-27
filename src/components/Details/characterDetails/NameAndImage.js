import React, { useContext, useState } from 'react'
import { characterDataContext } from '../../CharacterDetails'

function NameAndImage() {

    const characterData = useContext(characterDataContext)


    // console.log(characterData)
    return (
        <>

            <h1>{characterData.name}</h1>
            {characterData.images?.map((postImage, i) => <img src={postImage} alt={characterData.name + ' image ' + i} />)}

        </>
    )
}

export default NameAndImage