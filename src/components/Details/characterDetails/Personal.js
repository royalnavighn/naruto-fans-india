import React, { useContext } from 'react'
import { characterDataContext } from '../../CharacterDetails'

const Personal = () => {

    const { personal } = useContext(characterDataContext)


    return (
        <div className='personal-details'>
            <h2> Personal Details </h2>
            {personal.birthdate &&
                <>
                    <div className='birthday'>
                    <span style={{ fontWeight: '800' }}>Birth Day : </span> <span>{personal.birthdate}</span>
                    </div> </>
            }

            {personal.sex &&
                < div className='sex'>
                     <span style={{ fontWeight: '800' }}>Sex  : </span>
                    <span>{personal.sex}</span>
                </div>
            }

            {
                personal.age && Object.values(
                    personal.age).length ?
                    (
                        <div className='age'>
                            <p>Age</p>
                            <p>{personal.age && Object.values(
                                personal.age).length ?
                                (Object.entries(personal.age).map(([key, value]) => (
                                    <p key={key}>  <span style={{ fontWeight: '800' }}>{key}</span> : <span>{value}</span>  <br />  </p>

                                ))) : ''}

                            </p>
                        </div>
                    )
                    : ''
            }

            {
                personal.bloodType &&
                <div className='personal-details-blood-type'>
                    <p>blood Type</p>
                    <p>{personal.bloodType}</p>
                </div>
            }
        </div >
    );
}

export default Personal