/* eslint-disable react/prop-types */
import React from 'react';
import 'styles/normalize.css';
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Component {...pageProps} />
	);
}

export default MyApp;