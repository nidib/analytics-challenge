import { expect } from 'chai';
import { getURLParamValue, hash } from 'utils/helpers/commonHelpers';

describe('commonHelpers tests', () => {
	describe('getURLParamValue tests', () => {
		it('should return the url param value', () => {
			const window = { location: { search: '?q=AAPL,GOOGL' } };

			expect(getURLParamValue(window.location, 'q')).to.be.equal('AAPL,GOOGL');
		});
	});

	describe('hash tests', () => {
		it('should return an 8-digit random string', () => {
			expect(hash().length).to.be.equal(8);
		});
	});
});