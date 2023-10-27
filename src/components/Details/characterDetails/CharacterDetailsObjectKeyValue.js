import React, { Children } from 'react'
import { json } from 'react-router-dom'

function CharacterDetailsObjectKeyValue({ data, children }) {

    console.log(children)

    return (
        <div>


            {data ?
                <>
                    <h2> {children}</h2>

                   {data.map(([key, value] = data) => {
                        return (
                            <>
                                <strong>{key} </strong>

                                {value.length ?
                                    (
                                        <>
                                            {' : ' + value} <br /><br /> <br />
                                        </>
                                    )
                                    : <> {

                                        Object.entries(value).map(([key, value]) => {

                                             return (

                                                <p>  {key} : {value}  <br />  </p>

                                            )
                                        })

                                    }
                                    </>
                                }
                            </>
                        )
                    })
                    }

                </>

                : null}


        </div>
    )
}

export default CharacterDetailsObjectKeyValue