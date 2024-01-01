const { bubS } = require("../sorting/bubble-sort");

describe("An array sorted by 'bubble sort'.", () => {
   test("Should be in ascending order.", () => {
	  const expected = [1, 2, 3, 4, 5];
	  expect(bubS([5, 4, 3, 2, 1])).toEqual(
		 expect.arrayContaining(expected)
	  );
   });
});
