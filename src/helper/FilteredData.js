import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { CharacterArrayContext } from '../components/ContainerComponents';
import { urlOfDb } from './constants'

import { GetOptionData } from './dropdownOptionFetch';

export const selectBoxOptions = React.createContext();

function FilteredData({ setClan, setVillage, setKekkeiGenkai, setTailedBeast, setTeam, type }) {
    const [fetchData, setFetchData] = useState('');
    const [dataUrl, setDataUrl] = useState('')
    const url = urlOfDb

    useEffect(() => {
        setDataUrl(`${url}/${type}?page=1&limit=1500`);
        const data = async () => {
            const response = await axios.get(dataUrl);
            return response.data;
        };
        data().then(setFetchData);
    }, [dataUrl, url, type]);

    const { clans, villages, kekkeigenkai, tailedBeasts, teams } = fetchData

    return (
        <>

            <selectBoxOptions.Provider value={fetchData}>

                {clans &&
                    <div className='clan-filter'>
                        <GetOptionData setOption={setClan} type={'clan'} > select a clan </GetOptionData>
                    </div>
                }
                {villages &&
                    <div className='village-filter'>
                        <GetOptionData setOption={setVillage} type={'village'}>select a village</GetOptionData>
                    </div>
                }
                {kekkeigenkai &&
                    <div className='kekkeigenkai-filter'>
                        <GetOptionData setOption={setKekkeiGenkai} type={'kekkeigenkai'} > select a kekkeigenkai </GetOptionData>
                    </div>
                }
                {tailedBeasts &&
                    <div className='tailedBeasts-filter'>
                        <GetOptionData setOption={setTailedBeast} type={'tailedBeasts'} >select a tailedBeast</GetOptionData>
                    </div>
                }
                {teams &&
                    < div className='team-filter'>
                        <GetOptionData setOption={setTeam} type={'teams'} >select a team</GetOptionData>
                    </div>
                }
                <br />

            </selectBoxOptions.Provider >


        </>


    )

}



export default FilteredData




export const AdvanceFilterData = ({ type }) => {

    const characterArray = useContext(CharacterArrayContext);

    const [adFilterArray, setAdfilterArray] = useState([]);

    // console.log(characterArray);

    // characterArray?.map((character) => console.log( character.personal.affiliation))





    useEffect(() => {

        switch (type) {

            case 'village':

                setAdfilterArray(
                    characterArray &&
                    characterArray?.map((character) => character.personal.affiliation && character.personal.affiliation)
                );
                break;
            case 'kekkeiGenkai':

                setAdfilterArray(
                    characterArray &&
                    characterArray?.map((character) => character.personal.kekkeiGenkai && character.personal.kekkeiGenkai)
                );
                break;

        }
    }, [type, characterArray]);
    //  console.log(adFilterArray);

    let newArray = Array.from(new Set(adFilterArray.flat()));
    console.log(newArray);


}
