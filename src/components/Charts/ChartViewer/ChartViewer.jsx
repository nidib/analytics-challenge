import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CColumn from 'components/Charts/CColumn/CColumn';
import styles from 'components/Charts/ChartViewer/ChartViewer.module.css';
import allChartTypes, { COLUMN } from 'utils/constants/chartConstants';
import { safeReverse } from 'utils/helpers/arrayHelpers';
import { stringToDate } from 'utils/helpers/dateHelpers';

class ChartViewer extends PureComponent {
	constructor(props) {
		super(props);

		this.categories = this.getCategories();
	}

	getCategories() {
		const { companiesData } = this.props;
		const companiesDataLength = companiesData.map(company => company.financials.length);
		const indexOfLongest = companiesDataLength.indexOf(Math.max(...companiesDataLength));
		const categories = companiesData[indexOfLongest].financials.map(year => {
			return stringToDate(year.date).getFullYear();
		});

		return safeReverse(categories);
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
		const data = this.categories.map(year => {
			const allDataFromYear = financials.find(({ date }) => stringToDate(date).getFullYear() === year);
			const hasData = allDataFromYear !== undefined;
			const chosenDataInfo = hasData ? parseFloat(allDataFromYear[info]) : 0;

			return chosenDataInfo;
		});

		return data;
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
		const { template } = this.props;

		return (
			<div className={styles.chartViewer}>
				{ this.renderSections(template) }
			</div>
		);
	}
}

ChartViewer.displayName = 'components/Charts/ChartViewer';

ChartViewer.propTypes = {
	companiesData: PropTypes.arrayOf(PropTypes.object).isRequired,
	template: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string,
		series: PropTypes.arrayOf(PropTypes.shape({
			key: PropTypes.string.isRequired,
			index: PropTypes.oneOf([0, 1]),
			chartType: PropTypes.oneOf(allChartTypes)
		})).isRequired
	})).isRequired
};

export default ChartViewer;