import React, { PureComponent } from 'react';
import fetch from 'node-fetch';
import Container from 'components/Layout/Container/Container';
import ChartViewer from 'components/Charts/ChartViewer/ChartViewer';
import { financialStatementToList } from 'utils/apiConverters/apiConverters';
import viewSections from 'utils/constants/viewConstants';
import { getURLParamValue } from 'utils/helpers/commonHelpers';

class View extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data: null,
			fetchError: false,
			hasParams: false
		};
	}

	componentDidMount() {
		const companies = getURLParamValue(window.location, 'q') || null;
		const hasParams = Boolean(companies);

		this.setState({ hasParams });

		if (hasParams) {
			this.fetchCompanies(companies);
		}
	}

	handleData(data) {
		this.setState({ data: financialStatementToList(data) });
	}

	handleError() {
		this.setState({ fetchError: true });
	}

	async fetchCompanies(companies) {
		const urlWithParams = `${window.location.origin}/api/multiple?q=${companies}`;
		let data, response;

		try {
			response = await fetch(urlWithParams);
			data = await response.json();

			this.handleData(data);
		} catch {
			this.handleError();
		}
	}

	renderErrorMessage() {
		const { data, fetchError, hasParams } = this.state;

		if (fetchError) {
			return <p>Something went wrong...</p>;
		}

		if (!hasParams || !data) {
			return <p>Loading...</p>;
		}

		if (!data.length) {
			return <p>Could not find what you are looking for</p>;
		}

		return null;
	}

	renderChartViewer() {
		const { data } = this.state;

		return <ChartViewer companiesData={data} template={viewSections} />;
	}

	render() {
		const { data, fetchError, hasParams } = this.state;
		let content = null;

		if (!data || !data.length || fetchError || !hasParams) {
			content = this.renderErrorMessage();
		} else {
			content = this.renderChartViewer();
		}

		return (
			<Container>
				{ content }
			</Container>
		);
	}
}

View.displayName = 'pages/View';

export default View;