import Head from "next/head";
import React, { Fragment } from "react";
import Topbar from "../components/Topbar";
import Localstorage from "../lib/localstorage";

const Payments = () => {
	const { name, email, user, verified } = Localstorage();

	return (
		<Fragment>
			<Head>
				<title>Payments | WP Plagiarism</title>
			</Head>
			<Topbar title="Payments" />
			<div className="relative p-4">
				<h1>
					Hello , {name}, {email} {verified}
				</h1>
			</div>
		</Fragment>
	);
};

export default Payments;
