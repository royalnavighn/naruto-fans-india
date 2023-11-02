import React, { useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import { GetIdDataAndCharacterUrl, GetPostsReturnData } from '../../../helper/generalHelper'
import ClanCharacters from './ClanCharacters'

export const clanCharacterPostsContext = React.createContext()

function ClanCharacterList() {

    const { id } = useParams();
    const clan = 'clan';
    const { characterUrl } = GetIdDataAndCharacterUrl(id, clan);
    const { showPost, posts, getApi } = GetPostsReturnData(characterUrl)

    useEffect(() => {
        getApi();
    }, [characterUrl]);



    return (
        <div>
            <clanCharacterPostsContext.Provider value={posts}>
                {showPost && <ClanCharacters />}
            </clanCharacterPostsContext.Provider>

        </div>
    )
}

export default ClanCharacterList