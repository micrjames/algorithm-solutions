Given an array with all distinct elements, find the largest three elements. Expected time complexity is O(n) and extra space is O(1). 
Examples :

Input: arr[] = {10, 4, 3, 50, 23, 90}
Output: 90, 50, 23

Method 1:
Algorithm

1) Initialize the largest three elements as minus infinite.
    first = second = third = -?
2) Iterate through all elements of array.
   a) Let current array element be x.
   b) If (x > first)
      {
          // This order of assignment is important
          third = second
          second = first
          first = x   
       }
   c)  Else if (x > second and x != first)
      {
          third = second
          second = x 
      }
   d)  Else if (x > third and x != second)
      {
          third = x  
      }
3) Print first, second and third.
// Javascript program for find the largest 
// three elements in an array
 
// Function to print three largest elements 
function print3largest(arr, arr_size) 
{ 
    let first, second, third; 
 
    // There should be atleast three elements 
    if (arr_size < 3) 
    { 
        document.write(" Invalid Input "); 
        return; 
    } 
 
    third = first = second = Number.MIN_VALUE; 
    for(let i = 0; i < arr_size; i++) 
    { 
         
        // If current element is
        // greater than first
        if (arr[i] > first)
        { 
            third = second; 
            second = first; 
            first = arr[i]; 
        } 
 
        // If arr[i] is in between first
        // and second then update second 
        else if (arr[i] > second)
        { 
            third = second; 
            second = arr[i]; 
        } 
 
        else if (arr[i] > third) 
            third = arr[i]; 
    } 
 
    document.write("Three largest elements are "
        + first + " " + second + " "
        + third + "<br>"); 
} 
 
// Driver code
    let arr = [ 12, 13, 1, 10, 34, 1 ]; 
    let n = arr.length; 
     
    print3largest(arr, n); 
     
// This is code is contributed by Mayank Tyagi

An efficient way to solve this problem is to use any O(nLogn) sorting algorithm & simply returning the last 3 largest elements.

// JavaScript code to find largest
// three elements in an array
 
     function find3largest(arr) {
        arr.sort((a,b)=>a-b); // It uses Tuned Quicksort with
        // avg. case Time complexity = O(nLogn)
  
        let check = 0, count = 1;
  
        for (let i = 1; i <= arr.length; i++) {
  
            if (count < 4) {
                if (check != arr[arr.length - i]) {
                    // to handle duplicate values
                    document.write(arr[arr.length - i] + " ");
                    check = arr[arr.length - i];
                    count++;
                }
            }
            else
                break;
        }
    }
  
    // Driver code
 
    let arr = [ 12, 45, 1, -1, 45, 54, 23, 5, 0, -10 ];
    find3largest(arr);


