/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // integer array nums1 ; m = number of elements
    // integer array nums2 ; n = number of elements

    // input: [1, 2, 4, 0, 0, 0], m = 3
    // input: [3, 2, 1], m = 3

    // output: [1, 1, 2, 2, 3, 4]

    for (let i = m, j = 0; j < n; i++, j++) {
            nums1[i] = nums2[j];
        }
        nums1.sort((a, b) => a - b);

};