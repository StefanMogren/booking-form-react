import React from 'react';
import Input from './Input';
import Select from './Select';
import Button from './Button';

function BookingForm() {
	return (
		<form className='input-form'>
			{/* Radio button första och andra klass */}
			<Input
				inputType='radio'
				inputName='2ndClass'
				inputId='2ndClass'
				inputClass='input-form__radio-checkbox'
				labelClass='input-form__label input-form__label--flex-row'
				labelText='2:a klass'
				spanClass='order-two'
			/>
			<Input
				inputType='radio'
				inputName='1stClass'
				inputId='1stClass'
				inputClass='input-form__radio-checkbox'
				labelClass='input-form__label input-form__label--flex-row'
				labelText='1:a klass'
				spanClass='order-two'
			/>

			{/* Select antal biljetter och titel */}
			<Select
				options={[1, 2, 3, 4, 5]}
				labelClass='input-form__label input-form__label--half'
				labelText='Antal biljetter'
				selectId='tickets'
				selectClass='input-form__input-field'
			/>
			<Select
				options={[`Sir`, `Ma'am`, 'Mr.', 'Ms.']}
				labelClass='input-form__label input-form__label--half'
				labelText='Titel'
				selectId='title'
				selectClass='input-form__input-field'
			/>

			{/* Input förnamn och efternamn */}
			<Input
				inputType='text'
				inputName='firstName'
				inputId='firstName'
				inputClass='input-form__input-field order-two'
				labelClass='input-form__label input-form__label--full'
				labelText='Förnamn'
				spanClass='order-one'
			/>
			<Input
				inputType='text'
				inputName='secondName'
				inputId='secondName'
				inputClass='input-form__input-field order-two'
				labelClass='input-form__label input-form__label--full'
				labelText='Efternamn'
				spanClass='order-one'
			/>

			{/* Checkbox godkänner villkoren */}
			<Input
				inputType='checkbox'
				inputName='acceptTerms'
				inputId='acceptTerms'
				inputClass='input-form__radio-checkbox'
				labelClass='input-form__label input-form__label--full
                input-form__label--flex-row'
				labelText='Jag godkänner villkoren'
				spanClass='order-one'
			/>

			<Button
				buttonClass='input-form__button'
				buttonText='Boka biljetter'
			/>
		</form>
	);
}
export default BookingForm;
