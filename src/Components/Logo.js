import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

import LogoImg from '../assets/list.png'

import './Logo.css'

class Logo extends Component {
	static propTypes = {
		siteName: PropTypes.string.isRequired,
		logoImage: PropTypes.string,
		link: PropTypes.string,
		className: PropTypes.string,
		logoHeight: PropTypes.string,
		logoWidth: PropTypes.string
	}

	static defaultProps = {
		siteName: null,
		logoImage: null,
		link: '/',
		logoHeight: '34',
		logoWidth: '34'
	}

	render() {
		const { siteName, logoImage, link, className, logoHeight, logoWidth } =
			this.props || {}
		return (
			<Link to={link} className={className}>
				{logoImage != null && (
					<img src={LogoImg} height={logoHeight} width={logoWidth} />
				)}
				{logoImage === null && siteName != null && (
					<span className={'logoColor'}>{siteName}</span>
				)}
				{logoImage === null && siteName === null && (
					<span className={'logoColor'}>Site Name</span>
				)}
			</Link>
		)
	}
}

export default Logo
