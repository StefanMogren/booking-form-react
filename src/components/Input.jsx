import React from 'react';

function Input({
	labelClass,
	labelText,
	spanClass,
	inputType,
	inputName,
	inputClass,
	inputId,
}) {
	return (
		<label className={labelClass} htmlFor={inputId}>
			<span className={spanClass}>{labelText}</span>
			<input
				type={inputType}
				className={inputClass}
				id={inputId}
				name={inputName}
			/>
		</label>
	);
}

export default Input;
