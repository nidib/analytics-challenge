import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Routes from 'Pages/Routes';
import './index.css';

const App = () => <Routes />;

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);