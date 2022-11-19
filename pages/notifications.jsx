import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import Localstorage from "../lib/localstorage";
import request from "../lib/request";
import UseAuth from "../lib/useAuth";

const Notifications = () => {
	const { name, email, user, verified } = Localstorage();
	const { csrf } = UseAuth();

	const [notifications, setNotifications] = useState([]);

	useEffect(() => {
		csrf();

		request.post("user/notifications").then((res) => {
			const response = res.data;
			if (response.success) {
				console.log("====================================");
				console.log(response);
				console.log("====================================");
			} else {
				setNotification({
					success: "false",
					title: "Unauthenticated!",
					message:
						"Something went wrong. Please try again after sometimes.",
				});
				closeNotification();
			}
		});
	}, []);

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

export default Notifications;
