import React from 'react'
import PropTypes from 'prop-types'
import './Switch.scss'

const Switch = ({ direction, clickHandler }) => (
	<button className={`switch switch--${direction}`} onClick={clickHandler}>{direction}</button>
)

Switch.propTypes = {
	direction: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired
}

export default Switch
