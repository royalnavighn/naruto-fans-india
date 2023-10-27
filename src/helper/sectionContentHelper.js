
import { typeChecker } from './generalHelper';

export const getRankSectionByRankDetails = (rank) => {

    let rankSection = '';

    // checkinging .. is there any first level object
    if (typeChecker(rank) === 'object') {

        Object.keys(rank).forEach((keyValue) => {

            //console.log(keyValue);
            //console.log(rank[keyValue]);

            let currentRankType = keyValue;

            let currentRankDetails = rank[keyValue];




            // checkinging .. is there any second level object
            if (typeChecker(currentRankDetails) === 'object') {

                rankSection += `<p>` + currentRankType + `</p>`;

                Object.keys(currentRankDetails).forEach((currentRankDetailKey) => {

                    rankSection += `<p>` + currentRankDetailKey + ` : ` + currentRankDetails[currentRankDetailKey] + `</p>`;

                });

            }
            else {

                if (typeChecker(currentRankDetails) === 'string') {


                    rankSection += `<p>` + currentRankType + ` : ` + currentRankDetails + `</p>`;

                }
            }

        })

    }
    else {
        if (typeChecker(rank) === 'string') {
            rankSection += `<p>` + rank + `</p>`;
        }
    }


    return rankSection !== '' ? rankSection : false;
}


