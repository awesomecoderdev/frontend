import Head from "next/head";
import Link from "next/link";
import request from "../lib/request";
import Localstorage from "../lib/localstorage";
import Topbar from "../components/Topbar";
import Image from "next/image";

export default function Profile() {
	const { name, email, user, verified } = Localstorage();

	return (
		<>
			<Head>
				<title>Profile | WP Plagiarism</title>
			</Head>
			<Topbar title="Profile" />

			<div className="relative lg:p-4 p-2 w-full max-h-[90vh] overflow-x-hidden overflow-y-scroll">
				<div className="overflow-hidden bg-white shadow sm:rounded-lg">
					<div className="px-4 py-5 sm:px-6">
						<h3 className="text-lg font-medium leading-6 text-gray-900">
							Account Information
						</h3>
						<p className="mt-1 max-w-2xl text-sm text-gray-500">
							Personal details and application.
						</p>
					</div>
					<div className="border-t border-gray-200">
						<dl>
							<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									Full name
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
									{name}
								</dd>
							</div>
							<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									Email address
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
									{email}
								</dd>
							</div>
							<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									About
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
									Fugiat ipsum ipsum deserunt culpa aute sint
									do nostrud anim incididunt cillum culpa
									consequat. Excepteur qui ipsum aliquip
									consequat sint. Sit id mollit nulla mollit
									nostrud in ea officia proident. Irure
									nostrud pariatur mollit ad adipisicing
									reprehenderit deserunt qui eu.
								</dd>
							</div>
							<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									Attachments
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
									<ul
										role="list"
										className="divide-y divide-gray-200 rounded-md border border-gray-200"
									>
										<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
											<div className="flex w-0 flex-1 items-center">
												{/* <!-- Heroicon name: mini/paper-clip --> */}
												<svg
													className="h-5 w-5 flex-shrink-0 text-gray-400"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
														clipRule="evenodd"
													/>
												</svg>
												<span className="ml-2 w-0 flex-1 truncate">
													resume_back_end_developer.pdf
												</span>
											</div>
											<div className="ml-4 flex-shrink-0">
												<a
													href="#"
													className="font-medium text-primary-600 hover:text-primary-500"
												>
													Download
												</a>
											</div>
										</li>
										<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
											<div className="flex w-0 flex-1 items-center">
												{/* <!-- Heroicon name: mini/paper-clip --> */}
												<svg
													className="h-5 w-5 flex-shrink-0 text-gray-400"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
														clipRule="evenodd"
													/>
												</svg>
												<span className="ml-2 w-0 flex-1 truncate">
													coverletter_back_end_developer.pdf
												</span>
											</div>
											<div className="ml-4 flex-shrink-0">
												<a
													href="#"
													className="font-medium text-primary-600 hover:text-primary-500"
												>
													Download
												</a>
											</div>
										</li>
									</ul>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</>
	);
}
