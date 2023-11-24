import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { urlOfDb } from '../helper/constants';
import { SelectedValueContext } from './ContainerComponents';



function CharacterCards() {

    const [loadMore, setLoadMore] = useState(100);
    const [fetchData, setFetchData] = useState({ characters: [], totalCharacters: 0 });
    const { clan, village, kekkeiGenkai, tailedBeast, team } = useContext(SelectedValueContext)
    const [filteredArray, setFilteredArray] = useState([]);
    const url = urlOfDb
    const [loading, setLoading] = useState(true);
    // console.log(clan, village, kekkeiGenkai, tailedBeast, team);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)

                let response;
                if (!clan.length && !village.length && !kekkeiGenkai.length && !tailedBeast.length && !team.length) {
                   // console.log('inside if statement');
                    response = await axios.get(`${url}/character?page=1&limit=${loadMore}`);

                } else {

                    response = await axios.get(`${url}/character?page=1&limit=1431`);
                }
                setFetchData(response ? response.data : '');

            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [loadMore, url, clan, village, kekkeiGenkai, tailedBeast, team]);

    // console.log(tailedBeast);

    useEffect(() => {
        setFilteredArray(
            (fetchData.characters &&
                fetchData.characters.filter(character =>
                    (clan && character.personal?.clan === clan) ||
                    (village && character.personal?.affiliation === village) ||
                    (kekkeiGenkai && character.personal?.kekkeiGenkai === kekkeiGenkai) ||
                    (tailedBeast && character.personal?.tailedBeast && character.personal?.tailedBeast.includes(tailedBeast)) ||
                    (team && character.personal?.team === team)
                )) ||
            null
        );


    }, [fetchData.characters, clan, village, kekkeiGenkai, tailedBeast, team]);

    const handleClick = () => {
        setLoadMore(prevLoadMore => prevLoadMore + loadMore);
    };

    let characterArray = filteredArray.length ? filteredArray : fetchData.characters;

    return (


        <>
            {loading ? (<p> loading .... </p>) : <>
                {characterArray && characterArray.map((post, index) => (
                    <li className='cards__item' key={index} >
                        <Link to={`${post.id}/${post.name}`} >

                            <div className='card' style={{ width: "18rem" }} >

                                <div className='card__image'>
                                    <Slider
                                        autoplay={true}
                                        autoplaySpeed={1000}>
                                        {post.images.map((postImage, i) => (
                                            <div key={i}>
                                                <img src={postImage} className="card-img-top" alt={post.name + i} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                <div className='card__content'>
                                    <h2 className='card__title'> {post.name} </h2>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))
                }
                <div >
                    <button onClick={handleClick}  >Load More </button>
                </div>

            </>}
        </>
    )
}

export default CharacterCards

