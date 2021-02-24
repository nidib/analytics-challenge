import React, { PureComponent } from 'react';
import Container from 'Components/Layout/Container/Container';
import ChartViewer from 'Components/Charts/ChartViewer/ChartViewer';
import { financialStatementToList } from 'Utils/apiConverters/apiConverters';
import { getURLParamValue } from 'Utils/helpers/commonHelpers';

class View extends PureComponent {
	constructor(props) {
		super(props);
;
		this.state = {
			data: null,
			hasParams: false
		};
	}

	componentDidMount() {
		const companies = getURLParamValue(window.location, 'q') || null;
		
		this.setState({
			hasParams: Boolean(companies)
		}, () => {
			fetch('/api/multiple' + `?q=${this.companies}`)
				.then(response => response.json())
				.then(data => this.handleData(data));
		});
	}

	handleData(data) {
		const handledData = financialStatementToList(data);

		this.setState({ data: handledData });
	}

	render() {
		const { data, hasParams } = this.state;

		if (!hasParams || !data)
			return (
				<Container>
					<p>loading...</p>
				</Container>
			);

		return (
			<Container>
				<ChartViewer data={data} />
			</Container>
		);
	}
}

View.displayName = 'Pages/View';

export default View;