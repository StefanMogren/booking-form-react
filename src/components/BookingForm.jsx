import React from 'react';
import Input from './Input';
import Select from './Select';

function BookingForm() {
	return (
		<form className='input-form'>
			{/* Radio button första och andra klass */}
			<label
				className='input-form__field input-form__field--half'
				htmlFor='2ndClass'>
				<Input type='radio' name='2ndClass' id='2ndClass' />
				2:a klass
			</label>
			<label
				className='input-form__field input-form__field--half'
				htmlFor='1stClass'>
				<Input type='radio' name='1stClass' id='1stClass' />
				1:a klass
			</label>

			{/* Select antal biljetter och titel */}
			<label
				className='input-form__field input-form__field--half'
				htmlFor='tickets'>
				Antal biljetter
				<Select id='tickets' options={[1, 2, 3, 4, 5]} />
			</label>
			<label
				className='input-form__field input-form__field--half'
				htmlFor='title'>
				Titel
				<Select id='title' options={[`Sir`, `Ma'am`, 'Mr.', 'Ms.']} />
			</label>

			{/* Input förnamn och efternamn */}
			<label
				className='input-form__field input-form__field--full'
				htmlFor='firstName'>
				Förnamn
				<Input type='text' name='firstName' id='firstName' />
			</label>
			<label
				className='input-form__field input-form__field--full'
				htmlFor='secondName'>
				Efternamn
				<Input type='text' name='secondName' id='secondName' />
			</label>

			{/* Checkbox godkänner villkoren */}
			<label
				className='input-form__field input-form__field--full'
				htmlFor='acceptTerms'>
				<Input type='checkbox' name='acceptTerms' id='acceptTerms' />
				Jag godkänner villkoren
			</label>

			<button className='input-form__button'>Boka biljetter</button>
		</form>
	);
}

export default BookingForm;
