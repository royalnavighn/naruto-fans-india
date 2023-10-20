import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { urlContext } from './FetchData'


function SingleCharacter() {

    const baseurl = useContext(urlContext)
    const [postId, setPostId] = useState()
    useEffect(() => {
        axios
            .get(`${baseurl}/`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => { console.log('error') })

    }, []);

    return (
        <div>{baseurl}</div>
    )
}

export default SingleCharacter