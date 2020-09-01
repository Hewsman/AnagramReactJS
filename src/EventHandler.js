import React from 'react';

class EventHandler extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			lastName: '',
			age: 0
		};
		this.handleFeed = this.handleFeed.bind(this);
	}

	handleFeed() {
		this.setState({
			name: 'JESUCHRIS',
			lastName: 'MANLAPAZ',
			age: '22'
		},
			{
				name: 'LORENZZZ',
				lastName: 'MANLAPAZ',
				age: '22'
			},

		);
		//console.log(event);
	}

	handleIdentifier(i) {
		console.log(i);
	}
	render() {
		const numbers = [1, 2, 3, 4, 5];
		const listNumbers = numbers.map((number) => <li onClick={(e) => this.handleIdentifier(number)}> {number}</li >);


		return (
			<div>
				<ul>{listNumbers}</ul>
				<button >Click me</button>
			</div>

		);
	}

}

export default EventHandler;