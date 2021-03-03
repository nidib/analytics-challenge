import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/Buttons/IconButton/IconButton';
import styles from 'components/Card/Card.module.css';
import Header from 'components/Header/Header';
import { Delete } from 'components/Icons/Icons';

class Card extends React.PureComponent {
	renderDeleteButton() {
		const { onDelete } = this.props;
		let deleteButtonContainerStyles;

		if (!onDelete) {
			return null;
		}

		deleteButtonContainerStyles = {
			position: 'absolute',
			top: 0,
			right: 0,
			margin: '30px 30px 0 0'
		};

		return (
			<div style={deleteButtonContainerStyles}>
				<IconButton icon={Delete} title='Delete card' onClick={onDelete} />
			</div>
		);
	}

	render() {
		const { children, title, subtitle } = this.props;

		return (
			<div className={styles.card}>
				<div className={styles.cardHeader}>
					<Header title={title} subtitle={subtitle} />
					{ this.renderDeleteButton() }
				</div>
				<div className={styles.cardContent}>
					{ children }
				</div>
			</div>
		);
	}
}

Card.displayName = 'components/Card';

Card.propTypes = {
	onDelete: PropTypes.func,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired,
	title: PropTypes.string,
	subtitle: PropTypes.string
};

Card.defaultProps = {
	onDelete: null,
	title: '',
	subtitle: ''
};

export default Card;