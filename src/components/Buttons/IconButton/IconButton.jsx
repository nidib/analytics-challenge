import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons/_Button/Button';
import { emptyFunction } from 'utils/helpers/commonHelpers';
import styles from 'components/Buttons/IconButton/IconButton.module.css';

const IconButton = props => {
	const { icon, ...genericButtonProps } = props;

	return (
		<Button
			className={styles.iconButton}
			icon={icon}
			{...genericButtonProps}
		/>
	);
};

IconButton.displayName = 'components/Buttons/IconButton';

IconButton.propTypes = {
	icon: PropTypes.node.isRequired,
	value: PropTypes.string,
	onClick: PropTypes.func
};

IconButton.defaultProps = {
	value: '',
	onClick: emptyFunction
};

export default IconButton;