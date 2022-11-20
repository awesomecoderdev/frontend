import React, { Fragment } from "react";
import DashboardContents from "../components/DashboardContents";
import Localstorage from "../lib/localstorage";
import Topbar from "../components/Topbar";
import Head from "next/head";

const Dashboard = ({ children, auth }) => {
	const { name, email, user, verified } = Localstorage();

	return (
		<Fragment>
			<Head>
				<title>Dashboard | WP Plagiarism</title>
			</Head>
			<Topbar title="Dashboard" />
			<div className="relative lg:p-4 p-2 w-full max-h-[90vh] overflow-x-hidden overflow-y-scroll">
				{/* <p>{JSON.stringify(auth)}</p> */}
				<h1>
					Hello , {name}, {email} {verified}
				</h1>
				{/* <p>{JSON.stringify(user)}</p> */}
			</div>
		</Fragment>
	);
};

export default Dashboard;
