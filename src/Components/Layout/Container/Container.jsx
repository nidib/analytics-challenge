import React from 'react';
import PropTypes from 'prop-types';

const Container = props => {
	const { children } = props;

	return (
		<div className='container'>{children}</div>
	);
};

Container.displayName = 'Components/Layout/Container';

Container.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired
};

export default Container;