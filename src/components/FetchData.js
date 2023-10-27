import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import CharacterList from './datasList/CharacterList'



export const postsContext = React.createContext()

function FetchData() {
    const [posts, setPosts] = useState({})

    const baseurl = 'https://www.narutodb.xyz/api/character?page=1&limit=1500'

    useEffect(() => {
        axios
            .get(`${baseurl}`)
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch(err => { console.log('error') })

    }, []);

console.log(posts)

    return (

        <postsContext.Provider value={posts} >
            <CharacterList />
        </postsContext.Provider>
    )
}

export default FetchData