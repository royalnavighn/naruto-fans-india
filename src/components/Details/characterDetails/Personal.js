import React, { useContext } from "react";
import { styled } from "styled-components";
import { characterDataContext } from "../../CharacterDetails";

const Subheader = styled.span`
  font-family: "Patrick Hand", cursive;
`;

const Personal = () => {
  const { personal } = useContext(characterDataContext);

  return (
    <div className="personal-details">
      <div className="blocks">
        {personal.birthdate && (
          <>
            <div className="birthday">
              <Subheader className="boldspan">Birth Day : </Subheader>{" "}
              <span className="sc-dlfmHC cJHUvf">{personal.birthdate}</span>
            </div>{" "}
          </>
        )}

        {personal.sex && (
          <div className="sex">
            <Subheader className="boldspan">Sex : </Subheader>
            <span className="sc-dlfmHC cJHUvf">{personal.sex}</span>
            <br />
          </div>
        )}

        {personal.age && Object.values(personal.age).length ? (
          <div className="ages">
            {personal.age && Object.values(personal.age).length
              ? Object.entries(personal.age).map(([key, value]) => (
                  <div className="age" key={key}>
                    <Subheader className="boldspan">{"Age " + key} :</Subheader>{" "}
                    <span className="sc-dlfmHC cJHUvf">{value}</span> <br />{" "}
                  </div>
                ))
              : ""}
          </div>
        ) : (
          ""
        )}

        {personal.bloodType && (
          <div className="personal-details-blood-type">
            <Subheader className="boldspan">blood Type : </Subheader>
            <span className="sc-dlfmHC cJHUvf">{personal.bloodType}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Personal;


