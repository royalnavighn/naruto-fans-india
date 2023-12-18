import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Debut from "./Details/characterDetails/Debut";
import Family from "./Details/characterDetails/Family";
import JutsuAndNatureType from "./Details/characterDetails/JutsuAndNatureType";

import OtherDetails from "./Details/characterDetails/OtherDetails";
import Personal from "./Details/characterDetails/Personal";

import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";

export const characterDataContext = React.createContext();

const HeaderContent = styled.h1`
  font-family: "Permanent Marker", cursive;
`;

function CharacterDetails(props) {
  const location = useLocation();
  const [idPost, setIdPost] = useState();
  let params = new URLSearchParams(location.search);
  let id = params.get("id");
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `https://narutodb.xyz/api/character/${id}`
      );
      setIdPost(response ? response.data : "");
    };
    fetchData();
  }, [location, id]);


  if ( !idPost) {
    return <div>Loading...</div>;
  }

  return (
    idPost && (
      <Container>
        <characterDataContext.Provider value={idPost}>
          <Row>
            <HeaderContent>{idPost.name}</HeaderContent>

            <Col>
              <Row>
                <Col>
                  <Personal />
                </Col>
                <Col xs={4}>
                  <Slider autoplay={true} autoplaySpeed={1000}>
                    {idPost.images.map((postImage, i) => (
                      <div key={i}>
                        <img
                          src={postImage}
                          className="card-img-top main"
                          alt={idPost.name + i}
                        />
                      </div>
                    ))}
                  </Slider>
                </Col>
                <Col>
                  <Family />
                </Col>
              </Row>
            </Col>
          </Row>

          <JutsuAndNatureType />

          <OtherDetails />

          <Row>
            <Col>
              <Debut />
            </Col>{" "}
          </Row>
        </characterDataContext.Provider>
      </Container>
    )
  );
}

export default CharacterDetails;
