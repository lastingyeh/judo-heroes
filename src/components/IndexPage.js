import React from 'react';
import AthleteCard from './AthleteCard';

const IndexPage = ({ athletes }) => (
	<div className="home">
		<div className="athletes-selector">
			{athletes.map(athleteData => <AthleteCard key={athleteData.id} {...athleteData} />)}
		</div>
	</div>
);

export default IndexPage;
