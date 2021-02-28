import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons/_Button/Button';
import { emptyFunction } from 'utils/helpers/commonHelpers';
import styles from 'components/Buttons/DeleteButton/DeleteButton.module.css';

const icon = (
	<svg viewBox='0 0 24 24'>
		<path
			d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12
			12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12
			2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z'
		/>
	</svg>
);

const DeleteButton = ({ ...genericButtonProps }) => {
	return (
		<Button className={styles.deleteButton} icon={icon} {...genericButtonProps} />
	);
};

DeleteButton.displayName = 'components/Buttons/DeleteButton';

DeleteButton.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func
};

DeleteButton.defaultProps = {
	value: '',
	onClick: emptyFunction
};

export default DeleteButton;