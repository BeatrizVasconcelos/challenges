// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr: number[]): void {
    let totalPositive = 0;
    let totalNegative = 0;
    let totalZeros = 0;
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            totalPositive++;
        }
        
        if (arr[i] < 0) {
            totalNegative++;
        }
        
        if (arr[i] == 0) {
            totalZeros++;
        }

    }
    
    console.log((totalPositive/n).toFixed(6));
    console.log((totalNegative/n).toFixed(6));
    console.log((totalZeros/n).toFixed(6));

}