import React from 'react'
import './Loader.scss'

const Loader = () => (
	<section className="loader">
		<svg width="80" height="80">
			<circle className="spinner" cx="40" cy="40" r="35" fill="transparent" strokeWidth="8" />
		</svg>
	</section>
)

export default Loader
