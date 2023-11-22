import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import { urlOfDb } from '../helper/constants'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SelectedValueContext } from './ContainerComponents';

function CharacterCards() {
    const [characterUrl, setCharacterUrl] = useState();
    const [fetchData, setFetchData] = useState('');
    const url = urlOfDb;

    const { clan, village, kekkeiGenkai, tailedBeast, team } = useContext(SelectedValueContext)
    //console.log(clan, village, kekkeiGenkai, tailedBeast, team);
    const [loadMore, setLoadMore] = useState(100);




    useEffect(() => {
        setCharacterUrl(`${url}/character`)
    }, [url])


    const handleClick = () => {
        setLoadMore(prevState => prevState + loadMore)

    }


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${url}/character?page=1&limit=${loadMore}`);
            setFetchData(response.data);
        };

        fetchData();

    }, [loadMore, url]);

    const { characters } = fetchData;


    return (


        <>

            {characters && characters.map((post, index) => (
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


        </>
    )
}

export default CharacterCards

