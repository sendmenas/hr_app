import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Loader from './Loader'
import './ProfileData.scss'

const ProfileData = ({ data, handleCheck }) => {
	const [isLoaded, setLoader] = useState(false)

	useEffect(() => setLoader(false), [data.avatar])

	const imageLoaderHandler = () => {
		setLoader(true)
	}

	return (
		<section className="profile-data">
			<section className="picture">
				{!isLoaded &&
					<div className="picture__loader">
						<Loader />
					</div>
				}
				<picture>
					<img src={data.avatar} alt="avatar" onLoad={imageLoaderHandler} />
				</picture>
			</section>
			<ul className="list">
				<li className="list__row">
					<span className="label">Name:</span>{data.name} {data.surname}
				</li>
				<li className="list__row">
					<span className="label">DOB:</span>{data.dob}
				</li>
				<li className="list__row">
					<span className="label">Hired:</span>
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