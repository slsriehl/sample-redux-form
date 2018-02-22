import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import SurveyHOC from './components/higher-order/survey';

const routes = (
	<BrowserRouter>
		<Switch>
			<Redirect exact from="/" to="/form/survey" />
			<Route exact
				path="/form/:formName"
				render={props => {
					console.log(props.match.params);
					return (<SurveyHOC {...props.match.params} />)
				}}
			/>
		</Switch>
	</BrowserRouter>
)

export default routes;
