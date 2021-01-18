import React from 'react'
import PropTypes from 'prop-types'
import './Home.css'

//Components
import BannerCaption from './Components/BannerCaption'
import NewsBox from './Components/NewsBox'
import SearchForm from './Components/SearchForm'
import Loader from './Components/Loader/Loader'

class Homepage extends React.Component {
	static propTypes = {
		getRecommendData: PropTypes.shape({
			loading: PropTypes.bool,
			getRecommendData: PropTypes.array
		}),
		getImageBannerData: PropTypes.shape({
			loading: PropTypes.bool,
			getImageBanner: PropTypes.object
		}),
		getMostViewedListingData: PropTypes.shape({
			loading: PropTypes.bool,
			GetMostViewedListing: PropTypes.array
		}),
		formatMessage: PropTypes.func
	}

	static defaultProps = {
		getRecommendData: {
			loading: true
		},
		getImageBannerData: {
			loading: true
		},
		getMostViewedListingData: {
			loading: true
		}
	}

	render() {
		const {
			getRecommendData,
			getImageBannerData,
			getMostViewedListingData,
			getBannerData = {
				data: { loading: false, getBanner: () => {} }
			}
		} = this.props

		return (
			<div className={'root'}>
				<div className={'container'}>
					<div className={'pageContainer'}>
						<BannerCaption data={getBannerData} />
					</div>
					<div className={'pageContainer'}>
						<SearchForm />
					</div>
					<div className={'pageContainer2'}>
						<div className={'pageContainer2'}>
							<NewsBox data={getImageBannerData.getImageBanner} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Homepage
