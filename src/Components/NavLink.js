import React from 'react'
import PropTypes from 'prop-types'

import { NavItem } from 'react-bootstrap'

function isLeftClickEvent(event) {
	return event.button === 0
}

function isModifiedEvent(event) {
	return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}

class NavLink extends React.Component {
	static propTypes = {
		to: PropTypes.string.isRequired,
		children: PropTypes.node,
		onClick: PropTypes.func,
		noLink: PropTypes.bool,
		className: PropTypes.string,
		toggleClose: PropTypes.func.isRequired
	}

	handleClick = (event) => {
		const { noLink, toggleClose } = this.props
		toggleClose()
		if (this.props.onClick) {
			this.props.onClick(event)
		}

		if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
			return
		}

		if (event.defaultPrevented === true) {
			return
		}

		event.preventDefault()
	}

	render() {
		const { to, children, className } = this.props
		return (
			<NavItem href={to} onClick={this.handleClick} className={className}>
				{children}
			</NavItem>
		)
	}
}

export default NavLink
