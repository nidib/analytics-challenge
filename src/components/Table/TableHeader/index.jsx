import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableHeader extends PureComponent {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick({ currentTarget }) {
		this.props.handleHeaderClick(currentTarget.className);
	}

	render() {
		const { fields } = this.props;
		const tableHeaders = fields.map(({ id, columnName }) => {
			return (
				<th
					key={id}
					className={id}
					onClick={this.handleClick}
				>
					{columnName || ''}
				</th>
			);
		});

		return (
			<thead>
				<tr>
					{tableHeaders}
				</tr>
			</thead>
		);
	}
}

TableHeader.displayName = 'components/Table/TableHeader';

TableHeader.propTypes = {
	fields: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		columnName: PropTypes.string
	})).isRequired,
	handleHeaderClick: PropTypes.func.isRequired
};

export default TableHeader;