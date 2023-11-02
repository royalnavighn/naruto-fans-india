import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { postsContext } from '../FetchData'

function KaraLIsts() {
    const {kara} = useContext(postsContext)

    // console.log(posts);

    return (
        <div>
             <ul>
                {kara && kara.map(post => (

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

export default KaraLIsts