import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloWorld from './HelloWorld';

import Train from './Session3';
import Clock from './Clock';
import EventHandler from './EventHandler';
import Form from './Form';
import StylesPractice from './stylesPractice';
import Registration from './react-registration/registration';
import SchoolInformation from './SchoolInformation';
ReactDOM.render(
	<React.StrictMode>
		<Registration />
	</React.StrictMode>,

	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
