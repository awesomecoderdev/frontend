import Head from "next/head";
import React, { Fragment } from "react";
import Topbar from "../components/Topbar";
import Localstorage from "../lib/localstorage";

const Invoices = ({ auth }) => {
	const { name, email, user, verified } = Localstorage();

	return (
		<Fragment>
			<Head>
				<title>Invoices | WP Plagiarism</title>
			</Head>
			<Topbar title="Invoices" />
			<div className="relative lg:p-4 p-2 w-full max-h-[90vh] overflow-x-hidden overflow-y-scroll">
				{/* <p>{JSON.stringify(auth)}</p> */}
				<h1>
					Hello , {name}, {email} {verified}
				</h1>
			</div>
		</Fragment>
	);
};

export default Invoices;
