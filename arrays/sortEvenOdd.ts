Given an array A of n elements, sort the array according to the following relations :  

	•	￼
	•	, if i is even,  ∀ 1 <= i < n
	•	￼
	•	, if i is odd ,  ∀ 1 <= i < n

Input : A[] = {1, 2, 2, 1}
Output :  1 2 1 2
Explanation : 
For 1st element, 1  1, i = 2 is even.
3rd element, 1  1, i = 4 is even.
Input : A[] = {1, 3, 2}
Output : 1 3 2
Explanation : 
Here, the array is also sorted as per the conditions. 
1  1 and 2 < 3.

Method 1:
Observe that array consists of [n/2] even positioned elements. If we assign the largest [n/2] elements to the even positions and the rest of the elements to the odd positions, our problem is solved. Because element at the odd position will always be less than the element at the even position as it is the maximum element and vice versa. Sort the array and assign the first [n/2] elements at even positions.

// JavaScript program to rearrange the elements
// in array such that even positioned are
// greater than odd positioned elements
 
    function assign(a, n)
    {
  
        // Sort the array
        a.sort();
  
        let ans = [];
        let p = 0, q = n - 1;
        for (let i = 0; i < n; i++) {
  
            // Assign even indexes with maximum elements
            if ((i + 1) % 2 == 0)
                ans[i] = a[q--];
  
            // Assign odd indexes with remaining elements
            else
                ans[i] = a[p++];
        }
  
        // Print result
        for (let i = 0; i < n; i++)
            document.write(ans[i] + " ");
    }
 
// Driver code
 
        let A = [ 1, 3, 2, 2, 5 ];
        let n = A.length;
        assign(A, n);

Output
1 5 2 3 2 


Time Complexity: O(n * log n) Auxiliary Space: O(n), since n extra space has been taken.
Method 2:
One other approach is to traverse the array from the first element till n-1 and swap the element with the next one if the condition is not satisfied. This is implemented as follows: 

// JavaScript program to rearrange the elements
// in the array such that even positioned are
// greater than odd positioned elements
 
  function rearrange(arr, n)
  {
    for(let i = 1; i < n; i++)
    {
  
      // if index is even
      if(i % 2 == 0)
      {
        if(arr[i] < arr[i - 1])
        {
  
          // swap two elements
          let temp = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = temp;
        }
      }
  
      // if index is odd
      else
      {
        if (arr[i] > arr[i - 1])
        {
  
          // swap two elements
          let temp = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = temp;
        }
      }
    }
  
    for (let i = 0; i < n; i++)
    {
      document.write(arr[i] + " ");
    }
  }
      
 
// Driver code
         
    let n = 5;
    let arr = [1, 3, 2, 2, 5];
    rearrange(arr, n);
                   

Output
3 1 2 2 5 

