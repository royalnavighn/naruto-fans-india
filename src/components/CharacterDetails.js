import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Debut from './characterDetails/Debut';
import Family from './characterDetails/Family';
import Jutsu from './characterDetails/Jutsu';
import NameAndImage from './characterDetails/NameAndImage';
import NatureType from './characterDetails/NatureType';
import Personal from './characterDetails/Personal';
import Rank from './characterDetails/Rank';
import Tools from './characterDetails/Tools';
import UniqueTraits from './characterDetails/UniqueTraits';


export const characterDataContext = React.createContext()

function CharacterDetails() {

    const { id } = useParams();

    const character = async () => {
        const response = await axios.get(`https://www.narutodb.xyz/api/character/${id}`);
        return response.data;
    };

    const [characterData, setCharacterData] = useState(null);

    useEffect(() => {
        character().then(setCharacterData);
    }, [id]);

    if (!characterData) {
        return <div>Loading...</div>;
    }

    console.log(characterData)

    return (


        <div>
            <characterDataContext.Provider value={characterData} >
                <NameAndImage />
                <Debut />
                <Jutsu />
                <Tools />
                <Family />
                <NatureType />
                <Personal />
                <UniqueTraits />
                <Rank />
            </characterDataContext.Provider>



        </div>
    );
}

export default CharacterDetails