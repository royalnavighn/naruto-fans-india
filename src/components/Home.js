import React from 'react'
import Dropdown from './Dropdown'
import SearchBox from './SearchBox'

function Home() {
    return (
        <div>
            <Dropdown placeHolder="Select..." />
            <SearchBox />
        </div>
    )
}

export default Home