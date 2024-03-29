import React, { Fragment } from "react";
import {
	GlobeAsiaAustraliaIcon,
	NewspaperIcon,
} from "@heroicons/react/24/outline";
import DashboardContents from "../components/DashboardContents";
import Localstorage from "../lib/localstorage";
import Topbar from "../components/Topbar";
import Head from "next/head";

const Dashboard = ({ children, auth }) => {
	const { name, email, user, verified } = Localstorage();

	const transaction = {
		status: "success",
	};
	return (
		<Fragment>
			<Head>
				<title>Dashboard | WP Plagiarism</title>
			</Head>
			<Topbar title="Dashboard" />
			<div className="relative lg:p-4 p-2 w-auto max-h-[90vh] overflow-x-hidden overflow-y-scroll">
				<div className="grid grid-cols-3 gap-4 lg:grid-cols-4">
					<div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
						<div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
							<svg
								className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
								<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
							</svg>
						</div>
						<div className="font-medium text-center text-gray-500 dark:text-gray-400">
							Chart
						</div>
					</div>
					<div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
						<div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
							<svg
								className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
						<div className="font-medium text-center text-gray-500 dark:text-gray-400">
							Table
						</div>
					</div>
					<div className="hidden p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 lg:block">
						<div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
							<svg
								className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"></path>
							</svg>
						</div>
						<div className="hidden font-medium text-center text-gray-500 dark:text-gray-400">
							Ticket
						</div>
					</div>
					<div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
						<div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
							<svg
								className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
								<path
									fillRule="evenodd"
									d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
						<div className="font-medium text-center text-gray-500 dark:text-gray-400">
							List
						</div>
					</div>
					<div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
						<div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
							<svg
								className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
						<div className="font-medium text-center text-gray-500 dark:text-gray-400">
							Price
						</div>
					</div>
					<div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
						<div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
							<svg
								className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
							</svg>
						</div>
						<div className="font-medium text-center text-gray-500 dark:text-gray-400">
							Users
						</div>
					</div>
					<div className="hidden p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 lg:block">
						<div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
							<svg
								className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
						<div className="font-medium text-center text-gray-500 dark:text-gray-400">
							Task
						</div>
					</div>
					<div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
						<div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
							<svg
								className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
							</svg>
						</div>
						<div className="font-medium text-center text-gray-500 dark:text-gray-400">
							Custom
						</div>
					</div>
				</div>
			</div>

			<div className="relative lg:p-4 p-2 w-full max-h-[90vh] overflow-x-hidden overflow-y-scroll">
				<div className="py-3">
					<h1 className="text-slate-600 mb-4 text-3xl font-bold sm:text-4xl md:text-[30px]">
						Websites
					</h1>
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

export default Dashboard;
