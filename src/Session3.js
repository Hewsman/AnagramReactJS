import React from 'react';

class Train extends React.Component {
	constructor(props) {
		super(props);
		console.log(this);
		this.state = {
			counter: 0
		}
	}
	render() {
		return (
			<h1>My Counter is {this.state.counter}</h1>
		)
	}

	componentDidMount() {
		console.log('Component mounted now');
		this.setState({
			counter: 1
		})
	}
}

export default Train;