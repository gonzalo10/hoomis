import React from 'react'
import PropTypes from 'prop-types'

import { Row, Col, Container } from 'react-bootstrap'
import * as FontAwesome from 'react-icons/fa'
import './Feedback.css'

class Feedback extends React.Component {
	static propTypes = {
		data: PropTypes.shape({
			loading: PropTypes.bool,
			getFooterSetting: PropTypes.shape({
				title1: PropTypes.string.isRequired,
				content1: PropTypes.string.isRequired,
				title2: PropTypes.string.isRequired,
				content2: PropTypes.string.isRequired,
				title3: PropTypes.string.isRequired,
				content3: PropTypes.string.isRequired
			})
		})
	}

	render() {
		const { data } = this.props
		const getFooterSetting = data?.getFooterSetting
		return (
			<div className={'root'}>
				<div className={'container'}>
					<div className={'feedbackContainer'}>
						<Container fluid>
							<Row className={'feedbackRow'}>
								<Col xs={12} sm={4} md={4} lg={4} className={'feedbackBox'}>
									<div className={'feedbackIcon'}>
										<FontAwesome.FaPhone />
									</div>

									<div className={'feedbackContent'}>
										<label className={'landingLabel'}>
											{getFooterSetting?.title1}
										</label>
										<label className={'landingCaption'}>
											{getFooterSetting?.content1}
										</label>
									</div>
								</Col>

								<Col xs={12} sm={4} md={4} lg={4} className={'feedbackBox'}>
									<div className={'feedbackIcon'}>
										<FontAwesome.FaShieldAlt />
									</div>
									<div className={'feedbackContent'}>
										<label className={'landingLabel'}>
											{getFooterSetting?.title2}
										</label>
										<label className={'landingCaption'}>
											{getFooterSetting?.content2}
										</label>
									</div>
								</Col>

								<Col xs={12} sm={4} md={4} lg={4} className={'feedbackBox'}>
									<div className={'feedbackIcon'}>
										<FontAwesome.FaCheckSquare />
									</div>
									<div className={'feedbackContent'}>
										<label className={'landingLabel'}>
											{' '}
											{getFooterSetting?.title3}
										</label>
										<label className={'landingCaption'}>
											{getFooterSetting?.content3}
										</label>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</div>
		)
	}
}

export default Feedback
