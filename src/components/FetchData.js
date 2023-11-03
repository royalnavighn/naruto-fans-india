import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DataFilterHelper, { SetCharacterUrlAndOptionData } from '../helper/DataFilterHelper'


export const postsContext = React.createContext()

function FetchData() {



    const { selected } = useParams();


    const [loadMore, setLoadMore] = useState(200)


    const { optionData, characterUrl } = SetCharacterUrlAndOptionData(selected, loadMore);

    const { posts, stateData } = DataFilterHelper(optionData, characterUrl)



    return (

        <postsContext.Provider value={posts} >

            {stateData}

            <button onClick={() => setLoadMore(prevLoadMore => prevLoadMore + 200)} > Load More </button>

        </postsContext.Provider>
    )
}

export default FetchData