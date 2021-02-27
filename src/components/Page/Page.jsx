import React, { Fragment } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export const Page = ({ children, title }) => {
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
			</Head>
			{ children }
		</Fragment>
	);
};

Page.displayName = 'components/Page';

Page.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired,
	title: PropTypes.string.isRequired
};

export default Page;