import React, { useContext } from "react";
import { characterDataContext } from "../../CharacterDetails";
import CharacterDetailsObjectValue from "./CharacterDetailsObjectValue";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { styled } from "styled-components";

export const SubHeaderContent = styled.h2`
  font-family: "Permanent Marker", cursive;
`;

export const SpanText = styled.span`
  font-family: "Kalam", cursive;
  font-weight: 800;
`;

function JutsuAndNatureType() {
  const characterData = useContext(characterDataContext);

  const jutsu = characterData.jutsu;
  const nature = characterData.natureType;
  return (
    <Row>
      <div className="jutsu-and-naturetype">
        {jutsu && (
          <div className="jutsu">
            <Col xs={12}>
              <SubHeaderContent>Jutsu</SubHeaderContent>
              <CharacterDetailsObjectValue data={jutsu} />
            </Col>
          </div>
        )}
        {nature && (
          <div className="naturetype">
            <SubHeaderContent>Nature Type</SubHeaderContent>
            <CharacterDetailsObjectValue data={nature} />
          </div>
        )}
      </div>
    </Row>
  );
}

export default JutsuAndNatureType;
