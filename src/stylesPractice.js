import React from 'react';
import './stylesPrac1.css';
import './stylesPrac2.sass';
import './stylesPrac3.scss';

class StylesPractice extends React.Component {
	constructor(props) {
		super(props);
		console.log(this);
		this.state = {
			counter: 0
		}
	}
	render() {
		return (
			<div>
				<h1 className="header1">Styling Test</h1>
				<h1 className="header2">Styling Test2</h1>
				<h1 class="header3">Styling Test3</h1>
			</div>

		)
	}
}

export default StylesPractice;