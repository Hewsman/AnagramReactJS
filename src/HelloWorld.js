import React from 'react';
import logo from './logo.svg';
import './App.css';


const world = "Philippines";

class HelloWorld extends React.Component {

	constructor(props) {
		super(props);
		this.state = { date: Math.random() * 100 };
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render() {
		return (
			<div className="App">

				<img src={logo} className="App-logo" alt="logo" />
				<p>
					HELLO, {this.props.name}!
				</p>
				<button>ENTER NOW</button>

			</div>
		);
	}


}

export default HelloWorld;
