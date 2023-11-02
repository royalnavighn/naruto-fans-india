import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetIdDataAndCharacterUrl, GetPostsReturnData } from '../../../helper/generalHelper';
import KekkeiGenkaiCharacters from './KekkeiGenkaiCharacters';

export const kekkeiGenkaiCharacterPostsContext = React.createContext()

function KekkeiGenkaiCharacterList() {

    const { id } = useParams();
    const kekkeigenkai = 'kekkei-genkai';
    const { characterUrl } = GetIdDataAndCharacterUrl(id, kekkeigenkai);
    const { showPost, posts, getApi } = GetPostsReturnData(characterUrl)


    useEffect(() => {
        getApi();
    }, [characterUrl]);


    return (
        <div>

            <kekkeiGenkaiCharacterPostsContext.Provider value={posts}>
                {showPost && <KekkeiGenkaiCharacters />}
            </kekkeiGenkaiCharacterPostsContext.Provider>

        </div>
    )
}

export default KekkeiGenkaiCharacterList