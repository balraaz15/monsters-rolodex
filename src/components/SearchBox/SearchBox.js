import React from 'react';

import './SearchBox.css';

const searchBox = props => {
	return (
		<input
			className="search"
			type="search"
			placeholder={props.placeholder}
			onChange={props.changeHandler}
		/>
	)
}

export default searchBox;
