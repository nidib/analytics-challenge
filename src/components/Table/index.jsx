import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableContent from './TableContent';
import { dynamicSort } from '../../helpers/commonHelpers';
import { table } from './styles.module.css';

class Table extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			content: props.data.content,
			orderBy: ''
		};

		this.handleHeaderClick = this.handleHeaderClick.bind(this);
	}

	handleHeaderClick(className) {
		const { content } = this.state;

		this.setState(prevState => {
			if (prevState.orderBy === className)
				return {
					orderBy: className,
					content: [...content].reverse()
				};

			return {
				orderBy: className,
				content: [...content].sort(dynamicSort(className))
			};
		});
	}

	renderHeaders() {
		const { data } = this.props;
		let fields;

		if (!data || !Array.isArray(data.fields))
			return null;

		fields = data.fields;

		return (
			<TableHeader
				fields={fields}
				handleHeaderClick={this.handleHeaderClick}
			/>
		);
	}

	renderRows() {
		const { data, handleCheckbox } = this.props;
		const { content, orderBy } = this.state;

		if (!data || !Array.isArray(content))
			return null;

		return (
			<TableContent
				content={content}
				orderBy={orderBy}
				handleCheckbox={handleCheckbox}
			/>
		);
	}

	render() {
		return (
			<table className={table}>
				{ this.renderHeaders() }
				{ this.renderRows() }
			</table>
		);
	}
}

Table.displayName = 'components/Table';

Table.propTypes = {
	data: PropTypes.shape({
		fields: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			columnName: PropTypes.string
		})),
		content: PropTypes.arrayOf(PropTypes.shape({
			symbol: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired
		})),
	}).isRequired,
	handleCheckbox: PropTypes.func.isRequired
};

export default Table;