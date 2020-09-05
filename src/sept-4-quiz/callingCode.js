import React from 'react'

class CallingCode extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			code: null
		};
	}

	handleTextChange(e) {
		this.setState({ code: e.target.value });
		this.props.onCodeChange(e);
	}

	render() {
		let allBehaviours = [];

		return (
			<div>
				<label>	Display Countries via Calling Code
					<input type="text" onChange={(e) => this.handleTextChange(e)} value={this.props.code == null ? null : this.props.code}></input>
				</label>
			</div >
		)
	}
}
export default CallingCode;