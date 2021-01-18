import React from 'react'
import PropTypes from 'prop-types'
import './BannerCaption.css'
import { Container, Row, Col } from 'react-bootstrap'

class BannerCaption extends React.Component {
	static propTypes = {
		data: PropTypes.shape({
			loading: PropTypes.bool,
			getBanner: PropTypes.shape({
				id: PropTypes.number,
				title: PropTypes.string,
				content: PropTypes.string
			})
		})
	}

	render() {
		const {
			data: { getBanner }
		} = this.props

		return (
			<Container fluid>
				<Row>
					<Col
						xs={12}
						sm={12}
						md={10}
						lg={10}
						className={'bannerCaptionContainer'}>
						<h1 className={'noMargin bannerCaptionText'}>
							<span className={'bannerCaptionHighlight'}>
								{getBanner?.title}
							</span>
							{getBanner?.content}
						</h1>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default BannerCaption
