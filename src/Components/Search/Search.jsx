import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { magnifier, search, searchBox } from './Search.module.css';

class Search extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			value: props.initialValue
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});

		this.props.handleChange(event);
	}

	handleClick() {
	}

	render() {
		const { placeholder, selectedItems } = this.props;
		const { value } = this.state;
		const isDisabled = selectedItems.length === 0;
		const buttonText = selectedItems.length > 1 ? `Compare (${selectedItems.length})` : 'View';

		return (
			<div className={search}>
				<div className={searchBox}>
					<div className={magnifier} />
					<input
						type={'text'}
						value={value}
						placeholder={placeholder}
						onChange={this.handleChange}
					/>
				</div>
				<input
					type={'button'}
					value={buttonText}
					disabled={isDisabled}
					onClick={this.handleClick}
				/>
			</div>
		);
	}
}

Search.displayName = 'Components/Search';

Search.propTypes = {
	placeholder: PropTypes.string.isRequired,
	initialValue: PropTypes.string,
	selectedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleChange: PropTypes.func.isRequired,
	history: PropTypes.object
};

Search.defaultProps = {
	initialValue: ''
};

export default Search;