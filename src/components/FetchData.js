import axios from 'axios'
import React, { useState, useEffect } from 'react'

function FetchData() {
    const [post, setPost] = useState({})

    useEffect(() => {
        axios
            .get('https://narutodb.xyz/api/character')
            .then(res => {
                console.log(res.data)
                setPost(res.data)
            })
            .catch(err => { console.log('error') })
    })

    return (
        <div>FetchData</div>
    )
}

export default FetchData