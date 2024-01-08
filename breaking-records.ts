/* Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she begins counting from there.
Given the scores for a season, determine the number of times Maria breaks her records for most and least 
points scored during the season. */

function breakingRecords(scores: number[]): number[] {
    let recordGameScore: number = scores[0];
    let leastPointsScore: number[] = [];
    let minPointsCount: number = 0; 
    let maxPointsCount: number = 0; 
    
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < scores[0]) {
            if (!leastPointsScore.includes(scores[i])) {
                leastPointsScore.push(scores[i]);
                minPointsCount++;
            }
        }
        
        if (scores[i] > recordGameScore) {
            recordGameScore = scores[i];
            maxPointsCount++;
        }
    }
    
    return [maxPointsCount, minPointsCount];
    

}