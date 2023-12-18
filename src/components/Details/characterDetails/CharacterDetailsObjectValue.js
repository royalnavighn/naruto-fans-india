import React from 'react'
import { SpanText } from './JutsuAndNatureType';


function CharacterDetailsObjectValue({ data, children }) {


    const datas = Object.entries(data)

    console.log(data);


    return (

        <SpanText>
            {
                Array.isArray(data) ?
                    datas.map(([key, value] = datas) => (
                        value + ',' + '\xa0\xa0\xa0\xa0'
                    )
                    ) : Object.values(data)
            }
        </SpanText>

    )
}

export default CharacterDetailsObjectValue