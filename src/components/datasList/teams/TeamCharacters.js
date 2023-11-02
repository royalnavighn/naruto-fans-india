import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { teamCharacterPostsContext } from './TeamCharacterList'

function TeamCharacters() {

    const { characters } = useContext(teamCharacterPostsContext)
 //   console.log(characters)

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

export default TeamCharacters