import { AREA, COLUMN, LINE } from 'utils/constants/chartConstants';

export default [
	{
		id: 0,
		title: 'Revenue',
		series: [
			{ key: 'Revenue' },
			{ key: 'Revenue Growth', index: 1, chartType: LINE }
		]
	},
	{
		id: 1,
		title: 'EBITDA',
		series: [
			{ key: 'EBITDA' },
			{ key: 'EBITDA Margin', index: 1, chartType: LINE }
		]
	},
	{
		id: 2,
		title: 'General Balance',
		series: [
			{ key: 'Revenue', chartType: LINE },
			{ key: 'EBITDA', chartType: LINE },
			{ key: 'Operating Expenses', chartType: LINE },
			{ key: 'Consolidated Income', chartType: LINE },
		]
	},
	{
		id: 3,
		title: 'Free cash flow margin',
		series: [
			{ key: 'Free Cash Flow margin', chartType: AREA }
		]
	},
	{
		id: 4,
		title: 'EPS',
		series: [
			{ key: 'EPS', chartType: COLUMN }
		]
	}
];