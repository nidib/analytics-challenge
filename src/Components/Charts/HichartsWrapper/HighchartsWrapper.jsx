import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { merge } from 'lodash';
import defaultTemplate from './HighchartsWrapperTemplate';

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

HighartsWrapper.displayName = 'Components/HichartsWrapper';

HighartsWrapper.propTypes = {
	options: PropTypes.object.isRequired
};

export default HighartsWrapper;