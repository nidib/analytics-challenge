import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CColumn from 'components/Charts/CColumn/CColumn';
import { COLUMN, LINE } from 'utils/constants/chartConstants';
import styles from 'components/Charts/ChartViewer/ChartViewer.module.css';

const viewSections = [
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
	}
];

class ChartViewer extends PureComponent {
	constructor(props) {
		super(props);

		this.categories = this.getCategories();
	}

	getCategories() {
		const { companiesData } = this.props;
		const { financials } = companiesData[0];
		const toYear = string => (new Date(string)).getFullYear();

		return financials.map(year => toYear(year.date)).reverse();
	}

	getSeries(keys) {
		const { companiesData } = this.props;
		const series = [];

		companiesData.forEach(({ symbol }) => {
			keys.forEach(({ key, chartType, index }) => {
				series.push({
					data: this.getChartData(symbol, key),
					name: `${symbol} ${key}`,
					type: chartType || COLUMN,
					yAxis: index || 0
				});
			});
		});

		return series;
	}

	getChartData(symbol, info) {
		const { companiesData } = this.props;
		const { financials } = companiesData.find(company => company.symbol === symbol);
		const possiblyPercentage = info.toLowerCase().includes('growth');
		const converter = possiblyPercentage ? 100 : 1;

		return financials.map(year => {
			return parseFloat((parseFloat(year[info]) * converter).toFixed(2));
		}).reverse();
	}

	renderChartFromSection(section) {
		const options = {
			series: this.getSeries(section.series),
			xAxis: { categories: this.categories },
			yAxis: section.series.map(item => ({ opposite: !!item.index })).slice(0, 2)
		};

		return (
			<div>
				<CColumn options={options} />
			</div>
		);
	}

	renderSections(seriesConfig) {
		const sections = seriesConfig;
		const chartsSections = sections.map(section => (
			<div className={styles.card} key={section.id}>
				<h3>{section.title}</h3>
				{ this.renderChartFromSection(section) }
			</div>
		));

		return chartsSections;
	}

	render() {
		return (
			<div className={styles.chartViewer}>
				{ this.renderSections(viewSections) }
			</div>
		);
	}
}

ChartViewer.displayName = 'components/Charts/ChartViewer';

ChartViewer.propTypes = {
	companiesData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ChartViewer;