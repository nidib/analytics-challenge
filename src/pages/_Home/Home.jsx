import React, { PureComponent } from 'react';
import Container from 'components/Layout/Container/Container';
import Page from 'components/Page/Page';

class Home extends PureComponent {
	renderPageContent() {
		return (
			<Container>
				<h1>Welcome home</h1>
			</Container>
		);
	}

	render() {
		return (
			<Page title='Analytics Challenge'>
				{ this.renderPageContent() }
			</Page>
		);
	}
}

export default Home;