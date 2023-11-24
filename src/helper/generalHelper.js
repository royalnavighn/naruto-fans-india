import axios from "axios";
import { useEffect, useState } from "react";
import { urlOfDb } from "./constants";


export const typeChecker = (value) => {

    if (typeof value === 'object' && value !== null) {
        return 'object';
    }
    else if (typeof value === 'array' && value !== null) {
        return 'array';
    }
    else if (typeof value !== 'string' && value !== null) {
        return 'string';
    }
    else {

        if (value !== null) {
            return typeof value;
        }
        else {
            return false;
        }

    }

}




export const GetIdDataAndCharacterUrl = (id, selectName) => {


    const [idData, setIdData] = useState('')
    const [characterUrl, setCharacterUrl] = useState()
    const [select, setSelect] = useState('')

    useEffect(() => {
        if (typeof (id) !== 'undefined') {
            setSelect(selectName)
            setIdData(id)
            setCharacterUrl(`${urlOfDb}/${select}/${id}?page=1&limit=200`)
        }
    }, [idData])


    console.log(idData, select, characterUrl)

    return (

        { characterUrl }

    )

}


export const GetPostsReturnData = (characterUrl) => {

    const [posts, setPosts] = useState()
    const [showPost, setShowPost] = useState(false)

    const getApi = async () => {
        await axios
            .get(`${characterUrl}`)
            .then(res => {
                setPosts(res.data)
                setShowPost(true);
            })
            .catch(err => { console.log('error') })
    }


    return (

        { showPost, posts, getApi }
    )

}



export const PaginationArray = (totalCharacters, loadmore) => {

    let totalPageNumber = Math.trunc(totalCharacters / loadmore)

    let pagination = [];

    totalPageNumber = (totalCharacters % loadmore !== 0) ? totalPageNumber + 1 : totalPageNumber

    for (let i = 1; i <= totalPageNumber; i++) {
        pagination.push(i);
    }

    return (
        pagination
    )

}