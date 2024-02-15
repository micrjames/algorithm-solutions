You have given an array which contain 1 to n element, your task is to sort this array in an efficient way and without replace with 1 to n numbers. Examples : 
Input : arr[] = {10, 7, 9, 2, 8, 3, 5, 4, 6, 1}; Output : 1 2 3 4 5 6 7 8 9 10 

Native approach :  Sort this array with the use of any type of sorting method. it takes O(nlogn) minimum time.
Efficient Approach (Using Cyclic Sort):

Idea: 
The given array contains number in the range [1 to n]  so we can use cyclic sort 
Follow the steps mentioned below to solve the problem
	•	Traverse the array 
	•	Check if the array is at correct position
	•	Else swap the element to the element at its correct position


// Function to sort the array
     function sort(arr, n) {
       var i = 0;
       while (i < n) {
         // Finding the correct index
         var correct = arr[i] - 1;
 
         // Element index and value not match
         // then swapping
         if (arr[correct] != arr[i]) {
           // Calling swap function
           swap(arr, i, correct);
         } else {
           i++;
         }
       }
     }
 
     // Function to swap values
     function swap(arr, i, correct) {
       var temp = arr[i];
       arr[i] = arr[correct];
       arr[correct] = temp;
     }
 
     // Driver Code
 
     var arr = [3, 2, 5, 6, 1, 4];
     var n = 6;
 
     // Function call
     sort(arr, n);
 
     // Printing the answer
     for (var i = 0; i < n; i++) {
       console.log(arr[i]);
     }

Output
[1, 2, 3, 4, 5, 6]
Time Complexity: O(n) Auxiliary Space: O(1)
