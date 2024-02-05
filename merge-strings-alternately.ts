// You are given two strings word1 and word2. 
// Merge the strings by adding letters in alternating order, starting with word1. 
// If a string is longer than the other, append the additional letters onto the end of the merged string.

//Return the merged string.

function mergeAlternately(word1: string, word2: string): string {
    let arrayWord1 = word1.split('');
    let arrayWord2 = word2.split('');
    let finalArrayWord: string[] = [];

    for (let i = 0, j = 0; i < arrayWord1.length || j < arrayWord2.length; i++, j++) {
        finalArrayWord.push(arrayWord1[i]);
        finalArrayWord.push(arrayWord2[j]);
    }

    return finalArrayWord.join('');
};