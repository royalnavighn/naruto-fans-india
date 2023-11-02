import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { commonFunctionForList } from '../../../helper/generalHelper'
import { postsContext } from '../../FetchData'




function ClanList() {
    const { clans } = useContext(postsContext)

    const { selected } = useParams()

    // const { clans } = posts

    return (


        <div>
            clan

            {/* {commonFunctionForList(clans, selected)} */}


            <ul>
                {clans && clans.map(post => (

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

export default ClanList