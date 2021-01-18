import React from 'react'
import PropTypes from 'prop-types'

import './SearchForm.css'

import { Button, Container, Row, Col } from 'react-bootstrap'
import * as FontAwesome from 'react-icons/fa'

class SearchForm extends React.Component {
	static propTypes = {
		// setPersonalizedValues: PropTypes.func.isRequired,
		// getSpecificSettings: PropTypes.func.isRequired,
		personalized: PropTypes.shape({
			location: PropTypes.string,
			lat: PropTypes.number,
			lng: PropTypes.number,
			chosen: PropTypes.number,
			startDate: PropTypes.string,
			endDate: PropTypes.string,
			personCapacity: PropTypes.number,
			formatMessage: PropTypes.func
		}),
		settingsData: PropTypes.shape({
			listSettings: PropTypes.array.isRequired
		}).isRequired
	}

	static defaultProps = {
		listingFields: []
	}

	static defaultProps = {
		personalized: {
			location: null,
			lat: null,
			lng: null,
			startDate: null,
			endDate: null,
			personCapacity: null,
			chosen: null
		},
		settingsData: {
			listSettings: []
		}
	}

	constructor(props) {
		super(props)
		this.state = {
			mobileDevice: false,
			personCapacity: []
		}
		this.handleClick = this.handleClick.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		const { listingFields } = nextProps
		if (listingFields != undefined) {
			this.setState({
				roomType: listingFields.roomType,
				personCapacity: listingFields.personCapacity
			})
		}
	}

	componentWillMount() {
		const { getSpecificSettings, listingFields } = this.props
		// Get PersonCapacity Settings Data
		//getSpecificSettings(2);
		// if (detectMobileBrowsers.isMobile() === true) {
		// 	this.setState({ mobileDevice: true })
		// }
		if (listingFields != undefined) {
			this.setState({
				roomType: listingFields.roomType,
				personCapacity: listingFields.personCapacity
			})
		}
	}

	handleClick() {
		const { personalized, setPersonalizedValues } = this.props
		let updatedURI,
			uri = '/s?'

		if (personalized.chosen != null) {
			uri =
				uri +
				'&address=' +
				personalized.location +
				'&chosen=' +
				personalized.chosen
		} else {
			if (personalized.location != null) {
				uri = uri + '&address=' + personalized.location
			}
		}

		if (personalized.startDate != null && personalized.endDate != null) {
			uri =
				uri +
				'&startDate=' +
				personalized.startDate +
				'&endDate=' +
				personalized.endDate
		}

		if (
			personalized.personCapacity != null &&
			!isNaN(personalized.personCapacity)
		) {
			uri = uri + '&guests=' + personalized.personCapacity
		}

		updatedURI = encodeURI(uri)
		// history.push(updatedURI)
	}

	render() {
		const {
			location,
			dates,
			settingsData,
			setPersonalizedValues,
			personalized,
			listingFields
		} = this.props
		// const { formatMessage } = this.props.intl
		const { personCapacity } = this.state
		let rows = []
		const isBrowser = typeof window !== 'undefined'
		// for (let i= 1; i <= 16; i++) {
		//   rows.push(<option value={i} key={i}>{i} {i>1 ? 'guests' : 'guest'}</option>);
		// }

		let startValue, endValue
		if (personCapacity && personCapacity[0] && personCapacity[0].startValue) {
			for (
				let i = personCapacity[0].startValue;
				i <= personCapacity[0].endValue;
				i++
			) {
				rows.push(
					<option value={i} key={i}>
						{i} {i > 1 ? 'guests' : 'guest'}
					</option>
				)
				startValue = personCapacity[0].startValue
				endValue = personCapacity[0].endValue
			}
		}
		const smallDevice = isBrowser
			? window.matchMedia('(max-width: 640px)').matches
			: undefined

		return (
			<Container fluid>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} className={'FotoPortada'}>
						<form>
							<div className={'searchFormInput homeSearchForm'}>
								<div className={'searchForm'}>
									<div className={'table'}>
										<div className={'tableRow'}>
											<div className={'tableCell location'}>
												<label className={'label'}>
													<span> {/* <FormattedMessage /> */}</span>
												</label>
												<p className={'CityText'}>
													<span>Barcelona</span>
												</p>
											</div>
											<div className={'tableCell search'}>
												<Button
													className={'btn btnPrimary btnBlock searchButton'}
													href='/s?&address=Barcelona, Spain&chosen=1'>
													<span className={'hidden-lg hidden-xs searchIcon'}>
														<FontAwesome.FaSearch />
													</span>
													<span className={'hidden-md hidden-sm'}>
														{/* <FormattedMessage /> */}
													</span>
												</Button>
												<Button
													className={'BtnMobile'}
													onClick={this.handleClick}>
													<span>
														<FontAwesome.FaSearch />
													</span>
												</Button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</Col>
				</Row>

				<div className={'btnPortada'}>
					<Button className={'btnPortada11'} href='/s'>
						¿Buscas piso?
					</Button>
					<Button className={'btnPortada11'} href='/become-a-host?mode=new'>
						¿Alquilas piso?
					</Button>
					<Button className={'btnPortada11'} href='#'>
						Hoomer
					</Button>
				</div>

				<div className={'SkylinePhoto'} />
			</Container>
		)
	}
}

export default SearchForm
