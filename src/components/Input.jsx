import React from 'react';

function Input(props) {
	return (
		<input
			type={props.type || ''}
			className={props.className || ''}
			id={props.id || ''}
			required
			name={props.name || ''}
		/>
	);
}

export default Input;
