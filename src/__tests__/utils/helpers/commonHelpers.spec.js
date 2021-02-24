import { safeSortBy, toggleAddToArray } from 'utils/helpers/commonHelpers';
import { expect } from 'chai';

describe('commonHelpers tests', () => {
	describe('safeSortBy tests', () => {
		const input = [
			{ name: 'Lucas', age: 18 },
			{ name: 'Anthom', age: 45 },
			{ name: 'Ana', age: 23 },
			{ name: 'Mark', age: 23 },
		];

		it('should sort the array of objects by a given property', () => {
			const output = [
				{ name: 'Ana', age: 23 },
				{ name: 'Anthom', age: 45 },
				{ name: 'Lucas', age: 18 },
				{ name: 'Mark', age: 23 },
			];

			expect(safeSortBy(input, 'name')).to.deep.equal(output);
		});

		it('should reverse sort the array of objects by a given property', () => {
			const output = [
				{ name: 'Anthom', age: 45 },
				{ name: 'Ana', age: 23 },
				{ name: 'Mark', age: 23 },
				{ name: 'Lucas', age: 18 },
			];

			expect(safeSortBy(input, 'age', true)).to.deep.equal(output);
		});
	});

	describe('toggleAddToArray tests', () => {
		const list = ['AAPL'];

		it('should add an item to an an arrary if it is not in it yet', () => {
			const expectedOutput = ['AAPL', 'GOOGL'];

			expect(toggleAddToArray(list, 'GOOGL')).to.deep.equal(expectedOutput);
		});

		it('should remove an item from an an arrary if it is already in it', () => {
			const expectedOutput = [];

			expect(toggleAddToArray(list, 'AAPL')).to.deep.equal(expectedOutput);
		});
	});
});