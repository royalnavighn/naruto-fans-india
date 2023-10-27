import React from 'react'


function CharacterDetailsObjectValue({ data, children }) {


    const datas = Object.entries(data)

    console.log(data);


    return (

        <>
            {
                Array.isArray(data) ?
                    datas.map(([key, value] = datas) => (
                        value + ',' + '\xa0\xa0\xa0\xa0'
                    )
                    ) : Object.values(data)
            }
        </>

    )
}

export default CharacterDetailsObjectValue