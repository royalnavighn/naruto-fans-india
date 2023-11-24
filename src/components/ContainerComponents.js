import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/card.css'
import { Container } from 'react-bootstrap';
import FilteredData from '../helper/FilteredData';
import CharacterCards from './CharacterCards';
import { CategoryFilterOptions } from '../helper/constants';


export const SelectedValueContext = React.createContext()

function ContainerComponents() {


    const [clan, setClan] = useState('');
    const [village, setVillage] = useState('');
    const [kekkeiGenkai, setKekkeiGenkai] = useState('');
    const [tailedBeast, setTailedBeast] = useState('');
    const [team, setTeam] = useState('');





    return (


        <Container fluid>
            <Row>
                <Col sm={10}>

                    <SelectedValueContext.Provider value={{ clan, village, kekkeiGenkai, tailedBeast, team }} >

                        <CharacterCards />

                    </SelectedValueContext.Provider>

                </Col>
                <Col sm={2}>

                    <div className='filter' >
                        <h2> Filter</h2>
                        <br />
                        <FilteredData setClan={setClan} type="clan" />
                        <FilteredData setVillage={setVillage} type="village" />
                        <FilteredData setKekkeiGenkai={setKekkeiGenkai} type="kekkei-genkai" />
                        <FilteredData setTailedBeast={setTailedBeast} type="tailed-beast" />
                        <FilteredData setTeam={setTeam} type="team" />
                    </div>




                </Col>
            </Row>
        </Container >


    )
}

export default ContainerComponents