import Head from "next/head";
import React, { Fragment, useState } from "react";
import {
	CheckCircleIcon,
	DocumentTextIcon,
	ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import Topbar from "../components/Topbar";
import Localstorage from "../lib/localstorage";

const Payments = () => {
	const { name, email, user, verified } = Localstorage();
	const [tab, setTab] = useState("all");

	return (
		<Fragment>
			<Head>
				<title>Payments | WP Plagiarism</title>
			</Head>
			<Topbar title="Payments" />
			<div className="relative lg:px-4 lg:pb-4 px-2 pb-2 pt-0 w-full max-h-[90vh] overflow-x-hidden overflow-y-scroll">
				<div className="border-b border-gray-200 dark:border-gray-700">
					<ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
						<li className="mr-2">
							<button
								onClick={(e) => setTab("all")}
								className={` ${
									tab == "all"
										? "border-primary-300 hover:border-primary-400  "
										: "border-transparent hover:border-primary-400  text-slate-500 hover:text-slate-600"
								} inline-flex p-4 rounded-t-lg border-b-2  transition-all  group`}
							>
								<DocumentTextIcon className="mr-2 pointer-events-none w-5 h-5 transition-all text-primary-400" />
								All
							</button>
						</li>

						<li className="mr-2">
							<button
								onClick={(e) => setTab("success")}
								className={` ${
									tab == "success"
										? "border-green-300 hover:border-green-400  "
										: "border-transparent hover:border-green-400  text-slate-500 hover:text-slate-600"
								} inline-flex p-4 rounded-t-lg border-b-2  transition-all  group`}
							>
								<CheckCircleIcon className="mr-2 pointer-events-none w-5 h-5 transition-all text-green-400" />
								Success
							</button>
						</li>
						<li className="mr-2">
							<button
								onClick={(e) => setTab("canceled")}
								className={` ${
									tab == "canceled"
										? "border-red-300 hover:border-red-400  "
										: "border-transparent hover:border-red-400  text-slate-500 hover:text-slate-600"
								} inline-flex p-4 rounded-t-lg border-b-2  transition-all  group`}
							>
								<ExclamationCircleIcon className="mr-2 pointer-events-none w-5 h-5 transition-all text-red-400" />
								Canceled
							</button>
						</li>
					</ul>
				</div>
			</div>
		</Fragment>
	);
};

export default Payments;
