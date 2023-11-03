import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SearchDataResult() {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const searchData = searchParams.get('name')

    return (
        { searchData }
    )
}

export const filteredData = (searchData, datas) => {
    return (
        searchData != null && searchData.length > 0
            ? datas.filter((data) => {
                return data.name.toLowerCase().includes(searchData.toLowerCase());
            })
            : datas
    )
}