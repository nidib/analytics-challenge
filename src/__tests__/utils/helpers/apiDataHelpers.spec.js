import { expect } from 'chai';
import { getCategories } from 'utils/helpers/apiDataHelpers';

describe('apiDataHelpers tests', () => {
	describe('getCategories tests', () => {
		it('should return the longest category in a reversed array', () => {
			const data = [
				{
					symbol: 'AAPL',
					financials: [{ date: '2009-03-20' }, { date: '2010-03-20' }, { date: '2011-03-20' }]
				},
				{
					symbol: 'GOOGL',
					financials: [{ date: '2009-03-20' }, { date: '2010-03-20' }]
				}
			];

			expect(getCategories(data)).to.be.deep.equal(['2009', '2010', '2011'].reverse());
		});
	});
});