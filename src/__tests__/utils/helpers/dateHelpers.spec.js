import { expect } from 'chai';
import { stringToDate } from 'utils/helpers/dateHelpers';

describe('dateHelpers tests', () => {
	describe('stringToDate tests', () => {
		it('should return the given string as a javascript date format', () => {
			const input = '2019-11-05';

			expect(stringToDate(input)).to.deep.equal(new Date(input));
		});
	});
});