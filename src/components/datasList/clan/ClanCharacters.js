import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import SearchDataResult, { filteredData } from '../../../helper/SearchDataResult'
import { clanCharacterPostsContext } from './ClanCharacterList'

function ClanCharacters() {
    const { characters } = useContext(clanCharacterPostsContext)

    const { searchData } = SearchDataResult()

    const data = filteredData(searchData, characters)


    return (
        <div>
            <ul>
                {data && data.map(post => (

                    <li key={post.id}>
                        <Link to={`${post.id}/${post.name}`} >
                            <h4>
                                {post.name}
                            </h4>
                            {post.images?.map(postImage => <img src={postImage} alt={post.name} />)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ClanCharacters