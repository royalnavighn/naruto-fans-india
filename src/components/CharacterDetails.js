import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Debut from './Details/characterDetails/Debut';
import Family from './Details/characterDetails/Family';
import JutsuAndNatureType from './Details/characterDetails/JutsuAndNatureType';
import NameAndImage from './Details/characterDetails/NameAndImage';
import OtherDetails from './Details/characterDetails/OtherDetails';
import Personal from './Details/characterDetails/Personal';
import { urlOfDb } from '../helper/constants';


export const characterDataContext = React.createContext()

function CharacterDetails() {

    const { id } = useParams();

    const [characterData, setCharacterData] = useState(null);

    const baseurl = urlOfDb
    //
    const character = async () => {
        const response = await axios.get(`${baseurl}/character/${id}`);
        return response.data;
    };

    useEffect(() => {
        character().then(setCharacterData);
    }, [id]);

    if (!characterData) {
        return <div>Loading...</div>;
    }


    return (


        <div>
            <characterDataContext.Provider value={characterData} >
                {/* <NameADataFetchndImag /> */}

                <Personal />

                <Family />

                <JutsuAndNatureType />

                <OtherDetails />


                <Debut />
            </characterDataContext.Provider>



        </div>
    );
}

export default CharacterDetails