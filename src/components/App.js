import React from 'react';
import { Route, Switch } from 'react-router-dom';

// layout
import Layout from './Layout';

// pages
import IndexPage from './IndexPage';
import AthletePage from './AthletePage';
import NotFoundPage from './NotFoundPage';

// data
import athletes from '../data/athletes';

const renderIndex = () => <IndexPage athletes={athletes} />;

const renderAthlete = ({ match, staticContext }) => {
	const id = match.params.id;
	const athlete = athletes.find(current => current.id === id);

	if (!athlete) {
		return <NotFoundPage staticContext={staticContext} />;
	}

	return <AthletePage athlete={athlete} athletes={athletes} />;
};

const App = () => (
	<Layout>
		<Switch>
			<Route exact path="/" render={renderIndex} />
			<Route exact path="/athlete/:id" render={renderAthlete} />
			<Route component={NotFoundPage} />
		</Switch>
	</Layout>
);

export default App;
