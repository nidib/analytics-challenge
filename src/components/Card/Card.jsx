import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Card/Card.module.css';

const Card = (props) => {
	const { children } = props;

	return (
		<div className={styles.card}>
			{ children }
		</div>
	);
};

Card.displayName = 'components/Card';

Card.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired
};

export default memo(Card);