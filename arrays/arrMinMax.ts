Given a sorted array of positive integers, rearrange the array alternately i.e first element should be a maximum value, at second position minimum value, at third position second max, at fourth position second min, and so on. 
Examples: 

Input: arr[] = {1, 2, 3, 4, 5, 6, 7}  Output: arr[] = {7, 1, 6, 2, 5, 3, 4}
Input: arr[] = {1, 2, 3, 4, 5, 6}  Output: arr[] = {6, 1, 5, 2, 4, 3} 

Rearrange an array in maximum minimum form using Two Pointers:
The idea is to use an auxiliary array. We maintain two pointers one to the leftmost or smallest element and the other to the rightmost or largest element. We move both pointers toward each other and alternatively copy elements at these pointers to an auxiliary array. Finally, we copy the auxiliary array back to the original array.
// JavaScript program to rearrange an array in minimum 
// maximum form 
  
// Prints max at first position, min at second position 
// second max at third position, second min at fourth 
// position and so on. 
function rearrange(arr, n) 
{ 
    // Auxiliary array to hold modified array 
    let temp = new Array(n); 
  
    // Indexes of smallest and largest elements 
    // from remaining array. 
    let small = 0, large = n - 1; 
  
    // To indicate whether we need to copy remaining 
    // largest or remaining smallest at next position 
    let flag = true; 
  
    // Store result in temp[] 
    for (let i = 0; i < n; i++) { 
        if (flag) 
            temp[i] = arr[large--]; 
        else
            temp[i] = arr[small++]; 
  
        flag = !flag; 
    } 
  
    // Copy temp[] to arr[] 
    for (let i = 0; i < n; i++) 
        arr[i] = temp[i]; 
} 
  
// Driver code 
    let arr = [ 1, 2, 3, 4, 5, 6 ]; 
    let n = arr.length; 
  
    document.write("Original Array<br>"); 
    for (let i = 0; i < n; i++) 
        document.write(arr[i] + " "); 
  
    rearrange(arr, n); 
  
    document.write("<br>Modified Array<br>"); 
    for (let i = 0; i < n; i++) 
        document.write(arr[i] + " "); 
  
// This code is contributed by Surbhi Tyagi. 
