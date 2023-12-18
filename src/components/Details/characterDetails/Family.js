import React, { useContext } from "react";
import { getRankSectionByRankDetails } from "../../../helper/sectionContentHelper";
import { characterDataContext } from "../../CharacterDetails";

function Family() {
  const { family } = useContext(characterDataContext);
  let familySection = getRankSectionByRankDetails(family);
  return (
    <div>
      {family && (
        <div className="family">
          <div
            className="blocks"
            dangerouslySetInnerHTML={{
              __html: familySection,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Family;
