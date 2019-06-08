import React from 'react'
import PropTypes from 'prop-types'

const ProfileData = ({ data, handleCheck }) => (
		<section>
				<picture>
						<img src="" alt="" />
				</picture>
				<dl>
						<dt>Name:</dt>
						<dd>{data.name}</dd>
						<dt>BOD:</dt>
						<dd>{data.bod}</dd>
				</dl>
				<label htmlFor="hired">Hired:</label>
				<input
						id="hired"
						type="checkbox"
						selected={data.hired}
						onInput={handleCheck}
				/>
		</section>
)

ProfileData.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		bod: PropTypes.string.isRequired,
		hired: PropTypes.bool.isRequired
	}),
	handleCheck: PropTypes.func.isRequired
}

export default ProfileData