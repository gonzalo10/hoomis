import React from 'react'
import PropTypes from 'prop-types'
import './Layout.css'
import Header from './Header'
import Feedback from './Feedback'
// import FooterToggle from './FooterToggle'
// import Footer from './Footer'

class HomeLayout extends React.Component {
	static propTypes = {
		children: PropTypes.node.isRequired
	}

	render() {
		return (
			<div>
				<Header borderLess={true} />
				{this.props.children}
				<Feedback />
				{/* <div className={'hidden-xs'}>
					<FooterToggle />
				</div>
				<div className={'hidden-lg hidden-md'}>
					<Footer />
				</div> */}
			</div>
		)
	}
}

export default HomeLayout
