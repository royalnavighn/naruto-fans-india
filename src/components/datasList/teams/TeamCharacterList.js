import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { GetIdDataAndCharacterUrl, GetPostsReturnData } from '../../../helper/generalHelper';
import TeamCharacters from './TeamCharacters';

export const teamCharacterPostsContext = React.createContext()

function TeamCharacterList() {



    const { id } = useParams();
    const team = 'team';
    const { characterUrl } = GetIdDataAndCharacterUrl(id, team);
    const { showPost, posts, getApi } = GetPostsReturnData(characterUrl)


    useEffect(() => {
        getApi();
    }, [characterUrl]);


    return (
        <div>

            <teamCharacterPostsContext.Provider value={posts}>
                {showPost && <TeamCharacters />}
            </teamCharacterPostsContext.Provider>

        </div>
    )
}

export default TeamCharacterList