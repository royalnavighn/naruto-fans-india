import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/card.css";
import { Container } from "react-bootstrap";
import FilteredData from "../helper/FilteredData";
import CharacterCards from "./CharacterCards";
import { useLocation, useNavigate } from "react-router-dom";

export const SelectedValueContext = React.createContext();
export const CharacterArrayContext = React.createContext();

function ContainerComponents() {
  const [clan, setClan] = useState("");
  const [village, setVillage] = useState("");
  const [kekkeiGenkai, setKekkeiGenkai] = useState("");
  const [tailedBeast, setTailedBeast] = useState("");
  const [team, setTeam] = useState("");
  const [characterArray, setCharacterArray] = useState([]);
  const location = useLocation();
  let params = new URLSearchParams(location.search);
  const navClan = params.get("clan");
  const navVillage = params.get("village");
  const navKekkeigenkai = params.get("kekkeiGenkai");
  const navTailedBeast = params.get("tailedBeast");
  const navTeam = params.get("team");

  const navigate = useNavigate();

  useEffect(() => {
    navClan && setClan(navClan);
    navVillage && setVillage(navVillage);
    navKekkeigenkai && setKekkeiGenkai(navKekkeigenkai);
    navTailedBeast && setTailedBeast(navTailedBeast);
    navTeam && setTeam(navTeam)
  }, [location,navClan,navVillage,navKekkeigenkai,navTailedBeast,navTeam]);

  useEffect(() => {
    const navArray = [];
    clan.length && navArray.push(`clan=${clan}`);
    village.length && navArray.push(`village=${village}`);
    kekkeiGenkai.length && navArray.push(`kekkeiGenkai=${kekkeiGenkai}`);
    tailedBeast.length && navArray.push(`tailedBeast=${tailedBeast}`);
    team.length && navArray.push(`team=${team}`);
    let navString = `?${navArray.join("&&")}`;
    navigate(`${navString}`, {
      state: { clan, village, kekkeiGenkai, tailedBeast, team },
    });
  }, [clan, village, kekkeiGenkai, tailedBeast, team , navigate]);
  return (
    <React.Fragment>
      <Container fluid>
        <Row md={12}>
          <Col
            lg={{ span: 10, order: 1 }}
            md={{ order: 2 }}
            sm={{ order: 2 }}
            xs={{ order: 2 }}
          >
            <SelectedValueContext.Provider
              value={{ clan, village, kekkeiGenkai, tailedBeast, team }}
            >
              <CharacterCards setCharacterArray={setCharacterArray} />
            </SelectedValueContext.Provider>
          </Col>
          <Col
            lg={{ span: 2, order: 2 }}
            md={{ order: 1 }}
            sm={{ order: 1 }}
            xs={{ order: 1 }}
          >
            <div className="filter">
              <br /> <br /> <br />
              <CharacterArrayContext.Provider value={characterArray}>
                <FilteredData setClan={setClan} type="clan" />
                <FilteredData setVillage={setVillage} type="village" />
                <FilteredData
                  setKekkeiGenkai={setKekkeiGenkai}
                  type="kekkei-genkai"
                />
                <FilteredData
                  setTailedBeast={setTailedBeast}
                  type="tailed-beast"
                />
                <FilteredData setTeam={setTeam} type="team" />
              </CharacterArrayContext.Provider>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ContainerComponents;
