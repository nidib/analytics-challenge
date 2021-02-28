import React from 'react';
import PropTypes from 'prop-types';
import { emptyFunction } from 'utils/helpers/commonHelpers';

const Button = (props) => {
	const {
		value,
		onClick,
		icon,
		...otherProps
	} = props;

	return (
		<button type='button' onClick={onClick} {...otherProps}>
			{ icon }
			{ value }
		</button>
	);
};

Button.displayName = 'components/Buttons/Button';

Button.propTypes = {
	icon: PropTypes.node,
	value: PropTypes.string.isRequired,
	onClick: PropTypes.func
};

Button.defaultProps = {
	icon: null,
	onClick: emptyFunction
};

export default Button;