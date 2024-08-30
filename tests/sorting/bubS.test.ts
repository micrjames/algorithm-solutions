import { bubS } from "../../sorting/bubble-sort";
import { Range } from "../../Range/Range";
import { shuffle } from "../../shuffle/shuffle";
import { Random } from "../../Random/Random";

const numCases = new Random(4, 10).integer;
const seqSize = 5;
let cases: number[][] = [];
cases[0] = [...new Range(seqSize)];

for(let i = 1; i < numCases; i++) {
   cases[i] = shuffle([...cases[0]]);
}

describe("An array sorted by 'bubble sort'.", () => {
   test("Should be an array.", () => {
	  for(let i = 0; i < cases.length; i++) {
	  	 expect(bubS(cases[i])).toEqual(expect.arrayContaining([expect.anything()]));
	  }
   });
   test("Should be in ascending order.", () => {
	  const expected = [0, 1, 2, 3, 4];
	  for(let i = 0; i < cases.length; i++) {
	  	 expect(bubS(cases[i])).toEqual(expected);
	  }
   });
});
