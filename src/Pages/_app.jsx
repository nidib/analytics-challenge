/* eslint-disable react/prop-types */
import React from 'react';
import 'Styles/globals.css';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;