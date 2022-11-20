import React, { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
	ArrowLeftOnRectangleIcon,
	BellAlertIcon,
	BellIcon,
	ChatBubbleBottomCenterTextIcon,
	ChevronDownIcon,
	Cog6ToothIcon,
	EllipsisVerticalIcon,
	PencilSquareIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Localstorage from "../lib/localstorage";
import Link from "next/link";
import { motion } from "framer-motion";
import UseAuth from "../lib/useAuth";
import Cookies from "js-cookie";

const Topbar = ({ title = "Dashboard" }) => {
	const [dropDown, setDropDown] = useState(false);
	const { name, email, user, verified, avatar, notificationAlert } =
		Localstorage();
	const { logout } = UseAuth();
	const dropDownMotion = {
		hidden: {
			x: -5,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				stiffness: 260,
				// repeat: Infinity,
				// repeatDelay: 3
			},
		},
	};

	useEffect(() => {
		document.addEventListener("click", handelOutsideClick, true);
	}, []);
	const dropDownRef = useRef(null);
	const handelOutsideClick = (e) => {
		if (dropDownRef != null && dropDownRef.current?.contains(e.target)) {
			// console.log("Inside");
		} else {
			setDropDown(false);
		}
	};

	return (
		<Fragment>
			<div className="relative min-h-[3rem] h-auto p-4 w-full flex justify-between items-center border-b border-slate-300/50">
				<div className="relative">
					<h2 className="text-sm font-medium text-slate-600">
						{title}
					</h2>
				</div>
				<div className="relative flex items-center">
					<div className="relative" ref={dropDownRef}>
						<div className="relative flex">
							<Link href={"/notifications"} passHref={true}>
								<a className="flex cursor-pointer rounded-full hover:bg-slate-50 justify-center items-center h-10 w-10  transition-colors">
									<div className="relative flex flex-row items-center text-sm font-medium">
										<BellIcon className="h-5 w-5 pointer-events-none mx-3" />
										{notificationAlert ? (
											<span className="absolute h-2 w-2 rounded-full bg-red-500 top-0 left-6"></span>
										) : (
											""
										)}
									</div>
								</a>
							</Link>
							<button
								onClick={() => setDropDown(!dropDown)}
								className="relative mx-3 w-9 h-9 rounded-full overflow-hidden  border-primary-500 bg-slate-200"
							>
								{avatar ? (
									<Image
										src={avatar}
										alt="Profile"
										layout="fill"
										className="after: "
									/>
								) : (
									<h2 className="text-slate-600 font-semibold text-sm ">
										{name ? name.trim().slice(0, 1) : ""}
									</h2>
								)}
							</button>
						</div>

						<Transition
							as={Fragment}
							show={dropDown}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<motion.div
								variants={{
									hidden: {
										opacity: 1,
										// scale: 0.5
									},
									visible: {
										opacity: 1,
										// scale: 1,
										transition: {
											delayChildren: 0.02,
											staggerChildren: 0.05,
										},
									},
								}}
								transition={{
									type: "spring",
									stiffness: 260,
									damping: 20,
								}}
								initial="hidden"
								animate="visible"
								className="absolute z-10 right-0 mt-3 transform w-screen lg:max-w-[16rem] max-w-[14rem] transition ease-in-out duration-200 opacity-100 translate-y-0"
							>
								<span className="absolute pointer-events-none h-3 w-3 bg-white -top-1.5 right-[1.42rem] z-20 rotate-45 border-t border-l border-slate-300/50"></span>
								{/* dropdonw corner */}
								<div className="relative border border-slate-300/50 rounded-lg shadow-lg overflow-hidden">
									<div className="relative bg-white rounded-lg">
										<div className="grid gap-1 py-1">
											<div className=" border-b border-slate-300/50 px-4 py-3 text-sm font-medium text-gray-700">
												<p className="w-full lg:max-w-[14rem] max-w-[12rem]  truncate pr-1">
													{name}
												</p>
											</div>
											<Link href={"/profile"} passHref>
												<motion.a
													variants={dropDownMotion}
													className="flex cursor-pointer flex-row items-center h-10 hover:bg-gray-100 border-l-2 border-transparent hover:border-primary-500 transition-colors"
													onClick={() =>
														setDropDown(false)
													}
												>
													<div className="flex flex-row items-center text-sm font-medium">
														<UserCircleIcon className="h-5 w-5 pointer-events-none mx-3" />
														Profile
													</div>
												</motion.a>
											</Link>
											<Link
												href={"/notifications"}
												passHref
											>
												<motion.a
													variants={dropDownMotion}
													className="flex cursor-pointer flex-row items-center h-10 hover:bg-gray-100 border-l-2 border-transparent hover:border-primary-500 transition-colors"
													onClick={() =>
														setDropDown(false)
													}
												>
													<div className="relative flex flex-row items-center text-sm font-medium">
														<BellIcon className="h-5 w-5 pointer-events-none mx-3" />
														{notificationAlert ? (
															<span className="absolute h-2 w-2 rounded-full bg-red-500 top-0 left-6"></span>
														) : (
															""
														)}
														Notifications
													</div>
												</motion.a>
											</Link>
											<Link href={"/settings"} passHref>
												<motion.a
													variants={dropDownMotion}
													className="flex cursor-pointer flex-row items-center h-10 hover:bg-gray-100 border-l-2 border-transparent hover:border-primary-500 transition-colors"
													onClick={() =>
														setDropDown(false)
													}
												>
													<div className="flex flex-row items-center text-sm font-medium">
														<Cog6ToothIcon className="h-5 w-5 pointer-events-none mx-3" />
														Settings
													</div>
												</motion.a>
											</Link>
											<Link href={"/support"} passHref>
												<motion.a
													variants={dropDownMotion}
													className="flex cursor-pointer flex-row items-center h-10 hover:bg-gray-100 border-l-2 border-transparent hover:border-primary-500 transition-colors"
													onClick={() =>
														setDropDown(false)
													}
												>
													<div className="flex flex-row items-center text-sm font-medium">
														<ChatBubbleBottomCenterTextIcon className="h-5 w-5 pointer-events-none mx-3" />
														Support
													</div>
												</motion.a>
											</Link>
											<motion.button
												onClick={() => {
													Cookies.set(
														"next_auth",
														"false"
													);
													setDropDown(false);
													logout();
												}}
												variants={dropDownMotion}
												className="flex cursor-pointer flex-row items-center h-10 hover:bg-gray-100 border-l-2 border-transparent hover:border-primary-500 transition-colors"
											>
												<div className="flex flex-row items-center text-sm font-medium">
													<ArrowLeftOnRectangleIcon className="h-5 w-5 pointer-events-none mx-3" />
													Logout
												</div>
											</motion.button>
										</div>
									</div>
								</div>
							</motion.div>
						</Transition>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Topbar;
