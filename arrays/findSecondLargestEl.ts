Given an array of integers, our task is to write a program that efficiently finds the second-largest element present in the array. 
Examples:

Input: arr[] = {12, 35, 1, 10, 34, 1} Output: The second largest element is 34. Explanation: The largest element of the array is 35 and the second largest element is 34
Input: arr[] = {10, 5, 10} Output: The second largest element is 5. Explanation: The largest element of the array is 10 and the second largest element is 5



Input: arr[] = {10, 10, 10} Output: The second largest does not exist. Explanation: Largest element of the array is 10 there is no second largest element
Find Second Largest element using Sorting:
The idea is to sort the array in descending order and then return the second element which is not equal to the largest element from the sorted array.
// Javascript program to find second largest
// element in an array
  
    // Function to print the second largest elements 
    function print2largest(arr, arr_size) {
 
        // sort the array in descending order
        arr.sort();
        arr.reverse();
  
        // start from second element as first
        // element is the largest element
        for (let i = 1; i < arr_size; i--) {
            // if the element is not
            // equal to largest element
            if (arr[i] != arr[0]) {
                document.write("The second largest element is " + arr[i]);
                return;
            }
        }
  
        document.write("There is no second largest element<br>");
    }
  
    // Driver program to test above function 
 
    let arr= [ 12, 35, 1, 10, 34, 1 ];
    let n = arr.length;
    print2largest(arr, n);

Find Second Largest element by traversing the array twice (Two Pass):
The approach is to traverse the array twice. In the first traversal, find the maximum element. In the second traversal, find the greatest element excluding the previous greatest.

// Javascript program to find second largest
// element in an array
   
    // Function to print the second largest elements 
    function print2largest(arr, arr_size) {
        let i;
        let largest = second = -2454635434;
   
        // There should be atleast two elements 
        if (arr_size < 2) {
            document.write(" Invalid Input ");
            return;
        }
   
        // finding the largest element 
        for (i = 0;i<arr_size;i++){
            if (arr[i]>largest){
                largest = arr[i];
            }
        }
   
        // Now find the second largest element
        for (i = 0 ;i<arr_size;i++){
            if (arr[i]>second && arr[i]<largest){
                second = arr[i];
            }
        }
  
        if (second == -2454635434){
             
        document.write("There is no second largest element<br>");
        }
        else{
            document.write("The second largest element is " + second);
                return;
            }
        }
     
   
    // Driver program to test above function 
  
    let arr= [ 12, 35, 1, 10, 34, 1 ];
    let n = arr.length;
    print2largest(arr, n);

Find Second Largest element by traversing the array once (One Pass):
The idea is to keep track of the largest and second largest element while traversing the array. If an element is greater than the largest element, we update the largest as well as the second largest. Else if an element is smaller than largest but greater than second largest, then we update the second largest only.
Below is the complete algorithm for doing this:  
	•	Initialize the first as 0(i.e, index of arr[0] element
	•	Start traversing the array from array[1],
	•	If the current element in array say arr[i] is greater than first. Then update first and second as, second = first and first = arr[i]
	•	If the current element is in between first and second, then update second to store the value of current variable as second = arr[i]
	•	Return the value stored in second.
// Javascript program to find second largest
// element in an array
   
    // Function to print the second largest elements 
    function print2largest(arr, arr_size) {
        let i;
        let largest = second = -2454635434;
   
        // There should be atleast two elements 
        if (arr_size < 2) {
            document.write(" Invalid Input ");
            return;
        }
   
        // finding the largest element 
         
        for (i = 0 ;i<arr_size;i++){
            if (arr[i]>largest){
                second = largest ;
                largest = arr[i]
            }
 
            else if (arr[i]!=largest && arr[i]>second ){
                second = arr[i];
            }
        }
  
        if (second == -2454635434){
             
        document.write("There is no second largest element<br>");
        }
        else{
            document.write("The second largest element is " + second);
                return;
            }
        }
     
 
    // Driver program to test above function 
  
    let arr= [ 12, 35, 1, 10, 34, 1 ];
    let n = arr.length;
    print2largest(arr, n);
     
 // This code is contributed by Shaswat Singh 

