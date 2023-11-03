import React, { useState } from 'react'
import { useSearchParams,  Navigate, useNavigate } from 'react-router-dom'

function SearchBox() {

    const [searchParams, setSearchParams] = useSearchParams()

    const [searchInput, setSearchInput] = useState(searchParams.get('name') || '')
    const navigate = useNavigate();

    const handlechange = (e) => {
        e.preventDefault();
        const input = e.target.value
        setSearchInput(input)
        setSearchParams({ ...searchParams, name: input })
        navigate(`?name=${input}`)
    }


    return (
        <div>
            <input
                type="search"
                placeholder="Search here"
                onChange={handlechange}
                value={searchInput} />

        </div>
    )
}

export default SearchBox