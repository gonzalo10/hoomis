import React from 'react'
import PropTypes from 'prop-types'

import { FormattedMessage } from 'react-intl'

import { Nav, Button } from 'react-bootstrap'

import Link from './Link'

// Modals
// import LoginModal from '../LoginModal'
// import SignupModal from '../SignupModal'
// import ForgotPassword from '../ForgotPassword'

import NavLink from './NavLink'

// Locale
import messages from '../locale/messages'

class NavigationBeforeLogin extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		setUserLogout: PropTypes.func,
		openLoginModal: PropTypes.func,
		openSignupModal: PropTypes.func
	}
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		let updatedURI,
			uri = '/editProfileFormulario?'
		updatedURI = encodeURI(uri)
	}

	render() {
		const { openLoginModal, openSignupModal } = this.props
		return (
			<div>
				{/* <LoginModal />
				<SignupModal /> */}
				{/* <ForgotPassword /> */}
				<Button to='/' className={'MagicButton2'} onClick={this.handleClick}>
					Buscamos por ti
				</Button>
				<Nav pullRight>
					<NavLink to='/' className={'visible-xs'}>
						<FormattedMessage {...messages.home} />
					</NavLink>
					<NavLink to='/whyhost'>
						<FormattedMessage {...messages.becomeAHoomer} />
					</NavLink>
					<NavLink to='/whyhost'>
						<FormattedMessage {...messages.becomeAHost} />
					</NavLink>
					<NavLink to='/help'>
						<FormattedMessage {...messages.help} />
					</NavLink>
					<NavLink to='#' noLink onClick={openLoginModal}>
						<FormattedMessage {...messages.login} />
					</NavLink>
					<NavLink to='#' noLink onClick={openSignupModal}>
						<FormattedMessage {...messages.signup} />
					</NavLink>
				</Nav>
			</div>
		)
	}
}

export default NavigationBeforeLogin
