import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import {
	UserCircleIcon,
	EnvelopeOpenIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/outline";
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
				console.log(response.data);
				console.log("====================================");
				setNotifications(response.data);
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
			<Topbar title="Notifications" />
			<div className="relative p-5">
				<div calssName="gird">
					{notifications.map((notification) => {
						console.log(notification);
						return (
							<Fragment key={notification.id}>
								{notification.data.message ? (
									<Fragment>
										<div
											className={` { ${
												notification.read_at === null
													? "bg-gray-50"
													: "bg-white"
											} } relative flex items-center w-full border border-slate-100 py-3 mb-3 rounded-md`}
										>
											<button className="relative mx-3 w-9 h-9 rounded-full overflow-hidden  border-primary-500 bg-slate-200">
												{user.avatar ? (
													<Image
														src={avatar}
														alt="Profile"
														layout="fill"
														className="after: "
													/>
												) : (
													<h2 className="text-slate-600 font-semibold text-sm ">
														{name
															? name
																	.trim()
																	.slice(0, 1)
															: ""}
													</h2>
												)}
											</button>
											<div className="relative ">
												<h1 className="text-sm font-semibold text-slate-600">
													{notification.data.title}
												</h1>
												<p className="text-xs">
													{notification.data.message}
												</p>
											</div>
											{notification.read_at !== null ? (
												<EnvelopeOpenIcon className="w-5  h-5 absolute right-4" />
											) : (
												<EnvelopeIcon className="w-5 h-5 cursor-pointer absolute right-4" />
											)}
										</div>
									</Fragment>
								) : (
									""
								)}
							</Fragment>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default Notifications;
