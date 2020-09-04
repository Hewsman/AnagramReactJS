import React from 'react'
class Result extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const allSchools = this.props.schools.map(entry =>
			<div>Name:{entry.name} <br></br>Age:{entry.maxAge}</div>
		)
		return (
			<div>
				{allSchools ? allSchools : []}
			</div>
		)
	}
}
export default Result;