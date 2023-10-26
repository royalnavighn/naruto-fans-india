import React, { Children } from 'react'

function CharacterDetailsArray({ data, children }) {
    return (
        <div>

            {data ?
                <>
                    <h2>{children} </h2>
                    {data?.map(dataValue => (<> {dataValue + ' '}  </>))}
                </>
                : null}

        </div>
    )
}

export default CharacterDetailsArray