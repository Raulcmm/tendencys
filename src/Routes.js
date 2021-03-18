import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import OrderPage from "./components/pages/OrderPage";

const routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/order/:id" component={OrderPage} />
			</Switch>
		</Router>
	);
};

export default routes;
