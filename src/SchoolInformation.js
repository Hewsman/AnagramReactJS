import React from 'react';
import './stylesPrac1.css';
import './stylesPrac2.sass';
import './stylesPrac3.scss';

class SchoolInformation extends React.Component {
	constructor(props) {
		super(props);
		console.log(this);
		this.state = {
			grade: '',
			number: 0,
			hasAircon: false,
			isFilled: false
		}

	}

	eventHandler = (event) => {
		const type = event.target.type;
		const value = event.target.value;
		const isChecked = event.target.value == 'on' ? true : false;
		console.log(isChecked);
		if (type == 'text') {
			this.setState({ grade: value });
		}
		else if (type == 'number') {
			this.setState({ number: value })
		}
		else {
			this.setState({ hasAircon: isChecked });
		}

	}

	onSubmit = (event) => {

		localStorage.setItem("grade", this.state.grade);
		localStorage.setItem("number", this.state.number);
		localStorage.setItem("hasAircon", this.state.hasAircon);
		localStorage.setItem("isFilled", true);
		alert('Saved');
	}

	componentDidMount() {
		this.setState(
			{
				grade: localStorage.getItem("grade"),
				number: localStorage.getItem("number"),
				hasAircon: localStorage.getItem("hasAircon"),
				isFilled: localStorage.getItem("isFilled")
			}
		);


	}

	render() {
		return (
			<div>
				<label>
					Grade
				<input type="text" placeholder="Grade" value={this.state.grade} onChange={(e) => this.eventHandler(e)}></input>
				</label>
				<label>
					Number of students in the grade
					<input type="number" placeholder="number of students" value={this.state.number} onChange={(e) => this.eventHandler(e)}></input>
				</label>


				<label>
					Has Aircon or not
					<input type="checkbox" checked={this.state.hasAircon} onChange={(e) => this.eventHandler(e)}></input>
				</label>

				<button onClick={(e) => this.onSubmit(e)}>Submit</button>
				{
					this.state.isFilled ?
						<div>
							<p>Grade: {this.state.grade}</p>
							<p>Number of Students: {this.state.number}</p>
							<p>Has Aircon: {this.state.hasAircon == 'true' ? 'yes' : 'no'}</p>
						</div> :
						<div><p>Nothing to Display</p></div>
				}




			</div>

		)
	}
}

export default SchoolInformation;