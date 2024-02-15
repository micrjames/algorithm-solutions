// JavaScript program to insert an 
// element in a sorted array 
    // Inserts a key in arr[] of given 
    // capacity.  n is current size of arr[]. 
    // This function returns n+1 if insertion 
    // is successful, else n. 
    function insertSorted( arr, n, key, capacity) 
    { 
      
        // Cannot insert more elements if n is already 
        // more than or equal to capacity 
        if (n >= capacity) 
            return n; 
  
        var i; 
        for (i = n - 1; (i >= 0 && arr[i] > key); i--) 
            arr[i + 1] = arr[i]; 
  
        arr[i + 1] = key; 
  
        return (n + 1); 
    } 
  
    /* Driver program to test above function */
        var arr = new Array(20); 
        arr[0] = 12; 
        arr[1] = 16; 
        arr[2] = 20; 
        arr[3] = 40; 
        arr[4] = 50; 
        arr[5] = 70; 
        var capacity = arr.length; 
        var n = 6; 
        var key = 26; 
  
        document.write("\nBefore Insertion: "); 
        for (var i = 0; i < n; i++) 
            document.write(arr[i] + " "); 
  
        // Inserting key 
        n = insertSorted(arr, n, key, capacity); 
  
        document.write("<br>" +"\nAfter Insertion: "); 
        for (var i = 0; i < n; i++) 
            document.write(arr[i] + " "); 


