const { bubS } = require("../sorting/bubble-sort");

const cases: number[][] = [
   [1, 2, 3, 4, 5],
   [1, 3, 2, 4, 5],
   [1, 2, 4, 3, 5],
   [5, 4, 3, 2, 1]
];
describe("An array sorted by 'bubble sort'.", () => {
   test.each(cases)
   	("Should be in ascending order.", () => {
	  const expected = [1, 2, 3, 4, 5];
	  expect(bubS([5, 4, 3, 2, 1])).toEqual(
		 expect.arrayContaining(expected)
	  );
   });
});
