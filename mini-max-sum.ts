// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr: number[]): void {
    let sum = arr.reduce((a, b) => a + b);
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    
    console.log((sum - maxVal) + ' ' + (sum - minVal));
    
}