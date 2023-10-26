import React from 'react'
import { Children } from 'react'

function CharacterDetailsObjectValue({ data, children }) {
    return (
        <div>

            {data ?
                <>
                    <h2>{children}</h2>

                    {
                        data?.map(([key, value] = data) => { return <> {value + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' } , </> })
                    }
                </>
                : ''}
        </div>




    )
}

export default CharacterDetailsObjectValue