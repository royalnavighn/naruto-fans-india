import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { GetIdDataAndCharacterUrl, GetPostsReturnData } from '../../../helper/generalHelper';
import VillageCharaters from './VillageCharaters';


export const villageCharacterPostsContext = React.createContext()

function VillageCharactersList() {


  const { id } = useParams();
  const village = 'village';
  const { characterUrl } = GetIdDataAndCharacterUrl(id, village);
  const { showPost, posts, getApi } = GetPostsReturnData(characterUrl)

  useEffect(() => {
    getApi();
  }, [characterUrl]);

  // console.log(id)

  return (
    <div>

      <villageCharacterPostsContext.Provider value={posts}>
        {showPost && <VillageCharaters />}
      </villageCharacterPostsContext.Provider>

    </div>
  )
}

export default VillageCharactersList