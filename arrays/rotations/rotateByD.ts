Given an array arr[] of size N, the task is to rotate the array by d position to the left.
Examples: 

Input:  arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2 Output: 3, 4, 5, 6, 7, 1, 2 Explanation: If the array is rotated by 1 position to the left,  it becomes {2, 3, 4, 5, 6, 7, 1}. When it is rotated further by 1 position, it becomes: {3, 4, 5, 6, 7, 1, 2}
Input: arr[] = {1, 6, 7, 8}, d = 3 Output: 8, 1, 6, 7



 

Approach: We have already discussed several methods in this post. The ways discussed there are:
	•	Using another temporary array.
	•	Rotating one by one.
	•	Using a juggling algorithm.
Another Approach (The Reversal Algorithm): Here we will be discussing another method which uses the concept of reversing a part of array. The intuition behind the idea is mentioned below:
Intuition:
If we observe closely, we can see that a group of array elements is changing its position. For example see the following array: arr[] = {1, 2, 3, 4, 5, 6, 7} and d = 2. The rotated array is {3, 4, 5, 6, 7, 1, 2}
The group having the first two elements is moving to the end of the array. This is like reversing the array.
	•	But the issue is that if we only reverse the array, it becomes {7, 6, 5, 4, 3, 2, 1}. 
	•	After rotation the elements in the chunks having the first 5 elements {7, 6, 5, 4, 3} and the last 2 elements {2, 1} should be in the actual order as of the initial array [i.e., {3, 4, 5, 6, 7} and {1, 2}]but here it gets reversed. 
	•	So if those blocks are reversed again we get the desired rotated array.
So the sequence of operations is:
	•	Reverse the whole array 
	•	Then reverse the last ‘d’ elements and 
	•	Then reverse the first (N-d) elements.
As we are performing reverse operations it is also similar to the following sequence:
	•	Reverse the first ‘d’ elements
	•	Reverse last (N-d) elements
	•	Reverse the whole array.
Algorithm: The algorithm can be described with the help of the below pseudocode:
Pseudocode:  

Algorithm reverse(arr, start, end):     mid = (start + end)/2     loop from i = start to mid:         swap (arr[i], arr[end-(mid-i+1)])
Algorithm rotate(arr, d, N):     reverse(arr, 1, d) ;     reverse(arr, d + 1, N);     reverse(arr, 1, N);

 // JavaScript program for reversal algorithm
      // of array rotation
 
      /*Function to reverse arr[] from index start to end*/
      function reverseArray(arr, start, end) {
        while (start < end) {
          var temp = arr[start];
          arr[start] = arr[end];
          arr[end] = temp;
          start++;
          end--;
        }
      }
 
      /* Function to left rotate arr[] of size n by d */
      function leftRotate(arr, d, n) {
        if (d == 0) return;
        // in case the rotating factor is
        // greater than array length
        d = d % n;
 
        reverseArray(arr, 0, d - 1);
        reverseArray(arr, d, n - 1);
        reverseArray(arr, 0, n - 1);
      }
 
      // Function to print an array
      function printArray(arr, size) 
      {
        for (var i = 0; i < size; i++) document.write(arr[i] + " ");
      }
 
      /* Driver program to test above functions */
 
      var arr = [1, 2, 3, 4, 5, 6, 7];
      var n = arr.length;
      var d = 2;
 
      // Function calling
      leftRotate(arr, d, n);
      printArray(arr, n);
       
      // This code is contributed by rdtank.
