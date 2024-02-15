import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
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
import { urlOfDb } from "../helper/constants";
import { useEntireData } from "../App";

import vacantImage from "../assets/images/placeholder.webp";

export const characterDataContext = React.createContext();

const HeaderContent = styled.h1`
  font-family: "Permanent Marker", cursive;
`;

function CharacterDetails(props) {
  const location = useLocation();
  const [idPost, setIdPost] = useState();

  let params = new URLSearchParams(location.search);
  let id = params.get("id");

  const entireData = useEntireData();

  console.log("entireData", entireData);
  console.log(entireData && entireData.data.characters[id]);
  useEffect(() => {
    let response = entireData && entireData.data.characters[id];
    setIdPost(response ? response : "");
  }, [entireData, location, id]);

  if (!idPost) {
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
                  {
                    (console.log(idPost.images.length),
                    idPost.images.length > 1 ? (
                      <Slider autoplay={true} autoplaySpeed={1000}>
                        {idPost.images.map((postImage, i) => (
                          <div key={i}>
                            <img
                              src={postImage ? postImage : vacantImage}
                              className="card-img-top main"
                              alt={idPost.name + i}
                            />
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <img
                        src={vacantImage}
                        className="card-img-top main"
                        alt={idPost.name}
                      />
                    ))
                  }
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
