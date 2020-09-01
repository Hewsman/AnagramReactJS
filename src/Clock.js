import React from 'react';
import Train from './Session3';

class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			time: new Date(),
			randomNumber: Math.floor(Math.random() * 8000)
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			time: new Date(),
			randomNumber: Math.floor(Math.random() * 8000)
		});
	}

	render() {
		return (
			<div>
				<h1>The time was: {this.state.time.toLocaleTimeString()}</h1>
				<h5>Random Number Every Second {this.state.randomNumber}</h5>
				<Train />
			</div>
		);
	}

}

export default Clock;