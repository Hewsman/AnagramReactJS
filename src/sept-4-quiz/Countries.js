import React from 'react'
import ChildDisplayProps from './childDisplayProps'
import CallingCode from './callingCode'


class Countries extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			callingCode: '44',
			items: [],
			isLoaded: false
		}
	}

	handleCode = (e) => {
		this.setState({ callingCode: e.target.value });
		this.getCountryWithCountryCode(this.state.callingCode);
	}

	componentWillMount = async () => {
		await this.getCountryWithCountryCode(this.state.callingCode);
	}


	getCountryWithCountryCode = (code) => {
		const requestOptions = {
			method: 'GET'
		};
		fetch("https://restcountries.eu/rest/v2/callingcode/" + code, requestOptions)
			.then(result => result.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						items: result
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						items: []
					});
				}
			)
	}

	getAllCountries = () => {
		const requestOptions = {
			method: 'GET'

		};
		fetch("https://restcountries.eu/rest/v2/all", requestOptions)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						items: result
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}


	render() {
		const allCountries = this.state.items.map(data =>
			<li>{data ? data.name : data.status}</li>
		)
		return (

			<div> {
				this.state.isLoaded
					?
					<div>
						<ChildDisplayProps callingCode={<CallingCode onCodeChange={this.handleCode} />} />
						<ul>{allCountries}</ul>
					</div>
					:
					<div></div>
			}



			</div>
		)
	}
}
export default Countries;