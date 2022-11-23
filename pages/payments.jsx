import Head from "next/head";
import React, { Fragment, useState } from "react";
import {
	CheckCircleIcon,
	CreditCardIcon,
	DocumentTextIcon,
	EnvelopeOpenIcon,
	ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import Topbar from "../components/Topbar";
import Localstorage from "../lib/localstorage";

const payments = [
	{
		id: "1",
		transaction_id: "AD0D689Osdfsdfsdfsdf",
		name: "John Doe",
		email: "johndoe@example.com",
		phone: "+1 (921) 5132012",
		created_at: "16-5-2015 9:50:89",
		amount: 24,
		status: "success",
	},
	{
		id: "2",
		transaction_id: "AD0D6895",
		name: "John Doe 2",
		email: "johndoe@example.com",
		phone: "+1 (921) 5132012",
		created_at: "16-5-2015 9:50:89",
		amount: 24,
		status: "success",
	},
	{
		id: "3",
		transaction_id: "AD0D6899",
		name: "John Doe 3",
		created_at: "16-5-2015 9:50:89",
		amount: 24,
		email: "johndoe@example.com",
		phone: "+1 (921) 5132012",
		status: "canceled",
	},
	{
		id: "4",
		transaction_id: "AD0D6891",
		name: "John Doe 4",
		email: "johndoe@example.com",
		phone: "+1 (921) 5132012",
		amount: 24,
		created_at: "16-5-2015 9:50:89",
		status: "success",
	},
];
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

				<div className="relative pt-4">
					<div
						className={` h-10 px-3 bg-white relative flex justify-between items-center w-full border mb-3 border-slate-100 rounded-md`}
					>
						<p className="text-xs  w-1/5 font-semibold  text-start text-slate-500">
							# Transaction ID
						</p>

						<p className="text-xs text-start ml-3  w-1/5 font-semibold text-slate-500">
							Amount
						</p>

						<p className="text-xs text-center  w-1/5 font-semibold text-slate-500">
							Payment Method
						</p>

						<p className="text-xs text-center  w-1/5 font-semibold text-slate-500">
							Invoice Number
						</p>

						<p className="text-xs text-center  w-1/5 font-semibold text-slate-500">
							Payment Date
						</p>
					</div>
					{payments.map((payment) => {
						return (
							<Fragment key={payment.id}>
								<div
									className={`${
										payment.read_at === null
											? "bg-primary-50/50"
											: "bg-white"
									} relative flex items-center pr-2 justify-between w-full border mb-3 border-slate-100 rounded-md`}
								>
									<div className="relative w-1/5  flex justify-start items-center m-3 w-15 h-15 rounded-full text-primary-500 ">
										<h2 className="text-slate-600 font-semibold text-sm flex justify-center items-center ">
											<CreditCardIcon className="h-4 w-4" />
										</h2>
										<span
											className={`${
												payment.status == "success"
													? "bg-green-400"
													: payment.status ==
													  "canceled"
													? "bg-red-400"
													: "bg-blue-400"
											} absolute -left-1 top-0 h-2.5 w-2.5 border-white border-2  rounded-full`}
										></span>

										<p className="text-xs truncate pl-3 w-24 font-semibold text-slate-500/80">
											#{payment?.transaction_id}
										</p>
									</div>
									<p
										className={` ${
											payment.status == "success"
												? "text-green-400"
												: payment.status == "canceled"
												? "text-red-400"
												: "text-primary-400"
										} text-xs truncate w-1/5 text-start font-semibold `}
									>
										{`$${payment?.amount} USD`}
									</p>

									<p className="text-xs text-center w-1/5 font-semibold text-slate-500/80 flex justify-center items-center">
										<CreditCardIcon className="h-6 w-6 pr-2" />
										{payment.method
											? payment.method
											: "Card"}
									</p>

									<p className="text-xs text-center  w-1/5 font-semibold text-slate-500/80">
										{payment.invoice_id
											? payment.invoice_id
											: "Invoice Number"}
									</p>

									<p className="text-xs text-center  w-1/5 font-semibold text-slate-500/80">
										{payment.created_at
											? payment.created_at
											: ""}
									</p>
								</div>
							</Fragment>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default Payments;
