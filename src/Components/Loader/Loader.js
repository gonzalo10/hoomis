import React from 'react'
import { PropTypes } from 'prop-types'

import withStyles from 'isomorphic-style-loader/withStyles'
import s from './Loader.css'

//Component
import TextLoader from './TextLoader'
import FullPageLoader from './FullPageLoader'
import ButtonLoader from './ButtonLoader'
import CircleLoader from './CircleLoader'

class Loader extends React.Component {
	static propTypes = {
		type: PropTypes.string.isRequired,
		children: PropTypes.node,
		show: PropTypes.bool,
		loadingText: PropTypes.string,
		label: PropTypes.string,
		buttonType: PropTypes.string,
		handleClick: PropTypes.func,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		spinnerColor: PropTypes.string
	}

	static defaultProps = {
		type: 'text'
	}

	render() {
		const { type, loadingText, children, show, label } = this.props
		const {
			buttonType,
			handleClick,
			className,
			disabled,
			spinnerColor
		} = this.props

		return (
			<div>
				{type === 'text' && <TextLoader loadingText={loadingText} />}
				{type === 'page' && <FullPageLoader children={children} show={show} />}
				{type === 'button' && (
					<ButtonLoader
						label={label}
						show={show}
						type={buttonType}
						handleClick={handleClick}
						className={className}
						disabled={disabled}
						spinnerColor={spinnerColor}
					/>
				)}
				{type === 'circle' && <CircleLoader show={show} />}
			</div>
		)
	}
}

export default Loader
