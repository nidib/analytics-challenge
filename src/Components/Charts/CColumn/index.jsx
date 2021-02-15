import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { merge } from 'lodash';
import defaultColumnTemplate from './defaultColumnTemplate';
import HighchartsWrapper from '../HichartsWrapper';

class CColumn extends PureComponent {
	getColumnOptions() {
		const { options } = this.props;

		return merge({}, defaultColumnTemplate, options);
	}

	render() {
		const options = this.getColumnOptions();

		return (
			<HighchartsWrapper options={options} />
		);
	}
}

CColumn.displayName = 'Components/Charts/Column';

CColumn.propTypes = {
	options: PropTypes.object.isRequired
};

export default CColumn;