import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subtitle }) => {
	const h2 = title ? <h2>{title}</h2> : null;
	const h3 = subtitle ? <h3>{title}</h3> : null;

	return (
		<div>
			{ h2 }
			{ h3 }
		</div>
	);
};

Header.displayName = 'components/Header';

Header.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string
};

Header.defaultProps = {
	subtitle: null
};

export default Header;