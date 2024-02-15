Given an integer array, print all distinct elements in an array. The given array may contain duplicates and the output should print every element only once. The given array is not sorted.
Examples: 

Input: arr[] = {12, 10, 9, 45, 2, 10, 10, 45} Output: 12, 10, 9, 2
Input: arr[] = {1, 2, 3, 4, 5} Output: 1, 2, 3, 4, 5

Input: arr[] = {1, 1, 1, 1, 1} Output: 1

Print all Distinct ( Unique ) Elements in given Array using Nested loop:
A Simple Solution is to use two nested loops. The outer loop picks an element one by one starting from the leftmost element. The inner loop checks if the element is present on left side of it. If present, then ignores the element, else prints the element. Following is the implementation of the simple algorithm. 

//Program to print all distinct elements in a given array
 
   
    function  printDistinct(arr, n)
{
    // Pick all elements one by one
    for (let i=0; i<n; i++)
    {
        // Check if the picked element is already printed
        var j;
        for (j=0; j<i; j++)
           if (arr[i] == arr[j])
               break;
   
        // If not printed earlier, then print it
        if (i == j)
          document.write(arr[i] + " ");
    }
}
   
// Driver program to test above function
    arr = new Array(6, 10, 5, 4, 9, 120, 4, 6, 10);
    n = arr.length;
    printDistinct(arr, n);
//This code is contributed by simranarora5sos

Output
6 10 5 4 9 120 


Time Complexity: O(n2).  Auxiliary Space: O(1), since no extra space has been taken.
Print all Distinct ( Unique ) Elements in given Array using using Sorting :
We can use Sorting to solve the problem in O(N log N) time. The idea is simple, first sort the array so that all occurrences of every element become consecutive. Once the occurrences become consecutive, we can traverse the sorted array and print distinct elements in O(n) time. Following is the implementation of the idea. 

// JavaScript program to print all
// distinct elements in a given array
 
function printDistinct(arr, n)
{
    // First sort the array so that all
    // occurrences become consecutive
    arr.sort((a, b) => a - b);
 
    // Traverse the sorted array
    for (let i=0; i<n; i++)
    {
    // Move the index ahead while 
    // there are duplicates
    while (i < n-1 && arr[i] == arr[i+1])
        i++;
 
    // print last occurrence of the 
    // current element
    document.write(arr[i] + " ");
    }
}
 
// Driver program to test above function
    let arr = [6, 10, 5, 4, 9, 120, 4, 6, 10];
    let n = arr.length;
    printDistinct(arr, n);
 
 
// This code is contributed by Surbhi Tyagi.
 


Print all Distinct ( Unique ) Elements in given Array using Set :
The Easiest Way to do it is to take a vector input then put the vector into a set and just traverse over the set.

/ THIS CODE IS CONTRIBUTED BY YASH AGARWAL(YASHAGARWAL2852002)
// JavaScript Program for the above approach
let v = [10, 5, 3, 4, 3, 5, 6];
v.sort(function(a,b){return a-b});
let s = new Set(v);
document.write("All the distinct element in given vector in sorted order are : ");
s.forEach(function(value){
    document.write(value + " ");
});
Output
All the distinct element in given vector in sorted order are: 3 4 5 6 10 


Time Complexity: O(N.log N). Auxiliary Space: O(N), for a set.
