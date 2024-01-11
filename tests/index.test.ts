const { bubS } = require("../sorting/bubble-sort");
const { shuffle } = require("../../shuffle/shuffle");
const { Range } = require("../../Range/Range");

const cases: number[][] = [
   Array(5),
   Array(5),
   Array(5),
   Array(5),
   Array(5)
];
cases.forEach(row => {
});

describe("An array sorted by 'bubble sort'.", () => {
   test.each(cases)
   	("Should be in ascending order.", () => {
	  const expected = [1, 2, 3, 4, 5];
	  expect(bubS([5, 4, 3, 2, 1])).toEqual(
		 expect.arrayContaining(expected)
	  );
   });
});

/*
test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  expect(a + b).toBe(expected);
});
*/
