import path from 'path';
import { Server } from 'http';
import Express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';

import App from './components/App';

const app = Express();
const server = new Server(app);

// ejs module
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define static folder for assets
app.use(Express.static(path.join(__dirname, 'static')));

// universal routing and rendering
app.get('*', (req, res) => {

	let markup = '';
	let status = 200;

	if (process.env.UNIVERSAL) {
		const context = {};

		markup = renderToString(
			<Router location={req.url} context={context}>
				<App />
			</Router>
		);

		if (context.url) {
			return res.redirect(302, context.url);
		}

		if (context.is404) {
			status = 404;
		}
	}
	// render markup string to client
	return res.status(status).render('index', { markup });
});

// start server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

server.listen(port, err => {
	if (err) {
		return console.error(err);
	}

	return console.info(`

     Server running on http://localhost:${port} [${env}]
     Universal rendering: ${process.env.UNIVERSAL ? 'enabled' : 'disabled'}
  `);
});

