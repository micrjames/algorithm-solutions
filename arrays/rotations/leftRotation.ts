Given an array of size n and multiple values around which we need to left rotate the array. How to quickly print multiple left rotations?
Examples : 

Input : 
arr[] = {1, 3, 5, 7, 9}
k1 = 1
k2 = 3
k3 = 4
k4 = 6
Output : 
3 5 7 9 1
7 9 1 3 5
9 1 3 5 7
3 5 7 9 1
Input : 
arr[] = {1, 3, 5, 7, 9}
k1 = 14 
Output : 
9 1 3 5 7
We have discussed a solution in the below post.  Quickly find multiple left rotations of an array | Set 1
Method I: The solution discussed above requires extra space. In this post, an optimized solution is discussed that doesn’t require extra space.

// JavaScript implementation of left rotation of
// an array K number of times
 
// Function to leftRotate array multiple times
function leftRotate(arr, n, k){
    /* To get the starting point of rotated array */
    let mod = k % n;
 
    // Prints the rotated array from start position
    for (let i = 0; i < n; i++)
        document.write((arr[(mod + i) % n]) + " ");
 
    document.write("\n");
}
 
// Driver Code
let arr = [ 1, 3, 5, 7, 9 ];
let n = arr.length;
 
let k = 2;
// Function Call
leftRotate(arr, n, k);
document.write("<br>");
 
k = 3;
// Function Call
leftRotate(arr, n, k);
document.write("<br>");
 
k = 4;
// Function Call
leftRotate(arr, n, k);

Output
5 7 9 1 3 
7 9 1 3 5 
9 1 3 5 7 

