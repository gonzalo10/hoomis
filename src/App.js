import './App.css'
import HomeLayout from './Components/HomeLayout'
import Homepage from './Home'
import { IntlProvider } from 'react-intl'

function App() {
	return (
		<IntlProvider locale={'en-US'} defaultLocale='en-US'>
			<HomeLayout>
				<Homepage />
			</HomeLayout>
		</IntlProvider>
	)
}

export default App
