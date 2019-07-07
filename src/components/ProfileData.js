import React from 'react'
import PropTypes from 'prop-types'
import './ProfileData.scss'

const ProfileData = ({ data, handleCheck }) => {
	console.log(data)
	return (
	<section>
			<picture className="picture">
					<img src={data.avatar} alt="avatar" />
			</picture>
				<ul className="list">
					<li className="list__row">
						<div className="list__row__title">Name:</div>
						<div className="list__row__data">{data.name} {data.surname}</div>
					</li>
					<li className="list__row">
						<div className="list__row__title">BOD:</div>
						<div className="list__row__data">{data.dob}</div>
					</li>
					<li className="list__row">
						<label className="list__row__title" htmlFor="hired">Hired:</label>
						<input
							className="list__row__data"
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