import React, { Fragment, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { BellAlertIcon, BellIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import UseAuth from "../lib/useAuth";
import Localstorage from "../lib/localstorage";
import Logo from "./Logo";

const Header = ({ authCheck }) => {
	const [check, setCheck] = useState(authCheck);
	const router = useRouter();
	const { route, query } = router;
	const oauth = query.oauth && query.oauth == "true" ? true : false;

	useEffect(() => {
		if (typeof window !== "undefined") {
			const { authCheck } = Localstorage();
			setCheck(authCheck);
		}
	}, [route]);

	return (
		<Fragment>
			<header className="relative w-full bg-slate-50 text-slate-500">
				<nav className="block w-full rounded-xl backdrop-saturate-200 backdrop-blur-2xl  text-slate-500 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 ">
					<div className="container mx-auto flex items-center justify-between text-blue-gray-900">
						<a
							href="#"
							className="block antialiased font-sans text-sm leading-normal text-inherit mr-4 cursor-pointer py-1.5 font-normal"
						>
							<div className="relative w-14 h-14">
								<Image
									src="/logo.png"
									alt="Plagiarism"
									layout="fill"
								/>
							</div>
						</a>
						<div className="hidden items-center gap-6 lg:flex">
							<div className="block antialiased font-sans text-sm leading-normal text-inherit p-1 font-normal">
								<a className="flex items-center" href="#">
									Pages
								</a>
							</div>
							<div className="block antialiased font-sans text-sm leading-normal text-inherit p-1 font-normal">
								<a className="flex items-center" href="#">
									Account
								</a>
							</div>
							<div className="block antialiased font-sans text-sm leading-normal text-inherit p-1 font-normal">
								<a className="flex items-center" href="#">
									Blocks
								</a>
							</div>
							<div className="block antialiased font-sans text-sm leading-normal text-inherit p-1 font-normal">
								<a className="flex items-center" href="#">
									Docs
								</a>
							</div>
							{check || oauth ? (
								<Link href={"/dashboard"} passHref>
									<a className="border-slate-300 border rounded-lg px-5 py-2.5 focus-visible:outline-none ml-auto text-sm font-medium  hover:underline text-transparent bg-clip-text bg-gradient-to-r to-primary-800 from-slate-900">
										Dashboard
									</a>
								</Link>
							) : (
								<Link href={"/login"} passHref>
									<a className="border-slate-300 border rounded-lg px-5 py-2.5 focus-visible:outline-none ml-auto text-sm font-medium hover:underline text-transparent bg-clip-text bg-gradient-to-r to-primary-800 from-slate-900">
										Login
									</a>
								</Link>
							)}
						</div>
					</div>
				</nav>
			</header>
		</Fragment>
	);
};

export default Header;
