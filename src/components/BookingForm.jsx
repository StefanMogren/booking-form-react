import React from 'react';

function BookingForm() {
	return (
		<form>
			<label htmlFor='2stClass'>
				<input type='radio' name='' id='2stClass' />
				2:a klass
			</label>

			<label htmlFor='1ndClass'>
				<input type='radio' name='' id='1ndClass' />
				1:a klass
			</label>
		</form>
	);
}

export default BookingForm;
