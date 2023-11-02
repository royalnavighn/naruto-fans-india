import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { commonFunctionForList } from '../../helper/generalHelper'
import { postsContext } from '../FetchData'

function CharacterList() {

    const {characters} = useContext(postsContext)

    //console.log(posts.characters);

    return (


        <div>
            <ul>
                {characters && characters.map(post => (

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

export default CharacterList