import React from 'react';

function Select({
	labelClass,
	labelText,
	spanClass,
	selectId,
	selectClass,
	options,
}) {
	return (
		<label className={labelClass} htmlFor={selectId}>
			<span className={spanClass}>{labelText}</span>
			<select className={selectClass} id={selectId}>
				{options.map((option) => (
					<option key={option}>{option}</option>
				))}
			</select>
		</label>
	);
}

export default Select;
