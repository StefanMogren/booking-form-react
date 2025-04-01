import React from 'react';

function Select(props) {
	return (
		<select className={props.className} id={props.id}>
			{props.options.map((option) => (
				<option key={option}>{option}</option>
			))}
		</select>
	);
}

export default Select;
