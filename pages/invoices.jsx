import Head from "next/head";

import React, { Fragment, useEffect, useState } from "react";
import {
	CheckCircleIcon,
	CreditCardIcon,
	DocumentChartBarIcon,
	DocumentTextIcon,
	EnvelopeOpenIcon,
	ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import Topbar from "../components/Topbar";
import Localstorage from "../lib/localstorage";

const transactions = [
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
const Invoices = ({ auth }) => {
	const { name, email, user, verified } = Localstorage();

	return (
		<Fragment>
			<Head>
				<title>Invoices | WP Plagiarism</title>
			</Head>
			<Topbar title="Invoices" />
			<div className="relative lg:p-4 p-2 w-full max-h-[90vh] overflow-x-hidden overflow-y-scroll">
				<div className="relative pt-4">
					{/* <div className="h-10 px-3 bg-white relative md:flex hidden justify-between items-center w-full border mb-3 border-slate-100 rounded-md">
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
					</div> */}
					{transactions?.map((transaction) => {
						return (
							<Fragment key={transaction.id}>
								<div className="bg-primary-50/50 md:flex-row flex-col relative flex items-center pr-2 justify-between w-full border mb-3 border-slate-100 rounded-md">
									<div className="relative md:w-1/5 w-full md:p-0 p-3  flex justify-start items-center md:m-3 w-15 h-15 rounded-full text-primary-500 ">
										<h2 className="text-slate-600 font-semibold text-sm flex justify-center items-center ">
											<DocumentChartBarIcon className="h-4 w-4" />
										</h2>
										<span
											className={`${
												transaction.status == "success"
													? "bg-green-400"
													: transaction.status ==
													  "canceled"
													? "bg-red-400"
													: "bg-blue-400"
											} absolute md:-left-1 left-2 md:top-0 top-3 h-2.5 w-2.5 border-white border-2  rounded-full`}
										></span>

										<p className="text-xs md:truncate pl-3 md:w-24 w-auto font-semibold text-slate-500/80">
											#{transaction?.transaction_id}
										</p>
									</div>
									<div className="relative ">
										<span
											className={` ${
												transaction.status == "success"
													? "text-green-800 bg-green-100"
													: transaction.status ==
													  "canceled"
													? "text-red-800 bg-red-100"
													: "text-primary-800 bg-primary-100"
											} md:truncate  md:w-1/5 w-auto md:m-3 md:text-center text-start rounded-full px-3 py-1 text-xs font-medium `}
										>{`$${transaction?.amount} USD`}</span>
									</div>

									<p className="text-xs md:text-center text-start md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80 flex md:justify-center justify-start items-center">
										<CreditCardIcon className="h-6 w-6 pr-2" />
										{transaction.method
											? transaction.method
											: "Card"}
									</p>

									<p className="text-xs md:text-center text-start  md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80">
										{transaction.invoice_id
											? transaction.invoice_id
											: "Invoice Number"}
									</p>

									<p className="text-xs md:text-center text-start  md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80">
										{transaction.created_at
											? transaction.created_at
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

export default Invoices;
