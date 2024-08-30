export const selS = (arr: number[]): number[] => {
   const n = arr.length;
   let min_idx: number;
   for(let i = 0; i < n - 1; i++) { 
	  min_idx = i;
	  for(let j = i+1; j < n; j++) {
		 if(arr[j] < arr[min_idx])
			min_idx = j;
	  }
	  [arr[min_idx], arr[i]] = [arr[i], arr[min_idx]];
   }
   return arr;
};
