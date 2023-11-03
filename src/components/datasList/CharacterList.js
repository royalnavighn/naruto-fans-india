import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { commonFunctionForList } from '../../helper/generalHelper'
import SearchDataResult, { filteredData } from '../../helper/SearchDataResult'
import { postsContext } from '../FetchData'

function CharacterList() {

    const { characters } = useContext(postsContext)

    const { searchData } = SearchDataResult()

    const data = filteredData(searchData, characters)

    return (


        <div>
            <ul>
                {data && data.map((post, index) => (

                    <li key={index}>
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

export default CharacterList