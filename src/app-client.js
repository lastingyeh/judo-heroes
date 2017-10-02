import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

const AppClient = () => (
	<Router>
		<App />
	</Router>
);

// window.onload = () => {
// 	ReactDOM.render(<AppClient />, document.getElementById('main'));
// };

hydrate(<AppClient />, document.getElementById('main'));
