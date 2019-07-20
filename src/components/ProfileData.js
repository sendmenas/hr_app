import React from 'react'
import PropTypes from 'prop-types'
import './ProfileData.scss'

const ProfileData = ({ data, handleCheck }) => {
	return (
	<section className="profile-data">
			<picture className="picture">
					<img src={data.avatar} alt="avatar" />
			</picture>
				<ul className="list">
					<li className="list__row">Name: {data.name} {data.surname}</li>
					<li className="list__row">BOD: {data.dob}</li>
					<li className="list__row">Hired:
						<input
							className="list__row__checkbox"
							id="hired"
							type="checkbox"
							checked={data.hired}
							onChange={handleCheck}
						/>
					</li>
			</ul>
	</section>
)
	}

ProfileData.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		dob: PropTypes.string.isRequired,
		hired: PropTypes.bool.isRequired
	}),
	handleCheck: PropTypes.func.isRequired
}

export default ProfileData