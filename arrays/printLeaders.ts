Write a program to print all the LEADERS in the array. An element is a leader if it is greater than all the elements to its right side. And the rightmost element is always a leader. 
For example:

Input: arr[] = {16, 17, 4, 3, 5, 2},  Output: 17, 5, 2
Input: arr[] = {1, 2, 3, 4, 5, 2},  Output: 5, 2

Naive Approach: The problem can be solved based on the idea mentioned below:
Use two loops. The outer loop runs from 0 to size – 1 and one by one pick all elements from left to right. The inner loop compares the picked element to all the elements on its right side. If the picked element is greater than all the elements to its right side, then the picked element is the leader. 
Follow the below steps to implement the idea:

	•	We run a loop from the first index to the 2nd last index.
	•	And for each index, we run another loop from the next index to the last index.
	•	If all the values to the right of that index are smaller than the index, we simply add the value in our answer data structure. 

// Javascript Function to print leaders in an array
 
function printLeaders( arr, size)
{
    for (let i = 0; i < size; i++)
    {
        let j;
        for (j = i+1; j < size; j++)
        {
            if (arr[i] <=arr[j])
                break;
        }    
        if (j == size) // the loop didn't break
            document.write(arr[i] + " ");
  }
}
// driver code 
 
        let arr = [ 16, 17, 4, 3, 5, 2 ]; 
        let n = arr.length; 
 
        // Function calling 
        printLeaders(arr, n); 
 
 
Output
17 5 2 
Time Complexity: O(N * N) Auxiliary Space: O(1)

Find Leader by finding suffix maximum:
The idea is to scan all the elements from right to left in an array and keep track of the maximum till now. When the maximum changes its value, print it.
Follow the below illustration for a better understanding
Illustration:

Let the array be arr[] = {16, 17, 4, 3, 5, 2}
	•	arr[] = {16, 17, 4, 3, 5, 2} , max_from_right = 2 , ans[] = { 2 }
	•	arr[] = {16, 17, 4, 3, 5, 2} , max_from_right = 5 , ans[] = { 2, 5 }
	•	arr[] = {16, 17, 4, 3, 5, 2} , max_from_right = 5 , ans[] = { 2, 5 } 
	•	arr[] = {16, 17, 4, 3, 5, 2} , max_from_right = 5 , ans[] = { 2, 5 }
	•	arr[] = {16, 17, 4, 3, 5, 2} , max_from_right = 17 , ans[] = { 2, 5, 17 }
	•	arr[] = {16, 17, 4, 3, 5, 2} , max_from_right = 17 , ans[] = { 2, 5, 17 }
Follow the steps mentioned below to implement the idea:
	•	We start from the last index position. The last position is always a leader, as there are no elements towards its right. 
	•	And then we iterate on the array till we reach index position = 0.
	•	Each time we keep a check on the maximum value
	•	Every time we encounter a maximum value than the previous maximum value encountered, we either print or store the value as it is the leader

Find leaders and print them in the same order as they are: 
In the previous method, we get time linear complexity, but the output we get is not in the same order as the elements that appear in our input array, so to get out output in the same order as in the input array, we can use stack data structure.
Illustration:
Let the array be arr[] = {16, 17, 4, 3, 5, 2}, we will store the ans in a stack to print in the same order.
	•	arr[] = {16, 17, 4, 3, 5, 2} , max_from_right = 2 , ans[] = { 2 }
	•	arr[] = {16, 17, 4, 3, 5, 2} , max_from_right = 5 , ans[] = { 5, 2 }
	•	arr[] = {16, 17, 4, 3, 5, 2} , max_from_right = 5 , ans[] = { 5, 2 } 
	•	arr[] = {16, 17, 4, 3, 5, 2} , max_from_right = 5 , ans[] = { 5, 2 }
	•	arr[] = {16, 17, 4, 3, 5, 2} , max_from_right = 17 , ans[] = { 17, 5, 2 }
	•	arr[] = {16, 17, 4, 3, 5, 2} , max_from_right = 17 , ans[] = { 17, 5, 2 }
Follow the below steps to implement the idea:
	•	We start from the last index position. The last position is always a leader, as there are no elements towards its right. 
	•	And then we iterate on the array till we reach index position = 0.
	•	Each time we keep a check on the maximum value
	•	Every time we encounter a maximum value than the previous maximum value encountered, we will store the value in the stack as it is the leader
	•	We will iterate on the stack and print the values
