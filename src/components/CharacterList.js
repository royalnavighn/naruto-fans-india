import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { postsContext } from './FetchData'

function CharacterList() {

    const posts = useContext(postsContext)

    return (
        <div>
            <ul>
                {posts.characters?.map(post => {
                    return (
                        <li key={post.id}>
                            <Link to={`/character/${post.id}`} >
                                <h4>
                                    {post.name}
                                </h4>
                                {post.images?.map(postImage => <img src={postImage} />)}
                            </Link>
                        </li>



                    )
                })}
            </ul >
        </div >
    )
}

export default CharacterList