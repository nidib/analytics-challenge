import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { merge } from 'lodash';
import defaultTemplate from './defaultTemplate';

class HighartsWrapper extends PureComponent {
	getFinalOptions() {
		const { options } = this.props;

		return merge({}, defaultTemplate, options);
	}
	render() {
		const options = this.getFinalOptions();

		return (
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
			/>
		);
	}
}

HighartsWrapper.displayName = 'components/HichartsWrapper';

HighartsWrapper.propTypes = {
	options: PropTypes.object.isRequired
};

export default HighartsWrapper;