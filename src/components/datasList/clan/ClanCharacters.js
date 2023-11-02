import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { clanCharacterPostsContext } from './ClanCharacterList'

function ClanCharacters() {
    const {characters} = useContext(clanCharacterPostsContext)
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

export default ClanCharacters