/* There are n kids with candies. You are given an integer array candies, 
where each candies[i] represents the number of candies the ith kid has, 
and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving 
the ith kid all the extraCandies, they will have the greatest number of candies among 
all the kids, or false otherwise. */

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // create our boolean array
    let booleanArray: boolean[] = [];
    // get the greatest number of candies in the input array
    let greatestCandiesNumber = Math.max(...candies);
    // check if each value of the array plus the extraCandies is greater or equal the greatestCandiesNumber
    for (let i = 0; i < candies.length; i++) {
        if ((candies[i] + extraCandies) >= greatestCandiesNumber) {
            booleanArray.push(true);
        } else booleanArray.push(false);
    }

    return booleanArray;
};