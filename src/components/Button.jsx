import React from 'react';

function Button({ buttonClass, buttonText }) {
	return <button className={buttonClass}>{buttonText}</button>;
}

export default Button;
