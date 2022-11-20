import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import {
	EnvelopeOpenIcon,
	EnvelopeIcon,
	ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import Topbar from "../components/Topbar";
import Localstorage from "../lib/localstorage";
import request from "../lib/request";
import UseAuth from "../lib/useAuth";
import Image from "next/image";

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

	const markAsReadNotification = (id) => {
		console.log("Mark", id);
		request
			.post("user/marknotification", {
				id: id,
			})
			.then((res) => {
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
	};

	return (
		<Fragment>
			<Head>
				<title>Notifications | WP Plagiarism</title>
			</Head>
			<Topbar title="Notifications" />
			<div className="relative p-5 w-auto max-h-[90vh] overflow-x-hidden ">
				<div className="gird">
					{notifications.map((notification) => {
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
												{user.avatar !== null ? (
													<Image
														src={user.avatar}
														alt="Profile"
														layout="fill"
													/>
												) : (
													<h2 className="text-slate-600 font-semibold text-sm flex justify-center items-center ">
														<ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
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
												<EnvelopeIcon
													onClick={(e) =>
														markAsReadNotification(
															notification.id
														)
													}
													className="w-5 h-5 cursor-pointer absolute right-4"
												/>
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
