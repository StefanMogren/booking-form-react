import React from 'react';
import Input from './Input';
import Select from './Select';

function BookingForm() {
	return (
		<form className='input-form'>
			{/* Radio button första och andra klass */}
			<Input
				inputType='radio'
				inputName='2ndClass'
				inputId='2ndClass'
				// inputClass=''
				labelClass='input-form__field input-form__field--half'
				labelText='2:a klass'
				spanClass='order-two'
			/>
			<Input
				inputType='radio'
				inputName='1stClass'
				inputId='1stClass'
				// inputClass=''
				labelClass='input-form__field input-form__field--half'
				labelText='1:a klass'
				spanClass='order-two'
			/>
			{/* Select antal biljetter och titel */}
			<Select
				options={[1, 2, 3, 4, 5]}
				labelClass='input-form__field input-form__field--half'
				labelText='Antal biljetter'
				selectId='tickets'
			/>
			<Select
				options={[`Sir`, `Ma'am`, 'Mr.', 'Ms.']}
				labelClass='input-form__field input-form__field--half'
				labelText='Titel'
				selectId='title'
			/>

			{/* Input förnamn och efternamn */}
			<Input
				inputType='text'
				inputName='firstName'
				inputId='firstName'
				// inputClass=''
				labelClass='input-form__field input-form__field--full'
				labelText='Förnamn'
				spanClass='order-one'
			/>
			<Input
				inputType='text'
				inputName='secondName'
				inputId='secondName'
				// inputClass=''
				labelClass='input-form__field input-form__field--full'
				labelText='Efternamn'
				spanClass='order-one'
			/>

			{/* Checkbox godkänner villkoren */}

			<Input
				inputType='checkbox'
				inputName='acceptTerms'
				inputId='acceptTerms'
				// inputClass=''
				labelClass='input-form__field input-form__field--full'
				labelText='Jag godkänner villkoren'
				spanClass='order-one'
			/>
			<button className='input-form__button'>Boka biljetter</button>
		</form>
	);
}

export default BookingForm;
