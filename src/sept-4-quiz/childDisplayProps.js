import React from 'react'


class ChildDisplayProps extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {

		return (
			<div>
				<h1>List of Countries</h1>
				<br />{this.props.callingCode}
			</div>
		)
	}
}
export default ChildDisplayProps;