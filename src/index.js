import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const elementId = 'root';

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById(elementId)
);