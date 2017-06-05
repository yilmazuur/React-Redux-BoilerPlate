import React, { PropTypes } from 'react'

const CheckBoxField = ({ onChange, isChecked, text }) => (
	<div>
		<input  checked={isChecked}
			type="checkbox"
			onChange={onChange}
		>
		</input>
		<span>{text}</span>
	</div>
)

CheckBoxField.propTypes = {
	onChange: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired
}

export default CheckBoxField;
