import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import Akatsukis from '../components/datasList/Akatsukis'
import CharacterList from '../components/datasList/CharacterList'
import ClanList from '../components/datasList/clan/ClanList'
import KaraLIsts from '../components/datasList/KaraLIsts'
import KekkeiGenkaiList from '../components/datasList/kekkei-genkai/KekkeiGenkaiList'
import TailedBeasts from '../components/datasList/TailedBeasts'
import TeamList from '../components/datasList/teams/TeamList'
import VillageLIst from '../components/datasList/village/VillageLIst'
import { urlOfDb } from './constants'



export const SetCharacterUrlAndOptionData = (selected, dataPerPage) => {

    const [optionData, setOptionData] = useState('')
    const [characterUrl, setCharacterUrl] = useState()
    const url = urlOfDb
    useEffect(() => {
        if (typeof (selected) !== 'undefined') {
            setOptionData(selected)
            setCharacterUrl(`${url}/${optionData}?page=1&limit=${dataPerPage}`)
        }
    }, [optionData, selected, dataPerPage])

    return (

        { optionData, characterUrl }

    )


}





const initial = ''

const reducer = (state, action) => {

    switch (action.type) {
        case 'character':
            return {

                component: <CharacterList />
            };
        case 'clan':
            return {

                component: <ClanList />
            };
        case 'village':
            return {

                component: <VillageLIst />
            };
        case 'kekkei-genkai':
            return {

                component: <KekkeiGenkaiList />
            };
        case 'tailed-beast':
            return {

                component: <TailedBeasts />
            };
        case 'team':
            return {

                component: <TeamList />
            };
        case 'kara':
            return {

                component: <KaraLIsts />
            };
        case 'akatsuki':
            return {

                component: <Akatsukis />
            };
        default:
            return state
    }

}


function DataFilterHelper(optionData, characterUrl) {

    const [state, dispatch] = useReducer(reducer, initial);
    const [posts, setPosts] = useState({})


    useEffect(() => {
        dispatch({ type: optionData })
        axios
            .get(`${characterUrl}`)
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => { console.log('error') })

    }, [characterUrl]);


    const stateData = state.component

    return (



        { posts, stateData }




    )
}

export default DataFilterHelper