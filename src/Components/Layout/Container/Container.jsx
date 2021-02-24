import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
	return (
		<div className={'container'}>
			{children}
		</div>
	);
};

Container.displayName = 'Components/Layout/Container';

Container.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default Container;