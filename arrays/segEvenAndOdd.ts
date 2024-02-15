Segregate even and odd numbers using Lomuto’s Partition Scheme

Given an array arr[] of integers, segregate even and odd numbers in the array such that all the even numbers should be present first, and then the odd numbers.
Examples:  

Input: arr[] = {7, 2, 9, 4, 6, 1, 3, 8, 5} Output: 2 4 6 8 7 9 1 3 5
Input: arr[] = {1, 3, 2, 4, 7, 6, 9, 10} Output:  2 4 6 10 7 1 9 3

For the sake of illustration, let’s consider the following array: [7, 2, 9, 4, 6, 1, 3, 8, 5].

	•	Choose a pivot element from the array.

In this case, let’s choose the last element, which is 5, as the pivot.
	•	Initialize two pointers, i and j.
	•	The pointer i will keep track of the boundary between the even and odd numbers, and
	•	the pointer j will iterate through the array.
	•	Iterate through the array using the pointer j.
	•	Compare each element with the pivot and perform the following steps:
	•	If the element is even, swap it with the element at index i and increment i.
	•	If the element is odd, do nothing and continue.
Let’s go through the steps:
	•	Initially, i = 0 and j = 0.
	•	The first element is 7 (odd),
	•	so we do nothing and move j to the next element.
	•	The second element is 2 (even),
	•	so we swap it with the element at index i (which is also 2) and increment i to 1.
	•	The third element is 9 (odd),
	•	so we do nothing and move j to the next element.
	•	The fourth element is 4 (even),
	•	so we swap it with the element at index i (which is 9) and increment i to 2.
	•	The fifth element is 6 (even),
	•	so we swap it with the element at index i (which is 9) and increment i to 3.
	•	The sixth element is 1 (odd),
	•	so we do nothing and move j to the next element.
	•	The seventh element is 3 (odd),
	•	so we do nothing and move j to the next element.
	•	The eighth element is 8 (even),
	•	so we swap it with the element at index i (which is 1) and increment i to 4.
	•	The ninth element is 5 (odd),
	•	so we do nothing and move j to the next element.
	•	After iterating through the array, we partitioned the even and odd numbers.
The array now looks like this: [2, 4, 6, 8, 5, 1, 3, 9, 7].
	•	Finally, swap the pivot element with the element at index I.
In this case, we swap 5 with 7. This step ensures that the pivot element is in its final sorted position.
The array after the final swap will be: [2, 4, 6, 8, 7, 1, 3, 9, 5].
	•	Now, the even numbers are on the left side of the pivot, and the odd numbers are on the right side. The pivot element is in its correct sorted position.

<script>
// JavaScript code to segregate even odd
// numbers in an array

// Function to segregate even odd numbers
function arrayEvenAndOdd(arr, n)
{

    let i = -1, j = 0;
    let t;
    while (j != n) {
        if (arr[j] % 2 == 0) {
            i++;

            // Swapping even and odd numbers
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
        }
        j++;
    }

    // Printing segregated array
    for (let i = 0; i < n; i++)
        document.write(arr[i] + " ");
}

// Driver code

    let arr = [ 1, 3, 2, 4, 7, 6, 9, 10 ];
    let n = arr.length;
    arrayEvenAndOdd(arr, n);

