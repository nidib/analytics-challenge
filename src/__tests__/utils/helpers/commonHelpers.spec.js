import { expect } from 'chai';
import { dynamicSort, toggleAddToArray } from 'Utils/helpers/commonHelpers';

describe('commonHelpers tests', () => {
	describe('dynamicSort tests', () => {
		const content = [
			{
				symbol: 'AAPL',
				name: 'Apple Inc.',
				price: 153.2
			},
			{
				symbol: 'GOOGL',
				name: 'Google',
				price: 89.9
			},
			{
				symbol: 'FB',
				name: 'Facebook',
				price: 90.9
			},
			{
				symbol: 'MSFT',
				name: 'Microsoft',
				price: 90.9
			}
		];

		it('should sort an array of objects by a given property', () => {
			const input = [...content].sort(dynamicSort('price'));
			const expectedOutput = [
				{
					symbol: 'GOOGL',
					name: 'Google',
					price: 89.9
				},
				{
					symbol: 'FB',
					name: 'Facebook',
					price: 90.9
				},
				{
					symbol: 'MSFT',
					name: 'Microsoft',
					price: 90.9
				},
				{
					symbol: 'AAPL',
					name: 'Apple Inc.',
					price: 153.2
				},
			];

			expect(input).to.deep.equal(expectedOutput);
		});

		it('should reverse an array of objects by a given property', () => {
			const input = [...content].sort(dynamicSort('-price'));
			const expectedOutput = [
				{
					symbol: 'AAPL',
					name: 'Apple Inc.',
					price: 153.2
				},
				{
					symbol: 'FB',
					name: 'Facebook',
					price: 90.9
				},
				{
					symbol: 'MSFT',
					name: 'Microsoft',
					price: 90.9
				},
				{
					symbol: 'GOOGL',
					name: 'Google',
					price: 89.9
				},
			];

			expect(input).to.deep.equal(expectedOutput);
		});
	});

	describe('toggleAddToArray tests', () => {
		it('should return an array with the new item if it was not in it yet', () => {
			expect(toggleAddToArray([], 'apple')).to.deep.equal(['apple']);
			expect(toggleAddToArray(['apple'], 'banana')).to.deep.equal(['apple', 'banana']);
		});

		it('should return an array subtracted by the given item if it was already in it', () => {
			expect(toggleAddToArray(['apple', 'banana'], 'apple')).to.deep.equal(['banana']);
			expect(toggleAddToArray(['apple'], 'apple')).to.deep.equal([]);
		});
	});
});