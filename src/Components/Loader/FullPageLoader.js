import React from 'react'
import { PropTypes } from 'prop-types'
import Loader from 'react-loader-advanced'

// Component
import MDSpinner from 'react-md-spinner'

class FullPageLoader extends React.Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		show: PropTypes.bool.isRequired
	}

	static defaultProps = {
		show: false
	}

	spinner() {
		return <MDSpinner singleColor={'#008df0'} size={48} />
	}

	render() {
		const { children, show } = this.props
		return (
			<Loader
				show={show}
				message={this.spinner()}
				foregroundStyle={{ color: 'white' }}
				backgroundStyle={{ backgroundColor: 'rgba(249, 249, 249, 0.74)' }}>
				<div>{children}</div>
			</Loader>
		)
	}
}

export default FullPageLoader
