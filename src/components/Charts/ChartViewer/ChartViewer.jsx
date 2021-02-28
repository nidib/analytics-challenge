import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';
import CColumn from 'components/Charts/CColumn/CColumn';
import Card from 'components/Card/Card';
import styles from 'components/Charts/ChartViewer/ChartViewer.module.css';
import Header from 'components/Header/Header';
import allChartTypes, { AREA, COLUMN } from 'utils/constants/chartConstants';
import { safeReverse, safeSplice } from 'utils/helpers/arrayHelpers';
import { stringToDate } from 'utils/helpers/dateHelpers';
import Button from 'components/Buttons/_Button/Button';

class ChartViewer extends PureComponent {
	constructor(props) {
		super(props);

		this.categories = this.getCategories();
		this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);

		this.state = {
			template: props.template
		};
	}

	handleAddButtonClick() {
		this.setState(prevState => ({
			template: [
				...prevState.template,
				{
					id: Number(new Date()).toString(36),
					title: String(Math.random()),
					series: [
						{ key: 'Free Cash Flow margin', chartType: AREA }
					]
				}
			]
		}), () => {
			window.scrollTo({
				top: document.body.offsetHeight,
				behavior: 'smooth'
			});
		});
	}

	handleDeleteClick(e) {
		const { template } = this.state;
		const clickedItemIndex = template.findIndex(item => String(item.id) === String(e.currentTarget.id));
		const newList = safeSplice(template, clickedItemIndex, 1);

		this.setState({ template: newList });
	}

	getCategories() {
		const { companiesData } = this.props;
		const companiesDataLength = companiesData.map(company => company.financials.length);
		const indexOfLongest = companiesDataLength.indexOf(Math.max(...companiesDataLength));
		const companyWithLongesDateRecord = companiesData[indexOfLongest];
		const categories = companyWithLongesDateRecord.financials.map(year => stringToDate(year.date).getFullYear());

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

		return <CColumn options={options} />;
	}

	renderSections() {
		const { template: sections } = this.state;
		const chartsSections = sections.map(section => (
			<Card className={styles.card} key={section.id}>
				<DeleteButton id={section.id} title='Delete card' onClick={this.handleDeleteClick} />
				<Header title={section.title} />
				{ this.renderChartFromSection(section) }
			</Card>
		));

		return chartsSections;
	}

	renderAddButton() {
		return (
			<div>
				<Button value='Add' onClick={this.handleAddButtonClick} />
			</div>
		);
	}

	render() {
		return (
			<div className={styles.chartViewer}>
				{ this.renderSections() }
				{ this.renderAddButton() }
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