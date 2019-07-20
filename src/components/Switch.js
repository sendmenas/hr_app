import React from 'react'
import PropTypes from 'prop-types'
import './Switch.scss'

const Switch = ({ direction, clickHandler, disabled }) => (
	<button className={`switch switch--${direction}`} onClick={clickHandler} disabled={disabled}></button>
)

Switch.propTypes = {
	direction: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired
}

export default Switch
