
import React from 'react'
import Finder from './finderForm'
import Result from './results'

const schools = [
	{
		name: 'AAA',
		maxAge: 7,
		needsAircon: false,
		parentControl: true
	},
	{
		name: 'STI',
		maxAge: 9,
		needsAircon: true,
		parentControl: true
	},
	{
		name: 'NYP',
		maxAge: 15,
		needsAircon: true,
		parentControl: true
	},
	{
		name: 'FDC',
		maxAge: 18,
		needsAircon: true,
		parentControl: true
	},

]
class Registration extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			age: 0,
			needsAircon: true,
			fullName: '',
			parentControl: true
		}
	}
	handleFullNameChange = (e) => {
		this.setState({ fullName: e });
	}
	handleAgeChange = (e) => {
		this.setState({ age: e });
	}
	handleAirconChange = (e) => {
		this.setState({ needsAircon: e });
	}
	handleParentalChange = (e) => {
		this.setState({ parentControl: e });
	}
	filterSchools = () => {
		return schools.filter(e => {
			return this.state.age <= e.maxAge && this.state.needsAircon === e.needsAircon && this.state.parentControl === e.parentControl && this.state.fullName == e.name
		});
	}
	render() {
		return (
			<div>
				<Finder
					onFullnameChange={this.handleFullNameChange}
					onAgeChange={this.handleAgeChange}
					onAirconChange={this.handleAirconChange}
					onParentChange={this.handleParentalChange}
					info={this.state} />
				<Result schools={this.filterSchools()} />
			</div>
		)
	}
}
export default Registration;

