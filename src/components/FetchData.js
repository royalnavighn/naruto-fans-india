import axios from 'axios'
import React, { useState, useEffect, useReducer } from 'react'
import CharacterList from './datasList/CharacterList'
import { urlOfDb } from '../helper/constants'
import { useParams } from 'react-router-dom'
import ClanList from './datasList/clan/ClanList'
import VillageLIst from './datasList/village/VillageLIst'
import KekkeiGenkaiList from './datasList/kekkei-genkai/KekkeiGenkaiList'
import TailedBeasts from './datasList/TailedBeasts'
import TeamList from './datasList/teams/TeamList'
import KaraLIsts from './datasList/KaraLIsts'
import Akatsukis from './datasList/Akatsukis'
import Home from './Home'



export const postsContext = React.createContext()

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

function FetchData() {

    const [state, dispatch] = useReducer(reducer, initial);

    const { selected } = useParams();
    const [optionData, setOptionData] = useState('')
    const [posts, setPosts] = useState({})
    const [characterUrl, setCharacterUrl] = useState()
    const url = urlOfDb

    useEffect(() => {
        if (typeof (selected) !== 'undefined') {
            setOptionData(selected)
            setCharacterUrl(`${url}/${optionData}?page=1&limit=200`)
        }
    }, [optionData, selected])


    useEffect(() => {
        dispatch({ type: optionData })
        axios
            .get(`${characterUrl}`)
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => { console.log('error') })

    }, [characterUrl]);








    return (

        <postsContext.Provider value={posts} >


            {state.component}

        </postsContext.Provider>
    )
}

export default FetchData