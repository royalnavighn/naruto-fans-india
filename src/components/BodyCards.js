import React, { useContext } from 'react'
import { Link, Route } from 'react-router-dom'
import { postsContext } from './FetchData'
import SingleCharacter from './SingleCharacter'
function BodyCards() {
    const posts = useContext(postsContext)

    return (
        <ul>

            {posts.characters?.map(post => {
                return (

                    <li key={post.id}>
                        <h4>
                            {post.name}
                        </h4>
                        {post.images?.map(postImage => <img src={postImage} />)}


                    </li>


                )
            })}
            <SingleCharacter />
        </ul>
    )
}

export default BodyCards