import Head from "next/head";
import React, { Fragment } from "react";
import Topbar from "../../components/Topbar";
import Localstorage from "../../lib/localstorage";

const Websites = () => {
	const { name, email, user, verified } = Localstorage();

	return (
		<Fragment>
			<Head>
				<title>Websites | WP Plagiarism</title>
			</Head>
			<Topbar title="Websites" />
			<div className="relative lg:p-4 p-2 w-full max-h-[90vh] overflow-x-hidden overflow-y-scroll">
				<h1>
					Hello , {name}, {email} {verified}
				</h1>
			</div>
		</Fragment>
	);
};

export default Websites;
