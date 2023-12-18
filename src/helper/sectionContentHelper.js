import { typeChecker } from "./generalHelper";

export const getRankSectionByRankDetails = (rank) => {
  let rankSection = "";

  // checkinging .. is there any first level object
  if (typeChecker(rank) === "object") {
    Object.keys(rank).forEach((keyValue) => {
      //console.log(keyValue);
      //console.log(rank[keyValue]);

      let currentRankType = keyValue;

      let currentRankDetails = rank[keyValue];

      // checkinging .. is there any second level object
      if (typeChecker(currentRankDetails) === "object") {
        rankSection +=
          `<span class='sc-iBPTVF gFgcUu boldspan'>` + currentRankType + " " + `</span>`;

        Object.keys(currentRankDetails).forEach((currentRankDetailKey) => {
          rankSection +=
            `<span class='sc-iBPTVF gFgcUu boldspan'>` +
            currentRankDetailKey +
            ` : ` +
            `</span>` +
            "<span class='discription'>" +
            currentRankDetails[currentRankDetailKey] +
            `</span>`;
        });
      } else {
        if (typeChecker(currentRankDetails) === "string") {
          rankSection +=
            `<div class = ${currentRankType}> <span class='sc-iBPTVF gFgcUu boldspan'>` +
            currentRankType +
            ` : ` +
            `</span>` +
            `<span class="discription">` +
            currentRankDetails +
            `</span>  </br>  </div>`;
        }
      }
    });
  } else {
    if (typeChecker(rank) === "string") {
      rankSection += `<span class="discription">` + rank + `</span>`;
    }
  }

  return rankSection !== "" ? rankSection : false;
};
