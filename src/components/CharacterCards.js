import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { urlOfDb } from '../helper/constants';
import { SelectedValueContext } from './ContainerComponents';
import { PaginationArray } from '../helper/generalHelper';

import '../assets/css/pagination.css'





function CharacterCards() {

    const [loadMore, setLoadMore] = useState(100);
    const [fetchData, setFetchData] = useState({ characters: [], totalCharacters: 0 });
    const { clan, village, kekkeiGenkai, tailedBeast, team } = useContext(SelectedValueContext)
    const [filteredArray, setFilteredArray] = useState([]);
    const url = urlOfDb
    const [loading, setLoading] = useState(true);
    const [activePage, setActivePage] = useState(1);
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true);
            let response;
            if (!clan.length && !village.length && !kekkeiGenkai.length && !tailedBeast.length && !team.length) {
                response = await axios.get(`${url}/character?page=${pageNumber}&limit=${loadMore}`);


            } else {

                response = await axios.get(`${url}/character?page=1&limit=1431`);

            }

            setTimeout(function () { setLoading(false); }, 1800)
            setFetchData(response ? response.data : '');

        }
        fetchData();
    }, [loadMore, url, clan, village, kekkeiGenkai, tailedBeast, team, pageNumber]);



    useEffect(() => {
        setFilteredArray(
            (fetchData.characters &&
                fetchData.characters.filter(character =>
                    (clan && character.personal?.clan === clan) ||
                    (village && Array.isArray(character.personal?.affiliation) ? character.affiliation?.village.includes(village) : character.personal?.affiliation === village) ||
                    (kekkeiGenkai && Array.isArray(character.personal?.kekkeiGenkai) ? character.personal?.kekkeiGenkai.includes(kekkeiGenkai) : character.personal?.kekkeiGenkai === kekkeiGenkai) ||
                    (tailedBeast && character.personal?.tailedBeast ? character.personal?.tailedBeast.includes(tailedBeast) : character.personal?.tailedBeast === tailedBeast ) ||
                    (team && Array.isArray(character.personal?.team) ? character.personal?.team.includes(team) : character.personal?.team === team)
                )) ||
            null
        );
    }, [fetchData.characters, clan, village, kekkeiGenkai, tailedBeast, team]);

    const handleClick = (page) => {
        setPageNumber(page)

        setActivePage((prevActivePage) => (prevActivePage === page ? null : page));

    };

    let characterArray = filteredArray.length ? filteredArray : fetchData.characters;


    let pagination = PaginationArray(fetchData.totalCharacters, loadMore)


    return (


        <>
            {loading ? (
                <>
                    <div className="eye">
                        <div className="black-outline">
                            <div className="tear first" />
                            <div className="tear second" />
                            <div className="tear third" />
                        </div>
                        <div className="pupil" />
                    </div>


                </>
            ) : <>


                {!loading &&
                    ((filteredArray.length >= 100) &&
                        < section className='pagination'>

                            <div id="wrapper">

                                <ul id="pagination">

                                    {pagination.map((page, i) => (<li key={i} > <a key={i} className={page === activePage ? 'active' : ''} onClick={() => handleClick(page)} > {page} </a> </li>))}

                                </ul>

                            </div>
                        </section>)
                }

                <ul className='cards'>

                    {characterArray && characterArray.map((post, index) => (
                        <>

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


                        </>
                    ))
                    }
                </ul>

                {!loading &&
                    ((characterArray.length >= 100) &&
                        < section className='pagination'>

                            <div id="wrapper">

                                <ul id="pagination">

                                    {pagination.map((page, i) => (<li key={i} > <a key={i} className={page === activePage ? 'active' : ''} onClick={() => handleClick(page)} > {page} </a> </li>))}

                                </ul>

                            </div>
                        </section>)
                }


            </>
            }
        </>
    )
}

export default CharacterCards

