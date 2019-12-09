import React from 'react';
import Card from '../Card/Card';

import './Card-List.css';

const cardList = props => {
	return (
		<div className="card-list">
			{props.monsters.map(monster => (
				<Card key={monster.id} monster={monster} />
			))}
		</div>
	)
};

export default cardList;
