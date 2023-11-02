import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { postsContext } from '../../FetchData'

function TeamList() {
    const { teams } = useContext(postsContext)
    const { selected } = useParams()

    return (
        <div>
            <ul>
                {teams && teams.map(post => (

                    <li key={post.id}>
                        <Link to={`/${selected}/${post.id}/${post.name}/characters`} >
                            <h4>
                                {post.name}
                            </h4>
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}


export default TeamList