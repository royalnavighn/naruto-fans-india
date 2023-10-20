import axios from 'axios'
import React, { useState, useEffect } from 'react'

function FetchData() {
    const [post, setPost] = useState({})

    useEffect(() => {
        // axios
        //     .get('https://narutodb.xyz/api/character', {
        //         mode: 'no-cors',
        //         headers: {
        //             "Content-Type": "application/json",
        //             'Access-Control-Allow-Origin': '*',
        //             'Access-Control-Allow-Methods': '*',
        //             'Access-Control-Allow-Headers': '*',
        //             'Access-Control-Allow-Credentials': true
        //         },

        //     })
        //     .then(res => {
        //         console.log(res.data)
        //         setPost(res.data)
        //     })
        //     .catch(err => { console.log('error') })





    }, []);

    return (
        <div>FetchData</div>
    )
}

export default FetchData