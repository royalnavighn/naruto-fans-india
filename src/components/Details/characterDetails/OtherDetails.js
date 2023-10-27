import React, { useContext } from 'react';
import { characterDataContext } from '../../CharacterDetails';
import CharacterDetailsObjectValue from './CharacterDetailsObjectValue';
import { getRankSectionByRankDetails } from '../../../helper/sectionContentHelper';

function OtherDetails() {

    const { tools, uniqueTraits, rank, personal: otherPersonalDetails } = useContext(characterDataContext);


    const { kekkeiGenkai, kekkeiMōra, tailedBeast, classification, occupation, affiliation, partner, clan, titles } = otherPersonalDetails;

    let rankSection = getRankSectionByRankDetails(rank);


    return (
        <div className='other-details'>

            {tools &&
                <div className='tools'>
                    <h2>Tools</h2>
                    <CharacterDetailsObjectValue data={tools} />
                </div>

            }
            {uniqueTraits &&
                <div className='uniquetraits'>
                    <h2>Unique Traits</h2>
                    <CharacterDetailsObjectValue data={uniqueTraits} />
                </div>

            }
            {rankSection &&
                <div className='uniquetraits'>
                    <h2>Rank</h2>

                    <div dangerouslySetInnerHTML={{
                        __html: rankSection

                    }} />

                </div>

            }
            {kekkeiGenkai &&
                <div className='kekkeiGenkai'>
                    <h2>KekkeiGenkai</h2>
                    <CharacterDetailsObjectValue data={kekkeiGenkai} />
                </div>

            }
            {kekkeiMōra &&
                <div className='KekkeiMōra'>
                    <h2>KekkeiMōra</h2>

                    <CharacterDetailsObjectValue data={kekkeiMōra} />
                </div>

            }

            {classification &&
                <div className='classification'>
                    <h2>Classification</h2>
                    <CharacterDetailsObjectValue data={classification} />
                </div>

            }
            {tailedBeast &&
                <div className='tailedBeast'>
                    <h2>TailedBeast</h2>
                    <CharacterDetailsObjectValue data={tailedBeast} />
                </div>

            }
            {occupation &&
                <div className='occupation'>
                    <h2>Occupation</h2>
                    <CharacterDetailsObjectValue data={occupation} />
                </div>

            }
            {affiliation &&
                <div className='affiliation'>
                    <h2>Affiliation</h2>
                    <CharacterDetailsObjectValue data={affiliation} />
                </div>

            }
            {partner &&
                <div className='partner'>
                    <h2>Partner</h2>
                    <CharacterDetailsObjectValue data={partner} />
                </div>

            }

            {clan &&
                <div className='clan'>
                    <h2>Clan</h2>
                    <CharacterDetailsObjectValue data={clan} />
                </div>

            }
            {titles &&
                <div className='titles'>
                    <h2>Titles</h2>
                    <CharacterDetailsObjectValue data={titles} />
                </div>

            }


        </div>
    )
}

export default OtherDetails