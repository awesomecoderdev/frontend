import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import {
	EnvelopeOpenIcon,
	EnvelopeIcon,
	ChatBubbleBottomCenterTextIcon,
	CheckIcon,
} from "@heroicons/react/24/outline";
import Topbar from "../components/Topbar";
import Localstorage from "../lib/localstorage";
import request from "../lib/request";
import UseAuth from "../lib/useAuth";
import Image from "next/image";

const Notifications = () => {
	const { name, email, user, verified } = Localstorage();
	const { csrf } = UseAuth();
	const [notificationCount, setNotificationCount] = useState(0);
	const [notifications, setNotifications] = useState([]);
	const [unread, setUnread] = useState(false);

	useEffect(() => {
		csrf();

		request.post("user/notifications").then((res) => {
			const response = res.data;
			if (response.success) {
				setNotifications(response.data);
				setNotificationCount(response.data.length);
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
		request
			.post("user/marknotification", {
				id: id,
			})
			.then((res) => {
				const response = res.data;
				if (response.success) {
					setNotificationCount(response.data.length);
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

	const markAllAsReadNotification = () => {
		request.post("user/marknotification").then((res) => {
			const response = res.data;
			if (response.success) {
				setNotificationCount(response.data.length);
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

	const unreadNotifications = notifications.filter(
		(notifications) => notifications.read_at === null
	);

	const setUnreadNotification = () => {
		const unreadNotifications = notifications.filter(
			(notifications) => notifications.read_at === null
		);

		setNotifications(unreadNotifications);
		setUnread(true);
	};

	const setAllNotification = () => {
		request.post("user/notifications").then((res) => {
			const response = res.data;
			if (response.success) {
				setNotifications(response.data);
				setNotificationCount(response.data.length);
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
		setUnread(false);
	};

	return (
		<Fragment>
			<Head>
				<title>Notifications | WP Plagiarism</title>
			</Head>
			<Topbar title="Notifications" />
			<div className="relative lg:p-4 p-2 w-full max-h-[90vh] overflow-x-hidden overflow-y-scroll">
				<div className="relative overflow-hidden mb-4 pt-2 ">
					<div className="flex justify-between items-center mb-2 ">
						<div className="relative">
							<button
								onClick={setAllNotification}
								className="relative text-primary-500 font-medium py-1.5 px-2 text-sm"
							>
								All
								<span className="text-primary-700 text-xs font-semibold p-1 ml-2 rounded-full bg-primary-100">
									{notificationCount}
								</span>
								{!unread ? (
									<span className="absolute w-11/12 h-0.5 bg-primary-600 -bottom-2 transition-all z-10 left-0"></span>
								) : (
									""
								)}
							</button>
							{unreadNotifications.length !== 0 ? (
								<button
									onClick={setUnreadNotification}
									className="relative text-primary-500 font-medium py-1.5 px-2 text-sm"
								>
									Unread
									<span className="text-primary-700 text-xs font-semibold p-1 ml-2 rounded-full bg-primary-100">
										{unreadNotifications.length}
									</span>
									{unread ? (
										<span className="absolute w-11/12 h-0.5 bg-primary-600 -bottom-2 transition-all z-10 left-0"></span>
									) : (
										""
									)}
								</button>
							) : (
								""
							)}
						</div>
						<div className="relative mr-3">
							{unreadNotifications.length !== 0 ? (
								<button
									onClick={markAllAsReadNotification}
									className=" flex justify-center items-center text-primary-500 text-xs font-medium"
								>
									<div className="relative mr-1">
										<CheckIcon className="absolute -left-1 h-4 w-4" />
										<CheckIcon className="h-4 w-4" />
									</div>
									<span className=" md:block hidden">
										Mark all as read
									</span>
								</button>
							) : (
								""
							)}
						</div>
					</div>
					<span className="absolute w-full h-0.5 bg-slate-100 bottom-0"></span>
				</div>
				<div className="relative">
					{notifications.map((notification) => {
						return (
							<Fragment key={notification.id}>
								{notification.data &&
								notification.data.message !== null ? (
									<Fragment>
										<div
											className={`${
												notification.read_at === null
													? "bg-primary-50"
													: "bg-white"
											} relative flex items-start w-full border border-slate-100 py-3 mb-3 rounded-md`}
										>
											<button className="relative md:block hidden m-3 mt-1.5 w-15 h-15 rounded-full text-primary-500 ">
												<h2 className="text-slate-600 font-semibold text-sm flex justify-center items-center ">
													<ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
												</h2>
												<span
													className={`${
														notification.read_at ===
														null
															? "bg-green-400"
															: "bg-blue-400"
													} absolute -left-1 top-1 h-2.5 w-2.5 border-white border-2  rounded-full`}
												></span>
											</button>
											<div className="relative md:pl-0 pl-2 overflow-hidden pr-10">
												<h1 className="text-sm truncate w-11/12 font-semibold text-slate-600">
													{notification.data.title}
												</h1>
												<p className="text-xs ">
													{notification.data.message}
													{notification.data.message}
													{notification.data.message}
												</p>
											</div>
											{notification.read_at !== null ? (
												<EnvelopeOpenIcon className="w-5 h-5 absolute right-4" />
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
