import React, { PropTypes } from 'react'

const CheckBoxImageField = ({ onChange, text, isChecked, imageBase64, imageWidth, imageHeight }) => (
	<div>
		<table>
			<tbody>
				<tr>
					<td>
						<input checked={isChecked}
							type="checkbox"
							onChange={onChange}
							style={{ marginLeft: "5px", marginRight: "5px" }}
						/>
					</td>
					<td>
						<img width={imageWidth} height={imageHeight} style={{ marginRight: "5px" }}
							src={imageBase64 != "" ? "data:image/png;base64," + imageBase64 : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="} />
					</td>
					<td>
						<span style={{ margin: "5px" }}>{text}</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

)

CheckBoxImageField.propTypes = {
	onChange: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	imageBase64: PropTypes.string.isRequired
}

export default CheckBoxImageField;
