import { financialStatementToList } from 'Utils/apiConverters/apiConverters';
import { expect } from 'chai';

describe('apiConverters tests', () => {
	describe('financialStatementToList tests', () => {
		it('should return the object in an array', () => {
			const objectData = { symbol: 'AAPL', financials: [{}] };
			const expectedOutput = [objectData];

			expect(financialStatementToList(objectData)).to.deep.equal(expectedOutput);
		});

		it('should return financialStatementList if such property exists', () => {
			const objectData = { financialStatementList: [{ symbol: 'AAPL', financials: [{}] }] };

			expect(financialStatementToList(objectData)).to.deep.equal(objectData.financialStatementList);
		});

		it('should return undefined if none of the above occur', () => {
			const objectData = {};

			expect(financialStatementToList(objectData)).to.be.equal(undefined);
		});
	});
});