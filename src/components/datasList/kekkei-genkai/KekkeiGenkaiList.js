import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { commonFunctionForList } from '../../../helper/generalHelper'
import SearchDataResult, { filteredData } from '../../../helper/SearchDataResult'
import { postsContext } from '../../FetchData'

function KekkeiGenkaiList() {
    const { kekkeigenkai } = useContext(postsContext)

    const { selected } = useParams()


    const { searchData } = SearchDataResult()

    const data = filteredData(searchData, kekkeigenkai)


    return (
        <div>


            <ul>
                {data && data.map(post => (

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


export default KekkeiGenkaiList