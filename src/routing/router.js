import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './home';
import Food from './food/food';



class Router extends React.Component {

	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div>
				<header>
					<nav>
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/food" >Food</a></li>
						</ul>
					</nav>
				</header>
				<BrowserRouter>
					<Switch>
						<Route path="/" component={Home} exact></Route>
						<Route path="/food" component={Food} ></Route>
						<Route component={NotFound} ></Route>
						<Redirect to="/home"></Redirect>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}


}

export default Router;
