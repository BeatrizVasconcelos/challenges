// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
//The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

function removeElement(nums: number[], val: number): number {
    let j = 0;
    for( let n of nums ) {
        if( n !== val ) {
            nums[j] = n;
            j++;
        }
    }
    return j; 
};