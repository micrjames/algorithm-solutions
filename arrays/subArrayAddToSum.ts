Given an array arr[] of non-negative integers and an integer sum, find a subarray that adds to a given sum.
Note: There may be more than one subarray with sum as the given sum, print first such subarray. 

Examples: 
Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33 Output: Sum found between indexes 2 and 4 Explanation: Sum of elements between indices 2 and 4 is 20 + 3 + 10 = 33

Input: arr[] = {1, 4, 0, 0, 3, 10, 5}, sum = 7 Output: Sum found between indexes 1 and 4 Explanation: Sum of elements between indices 1 and 4 is 4 + 0 + 0 + 3 = 7
Input: arr[] = {1, 4}, sum = 0 Output: No subarray found Explanation: There is no subarray with 0 sum

Find subarray with given sum using Nested loop
The idea is to consider all subarrays one by one and check the sum of every subarray. Following program implements the given idea.  Run two loops: the outer loop picks a starting point i and the inner loop tries all subarrays starting from i.

Follow the steps given below to implement the approach:
	•	Traverse the array from start to end.
	•	From every index start another loop from i to the end of the array to get all subarrays starting from i, and keep a variable currentSum to calculate the sum of every subarray.
	•	For every index in inner loop update currentSum = currentSum + arr[j]
	•	If the currentSum is equal to the given sum then print the subarray.


/* A simple program to print subarray
with sum as given sum */
 
/* Returns true if the there is a subarray
of arr[] with sum equal to 'sum' otherwise
returns false. Also, prints the result */
function subArraySum( arr,  n,  sum)
{
 
    // Pick a starting point
    for (let i = 0; i < n; i++) {
        let currentSum = arr[i];
 
        if (currentSum == sum) {
            console.log("Sum found at indexes " +i);
            return;
        }
        else {
            // Try all subarrays starting with 'i'
            for (let j = i + 1; j < n; j++) {
                currentSum += arr[j];
 
                if (currentSum == sum) {
                    console.log("Sum found between indexes "
                         + i + " and " +j);
                    return;
                }
            }
        }
    }
    console.log("No subarray found");
    return;
}

 let arr = [15, 2, 4, 8, 9, 5, 10, 23 ];
    let n = arr.length;
    let sum = 23;
    subArraySum(arr, n, sum);
 
// This code is contributed by garg28harsh.
Output
Sum found between indexes 1 and 4

Find subarray with given sum using Sliding Window
The idea is simple as we know that all the elements in subarray are positive so, If a subarray has sum greater than the given sum then there is no possibility that adding elements to the current subarray will be equal to the given sum. So the Idea is to use a similar approach to a sliding window. 
	•	Start with an empty subarray 
	•	add elements to the subarray until the sum is less than x( given sum ). 
	•	If the sum is greater than x, remove elements from the start of the current subarray.

	•	Create two variables, start=0, currentSum = arr[0]
	•	Traverse the array from index 1 to end.
	•	Update the variable currentSum by adding current element, currentSum = currentSum + arr[i]
	•	If the currentSum is greater than the given sum, update the variable currentSum as currentSum = currentSum – arr[start], and update start as, start++.
	•	If the currentSum is equal to given sum, print the subarray and break the loop.


Find subarray with given sum using DP:
 We can use dynamic programming to find the subarray with the given sum. The basic idea is to iterate through the array, keeping track of the current sum and storing the difference between the current sum and the given sum in a hash table. If the difference is seen again later in the array, then we know that the subarray with the given sum exists and we can return it. This approach is efficient in terms of time and space, but it may not be suitable if the array is very large and the hash table becomes too large to fit in memory.
Algorithm:
	•	Initialize an empty hash table and a variable curr_sum to 0.
	•	Iterate through the array, keeping track of the current element in a variable i.
	•	Add i to curr_sum and check if curr_sum – sum is in the hash table. If it is, then return the subarray from the index stored in the hash table to i.
	•	If curr_sum – sum is not in the hash table, add an entry to the hash table with the key curr_sum and the value i.
	•	If you reach the end of the array and no subarray with the given sum is found, return an empty array.

