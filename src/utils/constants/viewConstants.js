import { LINE } from 'utils/constants/chartConstants';

export default [
	{
		oid: 'klpbcf8k',
		title: 'Revenue',
		series: [
			{ key: 'Revenue' },
			{ key: 'Revenue Growth', index: 1, chartType: LINE }
		]
	},
	{
		oid: 'klpbd5vj',
		title: 'EBITDA',
		subtitle: 'sub ebitda',
		series: [
			{ key: 'EBITDA' },
			{ key: 'EBITDA Margin', index: 1, chartType: LINE }
		]
	},
	{
		oid: 'klpbdo7v',
		title: 'General Balance',
		series: [
			{ key: 'Revenue', chartType: LINE },
			{ key: 'EBITDA', chartType: LINE },
			{ key: 'Operating Expenses', chartType: LINE },
			{ key: 'Consolidated Income', chartType: LINE },
		]
	}
];