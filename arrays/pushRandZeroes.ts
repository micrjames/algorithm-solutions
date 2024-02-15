Given an array of random numbers, Push all the zero’s of a given array to the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be same. Expected time complexity is O(n) and extra space is O(1).
Example: 

Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};

Input : arr[]  = {1, 2, 0, 0, 0, 3, 6};
Output : arr[] = {1, 2, 3, 6, 0, 0, 0};
 
There can be many ways to solve this problem. Following is a simple and interesting way to solve this problem.  Traverse the given array ‘arr’ from left to right. While traversing, maintain count of non-zero elements in array. Let the count be ‘count’. For every non-zero element arr[i], put the element at ‘arr[count]’ and increment ‘count’. After complete traversal, all non-zero elements have already been shifted to front end and ‘count’ is set as index of first 0. Now all we need to do is run a loop that makes all elements zero from ‘count’ till end of the array.
/ A JavaScript program to move all zeroes at the end of array  
  
// Function which pushes all zeros to end of an array.  
function pushZerosToEnd(arr, n)  
{  
    let count = 0; // Count of non-zero elements  
  
    // Traverse the array. If element encountered is non-  
    // zero, then replace the element at index 'count'  
    // with this element  
    for (let i = 0; i < n; i++)  
        if (arr[i] != 0)  
            arr[count++] = arr[i]; // here count is  
                                // incremented  
  
    // Now all non-zero elements have been shifted to  
    // front and 'count' is set as index of first 0.  
    // Make all elements 0 from count to end.  
    while (count < n)  
        arr[count++] = 0;  
}  
  
// Driver code 
    let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];  
    let n = arr.length;  
    pushZerosToEnd(arr, n);  
    document.write("Array after pushing all zeros to end of array :<br>");  
    for (let i = 0; i < n; i++)  
        document.write(arr[i] + " ");   
  
Method 2: Partitioning the array

Approach: The approach is pretty simple. We will use 0 as a pivot element and whenever we see a non zero element we will swap it with the pivot element. So all the non zero element will come at the beginning.

// Javascript Program to move all zeros to the end 
  
  
let A = [5, 6, 0, 4, 6, 0, 9, 0, 8]; 
let n = A.length; 
let j = 0; 
for (let i = 0; i < n; i++) { 
    if (A[i] != 0) { 
        //   Swap - A[j] , A[i] 
        swap(A, j, i); // Partitioning the array 
        j++; 
    } 
} 
for (let i = 0; i < n; i++) { 
    document.write(A[i] + " "); // Print the array 
} 
  
  
// Utility function to swap two elements of an array 
function swap(A, a, b) { 
    let temp = A[a]; 
    A[a] = A[b]; 
    A[b] = temp; 
} 
Method-4: using extra space
In this approach, we will take an array of the same size as the input array and run a for loop on the input array. In that for loop, if the element does not equal 0, then place that element in the new array and if that element is 0 increase the count of 0. Then add as many 0 In that new array as we have the count of zeroes. Then copy elements of this new array into our old/input array.

// JavaScript program to move all zeros to the end 
  
let A = [5, 6, 0, 4, 6, 0, 9, 0, 8]; 
let n = A.length; 
let B = new Array(n); 
let j = 0; 
let count = 0; 
  
for (let i = 0; i < n; i++) { 
if (A[i] !== 0) { 
B[j] = A[i]; 
j++; 
} 
else { 
count++; 
} 
} 
  
while (count > 0) { 
B[j] = 0; 
count--; 
j++; 
} 
  
for (let i = 0; i < n; i++) { 
A[i] = B[i]; 
} 
  
for (let i = 0; i < n; i++) { 
console.log(A[i] + " "); // Print the array 
}
