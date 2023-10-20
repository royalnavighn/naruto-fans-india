import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import BodyCards from './BodyCards';




export const postsContext = React.createContext()
export const urlContext = React.createContext()
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

    return (
        <div>
            <urlContext.Provider value={baseurl}>
                <postsContext.Provider value={posts} >
                    <BodyCards />
                </postsContext.Provider>
            </urlContext.Provider>
        </div >
    )
}

export default FetchData