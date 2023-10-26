import React, { Children } from 'react'

function CharacterDetailsObjectKeyValue({ data, children }) {
    return (
        <div>


            {data ?
                <>
                    <h2> {children}</h2>

                        {data?.map(([key, value] = data) => {
                            return (
                                <> <strong>{key} </strong> :

                                    {Object.entries(value) ? <>  {Object.values(value + " \xa0\xa0\xa0\xa0\xa0  "    )} <br /> <br />   </> : <p>  {value + '  '  +',' } </p>}
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