Given an array, generate all the possible subarrays of the given array using recursion.
Examples: 

Input : [1, 2, 3]
Output : [1], [1, 2], [2], [1, 2, 3], [2, 3], [3]

Input : [1, 2]
Output : [1], [1, 2], [2]
We have discussed iterative program to generate all subarrays. In this post, recursive is discussed.
Approach: We use two pointers start and end to maintain the starting and ending point of the array and follow the steps given below: 
	•	Stop if we have reached the end of the array
	•	Increment the end index if start has become greater than end
	•	Print the subarray from index start to end and increment the starting index
// Javascript code to print all possible 
// subarrays for given array using recursion 
 
// Recursive function to print all 
// possible subarrays for given array 
function printSubArrays(arr, start, end)
{
     
    // Stop if we have reached the end
    // of the array     
    if (end == arr.length) 
        return;
       
    // Increment the end point and start
    // from 0 
    else if (start > end) 
        printSubArrays(arr, 0, end + 1);
           
    // Print the subarray and increment 
    // the starting point 
    else
    {
        document.write("[");
        for(var i = start; i < end; i++)
        {
            document.write( arr[i] + ", ");
        }
         
        document.write(arr[end] + "]<br>");
        printSubArrays(arr, start + 1, end);
    }
    return;
}
 
// Driver code
var arr = [ 1, 2, 3 ];
printSubArrays(arr, 0, 0);
 
// This code is contributed by rutvik_56
 
