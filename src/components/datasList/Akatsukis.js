import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { commonFunctionForList } from '../../helper/generalHelper'
import { postsContext } from '../FetchData'

function Akatsukis() {
    const { akatsuki } = useContext(postsContext)
    //  console.log(posts);

    return (
        <div>

            <ul>
                {akatsuki && akatsuki.map(post => (

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



export default Akatsukis