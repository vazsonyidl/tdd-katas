// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


import {merge} from "../merge-sorted-array";

describe('Merge sorted array', function () {

    it('can merge with basic inputs', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const m = 3;
        const nums2 = [2, 5, 6];
        const n = 3;

        merge(nums1, m, nums2, n);

        expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
    });

    it('can merge from null starting array', () => {
        const nums1 = [1];
        const m = 1;
        const nums2 = [];
        const n = 0;


        merge(nums1, m, nums2, n);

        expect(nums1).toEqual([1])

    })

    it('can merge with null merging array', () => {
        const nums1 = [0];
        const m = 0;
        const nums2 = [1];
        const n = 1;


        merge(nums1, m, nums2, n);

        expect(nums1).toEqual([1])

    })

    it('can merge with negative numbers', () => {
        const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
        const m = 6;
        const nums2 = [1, 2, 2];
        const n = 3;


        merge(nums1, m, nums2, n);

        expect(nums1).toEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3])

    })
});