import Head from "next/head";
import React, { Fragment } from "react";
import {
	GlobeAsiaAustraliaIcon,
	NewspaperIcon,
} from "@heroicons/react/24/outline";
import Topbar from "../../components/Topbar";
import Localstorage from "../../lib/localstorage";

const transaction = {
	status: "success",
};
const Websites = () => {
	const { name, email, user, verified } = Localstorage();

	return (
		<Fragment>
			<Head>
				<title>Websites | WP Plagiarism</title>
			</Head>
			<Topbar title="Websites" />
			<div className="relative lg:p-4 p-2 w-full max-h-[90vh] overflow-x-hidden overflow-y-scroll">
				<div className=" md:flex-row flex-col relative flex items-center pr-2 justify-between w-full border mb-3 border-slate-100 rounded-md">
					<div className="relative md:w-1/5 w-full md:p-0 flex justify-start items-center md:m-3 w-15 h-15 rounded-full text-primary-500 ">
						<h2 className="text-slate-600 font-semibold text-sm flex justify-center items-center ">
							<GlobeAsiaAustraliaIcon className="h-4 w-4" />
						</h2>
						<span
							className={`${
								transaction?.status == "success"
									? "bg-green-400"
									: transaction?.status == "canceled"
									? "bg-red-400"
									: "bg-green-400"
							} absolute md:-left-1 left-2 md:top-0 top-3 h-2.5 w-2.5 border-white border-2  rounded-full`}
						></span>

						<p className="text-xs md:truncate pl-3  w-auto font-semibold text-slate-500/80">
							awesomecoder.dev
						</p>
					</div>
					<div className="relative ">
						<span
							className={` ${
								transaction?.status == "success"
									? "text-green-800 bg-green-100"
									: transaction.status == "canceled"
									? "text-red-800 bg-red-100"
									: "text-primary-800 bg-primary-100"
							} md:truncate  md:w-1/5 w-auto md:m-3 md:text-center text-start rounded-full px-3 py-1 text-xs font-medium `}
						>
							Active
						</span>
					</div>

					<p className="text-xs md:text-center text-start md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80 flex md:justify-center justify-start items-center">
						<NewspaperIcon className="h-6 w-6 pr-2" />
						34
					</p>

					<code className="truncate max-w-xs border border-primary-400 text-xs md:text-center text-start  md:w-1/5 w-full md:m-3 p-2 rounded-md font-semibold text-slate-500/80">
						adjflajdflaldfkjaljfdlajfdlajflajsfdlakjdflfjladf
					</code>

					<p className="text-xs md:text-center text-start  md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80">
						15 Jan 2023
					</p>
				</div>
				<div className=" md:flex-row flex-col relative flex items-center pr-2 justify-between w-full border mb-3 border-slate-100 rounded-md">
					<div className="relative md:w-1/5 w-full md:p-0 flex justify-start items-center md:m-3 w-15 h-15 rounded-full text-primary-500 ">
						<h2 className="text-slate-600 font-semibold text-sm flex justify-center items-center ">
							<GlobeAsiaAustraliaIcon className="h-4 w-4" />
						</h2>
						<span
							className={`${
								transaction?.status == "success"
									? "bg-green-400"
									: transaction?.status == "canceled"
									? "bg-red-400"
									: "bg-green-400"
							} absolute md:-left-1 left-2 md:top-0 top-3 h-2.5 w-2.5 border-white border-2  rounded-full`}
						></span>

						<p className="text-xs md:truncate pl-3  w-auto font-semibold text-slate-500/80">
							awesomecoder.dev
						</p>
					</div>
					<div className="relative ">
						<span
							className={` ${
								transaction?.status == "success"
									? "text-green-800 bg-green-100"
									: transaction.status == "canceled"
									? "text-red-800 bg-red-100"
									: "text-primary-800 bg-primary-100"
							} md:truncate  md:w-1/5 w-auto md:m-3 md:text-center text-start rounded-full px-3 py-1 text-xs font-medium `}
						>
							Active
						</span>
					</div>

					<p className="text-xs md:text-center text-start md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80 flex md:justify-center justify-start items-center">
						<NewspaperIcon className="h-6 w-6 pr-2" />
						34
					</p>

					<code className="truncate max-w-xs border border-primary-400 text-xs md:text-center text-start  md:w-1/5 w-full md:m-3 p-2 rounded-md font-semibold text-slate-500/80">
						adjflajdflaldfkjaljfdlajfdlajflajsfdlakjdflfjladf
					</code>

					<p className="text-xs md:text-center text-start  md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80">
						15 Jan 2023
					</p>
				</div>
				<div className=" md:flex-row flex-col relative flex items-center pr-2 justify-between w-full border mb-3 border-slate-100 rounded-md">
					<div className="relative md:w-1/5 w-full md:p-0 flex justify-start items-center md:m-3 w-15 h-15 rounded-full text-primary-500 ">
						<h2 className="text-slate-600 font-semibold text-sm flex justify-center items-center ">
							<GlobeAsiaAustraliaIcon className="h-4 w-4" />
						</h2>
						<span
							className={`${
								transaction?.status == "success"
									? "bg-green-400"
									: transaction?.status == "canceled"
									? "bg-red-400"
									: "bg-green-400"
							} absolute md:-left-1 left-2 md:top-0 top-3 h-2.5 w-2.5 border-white border-2  rounded-full`}
						></span>

						<p className="text-xs md:truncate pl-3  w-auto font-semibold text-slate-500/80">
							awesomecoder.dev
						</p>
					</div>
					<div className="relative ">
						<span
							className={` ${
								transaction?.status == "success"
									? "text-green-800 bg-green-100"
									: transaction.status == "canceled"
									? "text-red-800 bg-red-100"
									: "text-primary-800 bg-primary-100"
							} md:truncate  md:w-1/5 w-auto md:m-3 md:text-center text-start rounded-full px-3 py-1 text-xs font-medium `}
						>
							Active
						</span>
					</div>

					<p className="text-xs md:text-center text-start md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80 flex md:justify-center justify-start items-center">
						<NewspaperIcon className="h-6 w-6 pr-2" />
						34
					</p>

					<code className="truncate max-w-xs border border-primary-400 text-xs md:text-center text-start  md:w-1/5 w-full md:m-3 p-2 rounded-md font-semibold text-slate-500/80">
						adjflajdflaldfkjaljfdlajfdlajflajsfdlakjdflfjladf
					</code>

					<p className="text-xs md:text-center text-start  md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80">
						15 Jan 2023
					</p>
				</div>
				<div className=" md:flex-row flex-col relative flex items-center pr-2 justify-between w-full border mb-3 border-slate-100 rounded-md">
					<div className="relative md:w-1/5 w-full md:p-0 flex justify-start items-center md:m-3 w-15 h-15 rounded-full text-primary-500 ">
						<h2 className="text-slate-600 font-semibold text-sm flex justify-center items-center ">
							<GlobeAsiaAustraliaIcon className="h-4 w-4" />
						</h2>
						<span
							className={`${
								transaction?.status == "success"
									? "bg-green-400"
									: transaction?.status == "canceled"
									? "bg-red-400"
									: "bg-green-400"
							} absolute md:-left-1 left-2 md:top-0 top-3 h-2.5 w-2.5 border-white border-2  rounded-full`}
						></span>

						<p className="text-xs md:truncate pl-3  w-auto font-semibold text-slate-500/80">
							awesomecoder.dev
						</p>
					</div>
					<div className="relative ">
						<span
							className={` ${
								transaction?.status == "success"
									? "text-green-800 bg-green-100"
									: transaction.status == "canceled"
									? "text-red-800 bg-red-100"
									: "text-primary-800 bg-primary-100"
							} md:truncate  md:w-1/5 w-auto md:m-3 md:text-center text-start rounded-full px-3 py-1 text-xs font-medium `}
						>
							Active
						</span>
					</div>

					<p className="text-xs md:text-center text-start md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80 flex md:justify-center justify-start items-center">
						<NewspaperIcon className="h-6 w-6 pr-2" />
						34
					</p>

					<code className="truncate max-w-xs border border-primary-400 text-xs md:text-center text-start  md:w-1/5 w-full md:m-3 p-2 rounded-md font-semibold text-slate-500/80">
						adjflajdflaldfkjaljfdlajfdlajflajsfdlakjdflfjladf
					</code>

					<p className="text-xs md:text-center text-start  md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80">
						15 Jan 2023
					</p>
				</div>
				<div className=" md:flex-row flex-col relative flex items-center pr-2 justify-between w-full border mb-3 border-slate-100 rounded-md">
					<div className="relative md:w-1/5 w-full md:p-0 flex justify-start items-center md:m-3 w-15 h-15 rounded-full text-primary-500 ">
						<h2 className="text-slate-600 font-semibold text-sm flex justify-center items-center ">
							<GlobeAsiaAustraliaIcon className="h-4 w-4" />
						</h2>
						<span
							className={`${
								transaction?.status == "success"
									? "bg-green-400"
									: transaction?.status == "canceled"
									? "bg-red-400"
									: "bg-green-400"
							} absolute md:-left-1 left-2 md:top-0 top-3 h-2.5 w-2.5 border-white border-2  rounded-full`}
						></span>

						<p className="text-xs md:truncate pl-3  w-auto font-semibold text-slate-500/80">
							awesomecoder.dev
						</p>
					</div>
					<div className="relative ">
						<span
							className={` ${
								transaction?.status == "success"
									? "text-green-800 bg-green-100"
									: transaction.status == "canceled"
									? "text-red-800 bg-red-100"
									: "text-primary-800 bg-primary-100"
							} md:truncate  md:w-1/5 w-auto md:m-3 md:text-center text-start rounded-full px-3 py-1 text-xs font-medium `}
						>
							Active
						</span>
					</div>

					<p className="text-xs md:text-center text-start md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80 flex md:justify-center justify-start items-center">
						<NewspaperIcon className="h-6 w-6 pr-2" />
						34
					</p>

					<code className="truncate max-w-xs border border-primary-400 text-xs md:text-center text-start  md:w-1/5 w-full md:m-3 p-2 rounded-md font-semibold text-slate-500/80">
						adjflajdflaldfkjaljfdlajfdlajflajsfdlakjdflfjladf
					</code>

					<p className="text-xs md:text-center text-start  md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80">
						15 Jan 2023
					</p>
				</div>
				<div className=" md:flex-row flex-col relative flex items-center pr-2 justify-between w-full border mb-3 border-slate-100 rounded-md">
					<div className="relative md:w-1/5 w-full md:p-0 flex justify-start items-center md:m-3 w-15 h-15 rounded-full text-primary-500 ">
						<h2 className="text-slate-600 font-semibold text-sm flex justify-center items-center ">
							<GlobeAsiaAustraliaIcon className="h-4 w-4" />
						</h2>
						<span
							className={`${
								transaction?.status == "success"
									? "bg-green-400"
									: transaction?.status == "canceled"
									? "bg-red-400"
									: "bg-green-400"
							} absolute md:-left-1 left-2 md:top-0 top-3 h-2.5 w-2.5 border-white border-2  rounded-full`}
						></span>

						<p className="text-xs md:truncate pl-3  w-auto font-semibold text-slate-500/80">
							awesomecoder.dev
						</p>
					</div>
					<div className="relative ">
						<span
							className={` ${
								transaction?.status == "success"
									? "text-green-800 bg-green-100"
									: transaction.status == "canceled"
									? "text-red-800 bg-red-100"
									: "text-primary-800 bg-primary-100"
							} md:truncate  md:w-1/5 w-auto md:m-3 md:text-center text-start rounded-full px-3 py-1 text-xs font-medium `}
						>
							Active
						</span>
					</div>

					<p className="text-xs md:text-center text-start md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80 flex md:justify-center justify-start items-center">
						<NewspaperIcon className="h-6 w-6 pr-2" />
						34
					</p>

					<code className="truncate max-w-xs border border-primary-400 text-xs md:text-center text-start  md:w-1/5 w-full md:m-3 p-2 rounded-md font-semibold text-slate-500/80">
						adjflajdflaldfkjaljfdlajfdlajflajsfdlakjdflfjladf
					</code>

					<p className="text-xs md:text-center text-start  md:w-1/5 w-full md:m-3 md:p-0 p-1.5 font-semibold text-slate-500/80">
						15 Jan 2023
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export default Websites;
