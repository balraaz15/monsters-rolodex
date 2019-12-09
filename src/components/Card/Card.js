import React from 'react';

import './Card.css'

const card = props => {
	return (
		<div className="card-container">
			<img
				src={`https://robohash.org/${props.monster.id}?set=set5&size=180x180`}
				alt="Monster" />
			<h2 key={props.monster.id}>
				{props.monster.name}
			</h2>
			<p>{props.monster.email}</p>
		</div>
	)
};

export default card;
