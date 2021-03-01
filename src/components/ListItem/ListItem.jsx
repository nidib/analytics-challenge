import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
	shouldComponentUpdate(nextProps) {
		const { id } = this.props;

		return id !== nextProps.id;
	}

	render() {
		const { children, id } = this.props;

		return <li id={id}>{ children }</li>;
	}
}

ListItem.displayName = 'components/ListItem';

ListItem.propTypes = {
	id: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired
};

export default ListItem;