function binarySearch( arr, low, high, key) 
{ 
    if (high < low) 
        return -1; 
        /*low + (high - low)/2;*/
    let mid = Math.trunc((low + high) / 2);  
    if (key == arr[mid]) 
        return mid; 
    if (key > arr[mid]) 
        return binarySearch(arr, (mid + 1), high, key); 
    return binarySearch(arr, low, (mid - 1), key); 
} 
