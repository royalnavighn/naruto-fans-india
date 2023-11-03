import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import SearchDataResult, { filteredData } from '../../../helper/SearchDataResult';
import { kekkeiGenkaiCharacterPostsContext } from './KekkeiGenkaiCharacterList'

function KekkeiGenkaiCharacters() {

    const { characters } = useContext(kekkeiGenkaiCharacterPostsContext);

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

export default KekkeiGenkaiCharacters