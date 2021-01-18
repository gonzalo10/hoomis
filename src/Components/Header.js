// General
import React from 'react'
import PropTypes from 'prop-types'

import './Header.css'
import * as FontAwesome from 'react-icons/fa'
import cx from 'classnames'
import { Navbar } from 'react-bootstrap'

// Internal Components
import Navigation from './Navigation'
import Logo from './Logo'

// External Components
// import Toaster from '../Toaster'
// import LoadingBar from 'react-redux-loading-bar'

class Header extends React.Component {
	static propTypes = {
		borderLess: PropTypes.bool,
		showMenu: PropTypes.bool,
		toggleOpen: PropTypes.func.isRequired,
		formatMessage: PropTypes.func
	}

	static defaultProps = {
		borderLess: false,
		showMenu: false
	}

	constructor(props) {
		super(props)
		this.handleMenu = this.handleMenu.bind(this)
	}

	handleMenu() {
		const { showMenu, toggleOpen, toggleClose } = this.props
		if (showMenu) {
			toggleClose && toggleClose()
		} else {
			toggleOpen && toggleOpen()
		}
	}

	render() {
		const { siteSettings, borderLess, showMenu, toggleOpen } = this.props
		let borderClass
		if (borderLess) {
			borderClass = 'rentAllHeaderBorderLess'
		}
		return (
			<div className={'root'}>
				{/* <Toaster /> */}
				{/* <LoadingBar /> */}
				<div className={'container'}>
					<Navbar
						fluid
						className={'rentAllHeader rentAllHeader' + borderClass}
						expanded={showMenu}
						onToggle={this.handleMenu}>
						{/* <Navbar.Header> */}
						<Navbar.Brand className={cx('hidden-xs')}>
							<Logo link={'/'} className={'brand brandImg'} />
						</Navbar.Brand>
						<Navbar.Toggle
							className={'navBarToggle'}
							children={
								<span>
									<Logo link={'#'} className={'brand brandImgToggle'} />
									{!showMenu && <FontAwesome.FaChevronDown />}

									{showMenu && <FontAwesome.FaChevronUp />}

									{showMenu && <FontAwesome.FaChevronUp />}
								</span>
							}
						/>
						{/* </Navbar.Header> */}
						<Navbar.Collapse>
							<Navigation />
						</Navbar.Collapse>
					</Navbar>
				</div>
			</div>
		)
	}
}

export default Header
