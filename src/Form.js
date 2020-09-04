import React from 'react';
import './form.css';


class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = { isAnagram: false, firstString: '', secondString: '' };
		this.checkIfAnagram = this.checkIfAnagram.bind(this);
		this.setValue = this.setValue.bind(this); // this is optional if we're using the fat arrow
	}

	checkIfAnagram() {
		let s1 = this.state.firstString;
		let s2 = this.state.secondString;
		if (s1.split("").sort().join("") === s2.split("").sort().join("")) {
			this.setState({
				isAnagram: true
			});
		}
		else {
			this.setState({
				isAnagram: false
			});
		}
	}

	setValue(inputOrder, e) {
		if (inputOrder == 'firstText') {
			this.setState({ firstString: e.target.value });
		}
		else {
			this.setState({ secondString: e.target.value });
		}
	}




	render() {
		const isAnagram = this.state.isAnagram;
		const divStyle = {
			fontSize: '15px',
			textAlign: 'center',
			maxWidth: '200px',
			marginLeft: 'auto',
			marginRight: 'auto',
			paddingTop: '69px'
		};
		return (
			<div style={divStyle}>
				<h1>ANAGRAM</h1>
				<label>First String</label>
				<input type="text" onChange={(e) => this.setValue('firstText', e)}></input>
				<label>Second String</label>
				<input type="text" onChange={(e) => this.setValue('secondText', e)}></input>
				<button onClick={this.checkIfAnagram}>Check if Anagram</button>
				{
					isAnagram
						? // show if anagram
						<h3>Wow, anagram is real</h3>
						: // if not anagram
						<h3>Not an anagram</h3>
				}

			</div>
		);
	}


}

export default Form;
