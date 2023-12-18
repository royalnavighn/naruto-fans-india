import React, { useContext } from "react";
import { characterDataContext } from "../../CharacterDetails";
import CharacterDetailsObjectValue from "./CharacterDetailsObjectValue";
import { getRankSectionByRankDetails } from "../../../helper/sectionContentHelper";
import { Col, Row } from "react-bootstrap";
import { SubHeaderContent } from "./JutsuAndNatureType";

function OtherDetails() {
  const {
    tools,
    uniqueTraits,
    rank,
    personal: otherPersonalDetails,
  } = useContext(characterDataContext);

  const {
    kekkeiGenkai,
    kekkeiMōra,
    tailedBeast,
    classification,
    occupation,
    affiliation,
    partner,
    clan,
    titles,
  } = otherPersonalDetails;

  let rankSection = getRankSectionByRankDetails(rank);

  return (
    <div className="other-details">
      <Row>
        {tools && (
          <Col>
            <div className="tools">
              <SubHeaderContent>Tools</SubHeaderContent>
              <span>
                <CharacterDetailsObjectValue data={tools} />
              </span>
            </div>
          </Col>
        )}
        {uniqueTraits && (
          <Col>
            <div className="uniquetraits">
              <SubHeaderContent>Unique Traits</SubHeaderContent>
              <CharacterDetailsObjectValue data={uniqueTraits} />
            </div>
          </Col>
        )}
        {rankSection && (
          <Col>
            <div className="uniquetraits">
              <SubHeaderContent>Rank</SubHeaderContent>

              <div
                dangerouslySetInnerHTML={{
                  __html: rankSection,
                }}
              />
            </div>
          </Col>
        )}

        {kekkeiGenkai && (
          <Col>
            <div className="kekkeiGenkai">
              <SubHeaderContent>KekkeiGenkai</SubHeaderContent>
              <CharacterDetailsObjectValue data={kekkeiGenkai} />
            </div>
          </Col>
        )}
      </Row>
      <Row>
        {kekkeiMōra && (
          <Col>
            {" "}
            <div className="KekkeiMōra">
              <SubHeaderContent>KekkeiMōra</SubHeaderContent>

              <CharacterDetailsObjectValue data={kekkeiMōra} />
            </div>
          </Col>
        )}
        {classification && (
          <Col>
            <div className="classification">
              <SubHeaderContent>Classification</SubHeaderContent>
              <CharacterDetailsObjectValue data={classification} />
            </div>
          </Col>
        )}

        {tailedBeast && (
          <Col>
            <div className="tailedBeast">
              <SubHeaderContent>TailedBeast</SubHeaderContent>
              <CharacterDetailsObjectValue data={tailedBeast} />
            </div>
          </Col>
        )}
        {occupation && (
          <Col>
            <div className="occupation">
              <SubHeaderContent>Occupation</SubHeaderContent>
              <CharacterDetailsObjectValue data={occupation} />
            </div>
          </Col>
        )}
      </Row>
      <Row>
        {affiliation && (
          <Col>
            <div className="affiliation">
              <SubHeaderContent>Affiliation</SubHeaderContent>
              <CharacterDetailsObjectValue data={affiliation} />
            </div>
          </Col>
        )}
        {partner && (
          <Col>
            <div className="partner">
              <SubHeaderContent>Partner</SubHeaderContent>
              <CharacterDetailsObjectValue data={partner} />
            </div>
          </Col>
        )}

        {clan && (
          <Col>
            <div className="clan">
              <SubHeaderContent>Clan</SubHeaderContent>
              <CharacterDetailsObjectValue data={clan} />
            </div>
          </Col>
        )}
      </Row>
      <Row>
        {titles && (
          <Col>
            <div className="titles">
              <SubHeaderContent>Titles</SubHeaderContent>
              <CharacterDetailsObjectValue data={titles} />
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default OtherDetails;
