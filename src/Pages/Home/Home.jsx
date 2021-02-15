import React, { PureComponent } from 'react';
import Container from 'Components/Layout/Container/Container';
import Search from 'Components/Search/Search';
import Table from 'Components/Table/Table';

const data = {
	fields: [
		{
			id: 'checkbox',
		},
		{
			id: 'symbol',
			columnName: 'Symbol'
		},
		{
			id: 'name',
			columnName: 'Name'
		},
		{
			id: 'price',
			columnName: 'Price'
		},
		{
			id: 'view',
		}
	],
	content: [
		{
			symbol: 'AAPL',
			name: 'Apple Inc.',
			price: 153.2
		},
		{
			symbol: 'GOOGL',
			name: 'Google',
			price: 89.9
		},
		{
			symbol: 'FB',
			name: 'Facebook',
			price: 120.45
		},
		{
			symbol: 'INTC',
			name: 'Intel Corporation',
			price: 30.32
		},
		{
			symbol: 'BAC',
			name: 'Bank of America Corporation',
			price: 130.5
		}
	]
};

class Home extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			searchFilter: '',
			selectedItems: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleCheckbox = this.handleCheckbox.bind(this);
	}

	handleChange({ target }) {
		this.setState({
			searchFilter: target.value
		});
	}

	handleCheckbox({ target }) {
		const { selectedItems } = this.state;
		const { id } = target;
		let currentList = [...selectedItems];

		if (currentList.includes(id))
			currentList.splice(currentList.indexOf(id), 1);
		else
			currentList.push(id);

		this.setState({
			selectedItems: currentList
		});
	}

	render() {
		const { searchFilter, selectedItems } = this.state;

		return (
			<Container>
				<Search
					placeholder={'Search'}
					selectedItems={selectedItems}
					handleChange={this.handleChange}
				/>
				<Table
					data={data}
					filter={searchFilter}
					handleCheckbox={this.handleCheckbox}
				/>
			</Container>
		);
	}
}

Home.displayName = 'Pages/Home';

export default Home;