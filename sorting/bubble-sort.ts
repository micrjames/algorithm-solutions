export const bubS = (arr: number[]): number[] => {
   const n = arr.length;
   // let temp: number;
   let swapped: boolean;
   for(let i = 0; i < n - 1; i++) { 
	  swapped = false;
	  for(let j = 0; j < n - i - 1; j++) {
		 if(arr[j] > arr[j + 1]) {
			/*
			temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		   */
		   [arr[j], arr[j+1]] = [arr[j+1], arr[j]];

		   swapped = true;
		 }
	  }

	  if(swapped == false) break;
   }
   return arr;
};
