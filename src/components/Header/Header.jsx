import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Header/Header.module.css';

const Header = (props) => {
	const { divider, title, subtitle } = props;

	function renderH2() {
		if (!title) {
			return null;
		}

		return <h2>{ title }</h2>;
	}

	function renderH3() {
		if (!subtitle) {
			return null;
		}

		return <h3>{ subtitle }</h3>;
	}

	function renderDivider() {
		if (!divider) {
			return null;
		}

		return <hr />;
	}

	return (
		<div className={styles.header}>
			{ renderH2() }
			{ renderH3() }
			{ renderDivider() }
		</div>
	);
};

Header.displayName = 'components/Header';

Header.propTypes = {
	divider: PropTypes.bool,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string
};

Header.defaultProps = {
	divider: false,
	subtitle: null
};

export default Header;