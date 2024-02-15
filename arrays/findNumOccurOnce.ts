Given an array of integers. All numbers occur twice except one number which occurs once. Find the number in O(n) time & constant extra space.
Example : 

Input:  arr[] = {2, 3, 5, 4, 5, 3, 4} Output: 2 
Approach (Brute-force): One solution is to check every element if it appears once or not. Once an element with a single occurrence is found, return it. 

// Javascript program to find the array element 
// that appears only once 
  
    // Function to find the 
    function findSingle(A, ar_size) 
{ 
  
    // Iterate over every element 
    for (let i = 0; i < ar_size; i++) { 
  
        // Initialize count to 0 
        let count = 0; 
  
        for (let j = 0; j < ar_size; j++) { 
  
            // Count the frequency 
            // of the element 
            if (A[i] == A[j]) { 
                count++; 
            } 
        } 
  
        // if the frequency of the 
        // element is one 
        if (count == 1) { 
            return A[i]; 
        } 
    } 
  
    // if no element exist at most once 
    return -1; 
} 
  
// Driver code 
let ar = [ 2, 3, 5, 4, 5, 3, 4 ]; 
let n = 7; 
  
// Function call 
document.write("Element occurring once is "
               + findSingle(ar, n)); 
  
// This code is contributed by garg28harsh. 
Output
Element occurring once is 2
Time complexity of this solution is O(n2) Auxiliary Space: O(1) as constant space is used.

A better solution is to use hashing. 
	1	Traverse all elements and put them in a hash table. Element is used as key and the count of occurrences is used as the value in the hash table. 
	2	Traverse the array again and print the element with count 1 in the hash table. 
This solution works in O(n) time but requires extra space.
The best solution is to use XOR. XOR of all array elements gives us the number with a single occurrence. The idea is based on the following two facts. 
	1	 XOR of a number with itself is 0. 
	2	XOR of a number with 0 is number itself.
Let us consider the above example.  
Let ^ be xor operator as in C and C++.

res = 7 ^ 3 ^ 5 ^ 4 ^ 5 ^ 3 ^ 4

Since XOR is associative and commutative, above 
expression can be written as:
res = 7 ^ (3 ^ 3) ^ (4 ^ 4) ^ (5 ^ 5)  
    = 7 ^ 0 ^ 0 ^ 0
    = 7 ^ 0
    = 7 

Another approach:  This is not an efficient approach but just another way to get the desired results. If we add each number once and multiply the sum by 2, we will get twice the sum of each element of the array. Then we will subtract the sum of the whole array from the twice_sum and get the required number (which appears once in the array). Array [] : [a, a, b, b, c, c, d]  Mathematical Equation = 2*(a+b+c+d) – (a + a + b + b + c + c + d) 
In more simple words: 2*(sum_of_array_without_duplicates) – (sum_of_array) 
let arr[] = {7, 3, 5, 4, 5, 3, 4}
Required no = 2*(sum_of_array_without_duplicates) - (sum_of_array)
            = 2*(7 + 3 + 5 + 4) - (7 + 3 + 5 + 4 + 5 + 3 + 4) 
            = 2*     19         -      31 
            = 38 - 31
            = 7 (required answer)
As we know that set does not contain any duplicate element we will be using the set here.

Another approach:
This is an efficient approach for finding the single element in a list of duplicate elements. In this approach, we are using binary search algorithm to find the single element in the list of duplicates elements. Before that, we need to make sure if the array is sorted. The first step is to sort the array because binary search algorithm wont work if the array is not sorted. 
Now let us move to the binary search implementation:
There are two halves that are created by the only single element present in the array which are left half and right half. Now if there are duplicates present in the left half, then the 1st instance of the duplicate element in the left half is an even index and the 2nd instance is an odd index. The opposite of the left half happens in the right half(1st instance is odd index and the second instance is even index). Now apply binary search algorithm:

	1	The solution is to take two indexes of the array(low and high) where low points to array-index 0 and high points to array-index (array size-2). We take out the mid index from the values by (low+high)/2. 
	2	Now check if the mid index value falls in the left half or the right half. If it falls in the left half then we change the low value to mid+1 and if it falls in the right half, then we change the high index to mid-1. To check it , we used a logic (if(arr[mid]==arr[mid^1]). If mid is an even number then mid^1 will be the next odd index , and if the condition gets satisfied, then we can say that we are in the left index, else we can say we are in the right half. But if mid is an odd index, then mid^1 takes us to mid-1 which is the previous even index , which is gets equal means we are in the right half else left half.
	3	This is done because the aim of this implementation is to find the single element in the list of duplicates. It is only possible if low value is more than high value because at that moment low will be pointing to the index that contains the single element in the array.
	4	After the loop ends, we return the value with low index.
