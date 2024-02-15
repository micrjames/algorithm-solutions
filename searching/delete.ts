 In the delete operation, the element to be deleted is searched using binary search, and then the delete operation is performed followed by shifting the elements.

  
    /* Function to delete an element */
    function deleteElement( arr,  n,  key) 
    { 
        // Find position of element to be deleted 
        let pos = binarySearch(arr, 0, n - 1, key); 
  
        if (pos == -1) { 
            document.write("Element not found"); 
            return n; 
        } 
  
        // Deleting element 
        let i; 
        for (i = pos; i < n - 1; i++) 
            arr[i] = arr[i + 1]; 
  
        return n - 1; 
    } 
  
    /* Driver Code */
      
        let i; 
        let arr = [ 10, 20, 30, 40, 50 ]; 
  
        let n = arr.length; 
        let key = 30; 
  
        document.write("Array before deletion:\n"); 
        for (i = 0; i < n; i++) 
            document.write(arr[i] + " "); 
  
        n = deleteElement(arr, n, key); 
  
        document.write("<br>"+"Array after deletion:\n"); 
        for (i = 0; i < n; i++) 
            document.write(arr[i] + " "); 
 // this code is contributed by shivanisinghss2110 
