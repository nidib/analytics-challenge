import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class TableContent extends PureComponent {
	constructor(props) {
		super(props);

		this.handleButton = this.handleButton.bind(this);
	}

	getFormattedPrice(price) {
		const localeOptions = { type: 'currency', currency: 'USD' };
		const formattedValue = price.toFixed(2).toLocaleString('en-US', localeOptions);

		return `$${formattedValue}`;
	}

	handleButton({ target }) {
		const { history } = this.props;
		const { id } = target;

		history.push(`/view/?s=${id}`);
	}

	renderCheckbox(symbol) {
		const { handleCheckbox } = this.props;

		return (
			<input
				id={symbol}
				type={'checkbox'}
				onChange={handleCheckbox}
			/>
		);
	}

	renderViewButton(symbol) {
		return (
			<input
				id={symbol}
				type={'button'}
				value={'→'}
				onClick={this.handleButton}
			/>
		);
	}

	render() {
		const { content } = this.props;
		const tableContent = content.map((item, index) => {
			const { symbol, name, price } = item;
			const formattedPrice = this.getFormattedPrice(price);

			return (
				<tr key={index}>
					<td>{this.renderCheckbox(symbol)}</td>
					<td>{symbol}</td>
					<td>{name}</td>
					<td>{formattedPrice}</td>
					<td>{this.renderViewButton(symbol)}</td>
				</tr>
			);
		});

		return (
			<tbody>
				{ tableContent }
			</tbody>
		);
	}
}

TableContent.displayName = 'Components/Table/TableContent';

TableContent.propTypes = {
	handleCheckbox: PropTypes.func.isRequired,
	content: PropTypes.arrayOf(PropTypes.shape({
		symbol: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})).isRequired,
	history: PropTypes.object
};

export default TableContent;