import React, { PureComponent } from 'react';
import fetch from 'node-fetch';
import Container from 'Components/Layout/Container/Container';
import ChartViewer from 'Components/Charts/ChartViewer/ChartViewer';
import { financialStatementToList } from 'Utils/apiConverters/apiConverters';
import { getURLParamValue } from 'Utils/helpers/commonHelpers';

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
		const urlWithParams = `${process.env.URL}/api/multiple?q=${companies}`;
		let data, response;

		try {
			response = await fetch(urlWithParams);
			data = await response.json();

			this.handleData(data);
		} catch {
			this.handleError();
		}
	}

	render() {
		const { data, fetchError, hasParams } = this.state;

		if (fetchError) {
			return (
				<Container>
					<p>Something went wrong...</p>
				</Container>
			);
		}

		if (!hasParams || !data) {
			return (
				<Container>
					<p>Loading...</p>
				</Container>
			);
		}

		return (
			<Container>
				<ChartViewer data={data} />
			</Container>
		);
	}
}

View.displayName = 'Pages/View';

export default View;