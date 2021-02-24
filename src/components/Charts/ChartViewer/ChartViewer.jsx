import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CColumn from 'components/Charts/CColumn/CColumn';

class ChartViewer extends PureComponent {
	constructor(props) {
		super(props);

		this.categories = this.getCategories();
	}

	getCategories() {
		const { data } = this.props;
		const { financials } = data[0];
		const toYear = string => (new Date(string)).getFullYear();

		return financials.map(year => toYear(year.date)).reverse();
	}

	getSeries(categories) {
		const { data } = this.props;

		return data.map(company => {
			return categories.map(category => {
				return {
					data: this.getChartData(company.symbol, category.name),
					name: `${company.symbol} ${category.name}`,
					type: category.type || 'column',
					yAxis: category.index || 0
				};
			});
		}).flat();
	}

	getChartData(symbol, info) {
		const { data } = this.props;
		const { financials } = data.find(company => company.symbol === symbol);

		return financials.map(year => parseFloat(year[info], 10)).reverse();
	}

	renderCharts(seriesConfig) {
		const { categories } = this;

		return seriesConfig.map((serieConfig, index) => {
			const key = `${serieConfig.name}${index}${Math.random()}`;
			const series = this.getSeries(serieConfig);
			const options = {
				series,
				xAxis: { categories },
				yAxis: serieConfig.map(serie => ({ opposite: !!serie.index })).slice(0, 2)
			};

			return (
				<div key={key}>
					<h3>{serieConfig[0].name}</h3>
					<CColumn options={options} />
				</div>
			);
		});
	}

	render() {
		const seriesConfig = [
			[
				{ name: 'Revenue' },
				{ name: 'Revenue Growth', index: 1, type: 'line' }
			],
			[
				{ name: 'EBITDA' },
				{ name: 'EBITDA Margin', index: 1, type: 'line' }
			],
			[
				{ name: 'Revenue', type: 'line' },
				{ name: 'EBITDA', type: 'line' },
				{ name: 'Operating Expenses', type: 'line' },
				{ name: 'Consolidated Income', type: 'line' },
			]
		];

		return this.renderCharts(seriesConfig);
	}
}

ChartViewer.displayName = 'Components/Charts/ChartViewer';

ChartViewer.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ChartViewer;