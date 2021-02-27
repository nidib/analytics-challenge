import { expect } from 'chai';
import { getURLParamValue } from 'utils/helpers/commonHelpers';

describe('commonHelpers tests', () => {
	describe('getURLParamValue tests', () => {
		it('should return the url param value', () => {
			const window = { location: { search: '?q=AAPL,GOOGL' } };

			expect(getURLParamValue(window.location, 'q')).to.be.equal('AAPL,GOOGL');
		});
	});
});