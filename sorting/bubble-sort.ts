exports.bubS = (arr: number[]): number[] => {
   const n = arr.length;
   // let temp: number;
   for(let i = 0; i < n - 1; i++) { 
	  for(let j = 0; j < n - i - 1; j++) {
		 if(arr[j] > arr[j + 1]) {
			/*
			temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		   */
		   [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
		 }
	  }
   }
   console.log(arr);
   return arr;
};
