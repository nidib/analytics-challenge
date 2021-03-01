import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CColumn from 'components/Charts/CColumn/CColumn';
import { COLUMN } from 'utils/constants/chartConstants';
import { stringToDate } from 'utils/helpers/dateHelpers';

class ChartViewer extends PureComponent {
	getChartData(symbol, info) {
		const { categories, dimensions } = this.props;
		const { financials } = dimensions.find(company => company.symbol === symbol);
		const data = categories.map(year => {
			const allDataFromYear = financials.find(({ date }) => String(stringToDate(date).getFullYear()) === year);
			const hasData = allDataFromYear !== undefined;
			const chosenDataInfo = hasData ? parseFloat(allDataFromYear[info]) : 0;

			return chosenDataInfo;
		});

		return data;
	}

	getSeries() {
		const { dimensions, series } = this.props;
		const serieData = [];

		dimensions.forEach(({ symbol }) => {
			series.forEach(({ key, chartType, index }) => {
				serieData.push({
					data: this.getChartData(symbol, key),
					name: `${symbol} ${key}`,
					type: chartType || COLUMN,
					yAxis: index || 0
				});
			});
		});

		return serieData;
	}

	render() {
		const { categories, series } = this.props;
		const options = {
			series: this.getSeries(),
			xAxis: [{ categories }],
			yAxis: series.map(item => ({ opposite: !!item.index })).slice(0, 2)
		};

		return <CColumn options={options} />;
	}
}

ChartViewer.displayName = 'components/Charts/ChartViewer';

ChartViewer.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.string).isRequired,
	dimensions: PropTypes.arrayOf(PropTypes.object).isRequired,
	series: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ChartViewer;