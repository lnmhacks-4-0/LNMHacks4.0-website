import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// import auth files
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import ForgotPassword from "./components/authentication/ForgotPassword";

// // import dashboard files;
import FullDashboard from "./components/dashboard/Dashboard";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route
					exact
					path="/forgot-password"
					component={ForgotPassword}
				/>
				<Route path="/dashboard" component={FullDashboard} />
				<Route path="/" component={FullDashboard} />
			</Switch>
		</Router>
	);
}

export default App;
