/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { urlOfDb } from "../helper/constants";
import { SelectedValueContext } from "./ContainerComponents";
import { PaginationArray } from "../helper/generalHelper";
import "../assets/css/pagination.css";
import { styled } from "styled-components";
import vacantImage from "../assets/images/placeholder.webp";
import { useEntireData } from "../App";

const Header2Content = styled.h4`
  font-family: "Permanent Marker", cursive;
`;

function CharacterCards() {
  let loadMore = 100;
  const [fetchData, setFetchData] = useState({
    characters: [],
    totalCharacters: 0,
  });

  const entireData = useEntireData();
  const { clan, village, kekkeiGenkai, tailedBeast, team } =
    useContext(SelectedValueContext);

  const [filteredArray, setFilteredArray] = useState([]);

  const url = urlOfDb;
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let response;
      if (
        !clan.length &&
        !village.length &&
        !kekkeiGenkai.length &&
        !tailedBeast.length &&
        !team.length
      ) {
        try {
          response = await axios.get(
            `${url}/character?page=${pageNumber}&limit=${loadMore}`
          );
        } catch (err) {
          console.log(err);
        }
      } else {
        response = entireData;
      }

      setLoading(false);

      setFetchData(response ? response.data : "");
    };
    fetchData();
  }, [
    loadMore,
    url,
    clan,
    village,
    kekkeiGenkai,
    tailedBeast,
    team,
    pageNumber,
  ]);
  console.log(vacantImage);

  useEffect(() => {
    setFilteredArray(
      (fetchData.characters &&
        fetchData.characters.filter(
          (character) =>
            (clan.length && character.personal?.clan === clan) ||
            (village.length && Array.isArray(character.personal?.affiliation)
              ? character.affiliation?.village.includes(village)
              : character.personal?.affiliation === village) ||
            (kekkeiGenkai.length &&
            Array.isArray(character.personal?.kekkeiGenkai)
              ? character.personal?.kekkeiGenkai.includes(kekkeiGenkai)
              : character.personal?.kekkeiGenkai === kekkeiGenkai) ||
            (tailedBeast.length &&
              (character.personal?.tailedBeast
                ? character.personal?.tailedBeast.includes(tailedBeast)
                : character.personal?.tailedBeast === tailedBeast)) ||
            (team.length && Array.isArray(character.personal?.team)
              ? character.personal?.team.includes(team)
              : character.personal?.team === team)
        )) ||
        null
    );
  }, [fetchData.characters, clan, village, kekkeiGenkai, tailedBeast, team]);

  const handleClick = (page) => {
    setPageNumber(page);

    setActivePage((prevActivePage) => (prevActivePage === page ? null : page));
  };

  let characterArray = filteredArray.length
    ? filteredArray
    : fetchData.characters;

  let pagination = PaginationArray(fetchData.totalCharacters, loadMore);

  console.log(characterArray);

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
      ) : (
        <>
          {characterArray.length > 1000 ? (
            <h2>No Characters Found</h2>
          ) : (
            <>
              {!loading && !filteredArray.length && (
                <section className="pagination">
                  <div id="wrapper">
                    <ul id="pagination">
                      {pagination.map((page, i) => (
                        <li key={i}>
                          {" "}
                          <a
                            className={page === activePage ? "active" : ""}
                            onClick={() => handleClick(page)}
                          >
                            {" "}
                            <span className="discription"> {page} </span>{" "}
                          </a>{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              <ul className="cards">
                {characterArray &&
                  characterArray.map((post, index) => (
                    <li className="cards__item" key={index}>
                      <Link
                        to={{
                          pathname: "details/",
                          search: `?name=${post.name}&&id=${post.id}`,
                        }}
                        state={{ post }}
                      >
                        <div className="card" style={{ width: "18rem" }}>
                          <div className="card__image">
                            {post.images.length  ? (
                              <Slider autoplay={true} autoplaySpeed={1000}>
                                {post.images.map((postImage, i) => (
                                  <div key={i}>
                                    <img
                                      src={postImage ? postImage : vacantImage}
                                      className="card-img-top"
                                      alt={post.name + i}
                                    />
                                  </div>
                                ))}
                              </Slider>
                            ) : (
                              <img
                                src={vacantImage}
                                className="card-img-top"
                                alt={post.name}
                              />
                            )}
                          </div>
                          <div className="card__content">
                            <Header2Content> {post.name} </Header2Content>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>

              {!loading && !filteredArray.length && (
                <section className="pagination">
                  <div id="wrapper">
                    <ul id="pagination">
                      {pagination.map((page, i) => (
                        <li key={i}>
                          {" "}
                          <a
                            className={page === activePage ? "active" : ""}
                            onClick={() => handleClick(page)}
                          >
                            {" "}
                            <span className="discription"> {page} </span>{" "}
                          </a>{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default CharacterCards;
