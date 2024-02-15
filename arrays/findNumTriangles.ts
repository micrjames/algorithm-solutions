Given an unsorted array of positive integers, find the number of triangles that can be formed with three different array elements as three sides of triangles. For a triangle to be possible from 3 values, the sum of any of the two values (or sides) must be greater than the third value (or third side). 
Examples: 

Input: arr= {4, 6, 3, 7} Output: 3 Explanation: There are three triangles  possible {3, 4, 6}, {4, 6, 7} and {3, 6, 7}.  Note that {3, 4, 7} is not a possible triangle.  
Input: arr= {10, 21, 22, 100, 101, 200, 300}. Output: 6 Explanation: There can be 6 possible triangles: {10, 21, 22}, {21, 100, 101}, {22, 100, 101},  {10, 100, 101}, {100, 101, 200} and {101, 200, 300}

Naive Approach: To solve the problem follow the below idea: 
The brute force method is to run three loops and keep track of the number of triangles possible so far. The three loops select three different values from an array. The innermost loop checks for the triangle property which specifies the sum of any two sides must be greater than the value of the third side).
Follow the given steps to solve the problem:

	•	Run three nested loops each loop starting from the index of the previous loop to the end of the array i.e run first loop from 0 to n, loop j from i to n, and k from j to n
	•	Check if array[i] + array[j] > array[k], i.e. sum of two sides is greater than the third
	•	Check condition 2 for all combinations of sides by interchanging i, j, k
	•	If all three conditions match, then increase the count
	•	Print the count

/ Javascript program for the above approach
 
// Function to count all possible
// triangles with arr[] elements
function findNumberOfTriangles(arr, n)
{
 
    // Count of triangles
    let count = 0;
 
    // The three loops select three
    // different values from array
    for (let i = 0; i < n; i++) 
    {
        for (let j = i + 1; j < n; j++)
        {
 
            // The innermost loop checks for
            // the triangle property
            for (let k = j + 1; k < n; k++)
 
                // Sum of two sides is greater
                // than the third
                if (
                    arr[i] + arr[j] > arr[k]
                    && arr[i] + arr[k] > arr[j]
                    && arr[k] + arr[j] > arr[i])
                    count++;
        }
    }
    return count;
}
 
// Driver Code
    let arr = [ 10, 21, 22, 100, 101, 200, 300 ];
    let size = arr.length;
     
    document.write( "Total number of triangles possible is "+
      findNumberOfTriangles(arr, size));
 
// This code is contributed by souravghosh041

Output
Total number of triangles possible is 6

Count the number of possible triangles using sorting:
To solve the problem follow the below idea: 
First sort the array in ascending order. Then use two loops. The outer loop to fix the first side and the inner loop to fix the second side and then find the farthest index of the third side (greater than indices of both sides) whose length is less than the sum of the other two sides. So a range of values third side can be found, where it is guaranteed that its length is greater than the other individual sides but less than the sum of both sides.
Let a, b, and c be three sides. The below conditions must hold true for a triangle (the sum of two sides is greater than the third side) 

	1	a + b > c 
	2	b + c > a 
	3	a + c > b
Follow the given steps to solve the problem:
	•	Sort the array in ascending order.
	•	Now run a nested loop. The outer loop runs from start to end and the inner loop runs from index + 1 of the first loop to the end. Take the loop counter of the first loop as i and the second loop as j. Take another variable k = i + 2
	•	Now there are two pointers i and j, where array[i] and array[j] represent two sides of the triangles. For a fixed i and j, find the count of third sides which will satisfy the conditions of a triangle. i.e find the largest value of array[k] such that array[i] + array[j] > array[k]
	•	So when we get the largest value, then the count of the third side is k – j, add it to the total count.
	•	Now sum up for all valid pairs of i and j where i < j

// Javascript program to count number of triangles that can be
// formed from given array
 
 
// Function to count all possible triangles with arr[]
// elements
function findNumberOfTriangles(arr)
{
    let n = arr.length;
    // Sort the array elements in non-decreasing order
    arr.sort((a, b) => a-b);
 
    // Initialize count of triangles
    let count = 0;
 
    // Fix the first element. We
        // need to run till n-3 as
        // the other two elements are
        // selected from arr[i+1...n-1]
        for (let i = 0; i < n - 2; ++i) {
            // Initialize index of the
            // rightmost third element
            let k = i + 2;
        // Fix the second element
        for (let j = i + 1; j < n; ++j) {
            // Find the rightmost element which is
            // smaller than the sum of two fixed elements
            // The important thing to note here is, we
            // use the previous value of k. If value of
            // arr[i] + arr[j-1] was greater than arr[k],
            // then arr[i] + arr[j] must be greater than k,
            // because the array is sorted.
            while (k < n && arr[i] + arr[j] > arr[k])
                ++k;
 
            // Total number of possible triangles that can
            // be formed with the two fixed elements is
            // k - j - 1. The two fixed elements are arr[i]
            // and arr[j]. All elements between arr[j+1]/ to
            // arr[k-1] can form a triangle with arr[i] and arr[j].
            // One is subtracted from k because k is incremented
            // one extra in above while loop.
            // k will always be greater than j. If j becomes equal
            // to k, then above loop will increment k, because arr[k]
            // + arr[i] is always greater than arr[k]
            if (k > j)
                count += k - j - 1;
        }
    }
 
    return count;
}
 
// Driver code
 
    let arr = [ 10, 21, 22, 100, 101, 200, 300 ];
    let size = arr.length;

 
    document.write("Total number of triangles possible is " + findNumberOfTriangles(arr, size));
 
// This code is contributed by Manoj
 
Output
Total number of triangles possible is 6

