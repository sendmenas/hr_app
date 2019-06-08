import React from 'react'
import PropTypes from 'prop-types'
import './ProfileData.scss'

const ProfileData = ({ data, handleCheck }) => (
		<section>
				<picture className="picture">
						<img src="" alt="" />
				</picture>
					<ul className="list">
						<li className="list__row">
							<div className="list__row__title">Name:</div>
							<div className="list__row__data">{data.name}</div>
						</li>
						<li className="list__row">
							<div className="list__row__title">BOD:</div>
							<div className="list__row__data">{data.bod}</div>
						</li>
						<li className="list__row">
							<label className="list__row__title" htmlFor="hired">Hired:</label>
							<input
								className="list__row__data"
								id="hired"
								type="checkbox"
								selected={data.hired}
								onInput={handleCheck}
							/>
						</li>
				</ul>
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