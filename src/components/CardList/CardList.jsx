import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/Buttons/IconButton/IconButton';
import Card from 'components/Card/Card';
import styles from 'components/CardList/CardList.module.css';
import ChartViewer from 'components/Charts/ChartViewer/ChartViewer';
import { Add } from 'components/Icons/Icons';
import ListItem from 'components/ListItem/ListItem';
import defaultTemplateList from 'utils/constants/viewConstants';
import { getCategories } from 'utils/helpers/apiDataHelpers';
import { safeSplice } from 'utils/helpers/arrayHelpers';
import { hash } from 'utils/helpers/commonHelpers';

class CardList extends PureComponent {
	constructor(props) {
		super(props);

		this.handleAddCard = this.handleAddCard.bind(this);
		this.handleDeleteCard = this.handleDeleteCard.bind(this);

		this.state = {
			cards: defaultTemplateList
		};
	}

	handleDeleteCard(e) {
		const { cards } = this.state;
		const clickedItemIndex = cards.findIndex(item => item.oid === e.currentTarget.closest('li').id);
		const newList = safeSplice(cards, clickedItemIndex, 1);

		this.setState({ cards: newList });
	}

	handleAddCard() {
		this.setState(prevState => ({
			cards: [
				...prevState.cards,
				{
					oid: hash(),
					title: hash(),
					subtitle: hash(),
					series: [
						{ key: 'EBITDA' },
						{ key: 'EBITDA Margin', index: 1, chartType: 'line' }
					]
				}
			]
		}));
	}

	renderCards() {
		const { list: companyList } = this.props;
		const { cards } = this.state;
		const categories = getCategories(companyList);

		return cards.map((card, index) => {
			const { oid, title, subtitle } = card;
			const { series } = cards[index];

			return (
				<ListItem key={oid} id={oid}>
					<Card title={title} subtitle={subtitle} onDelete={this.handleDeleteCard}>
						<ChartViewer
							categories={categories}
							dimensions={companyList}
							series={series}
						/>
					</Card>
				</ListItem>
			);
		});
	}

	render() {
		return (
			<div className={styles.cardListContainer}>
				<ul className={styles.cardList}>
					{ this.renderCards() }
				</ul>
				<div className={styles.addButtonContainer}>
					<IconButton
						icon={Add}
						title='Add card'
						onClick={this.handleAddCard}
					/>
				</div>
			</div>
		);
	}
}

CardList.displayName = 'components/CardList/CardList';

CardList.propTypes = {
	list: PropTypes.array.isRequired
};

export default CardList;