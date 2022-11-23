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
				<form action="#" method="POST">
					<div className="relative bg-white overflow-hidden rounded-xl border border-slate-300/50">
						<div className=" px-4 py-5 sm:p-6">
							<div className="grid grid-cols-6 gap-6">
								<div className="col-span-6 sm:col-span-3">
									<label
										htmlFor="first-name"
										className="block text-sm font-medium text-gray-700"
									>
										First name
									</label>
									<input
										type="text"
										name="first-name"
										id="first-name"
										value={user?.first_name}
										autoComplete="given-name"
										className="mt-1 block w-full transition p-2.5 rounded-md border-slate-200 border focus-visible:border-slate-400  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-3">
									<label
										htmlFor="last-name"
										className="block text-sm font-medium text-gray-700"
									>
										Last name
									</label>
									<input
										type="text"
										name="last-name"
										id="last-name"
										value={user?.last_name}
										autoComplete="family-name"
										className="mt-1 block w-full transition p-2.5 rounded-md border-slate-200 border focus-visible:border-slate-400  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-3">
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700"
									>
										Email address
									</label>
									<input
										type="text"
										name="email"
										id="email"
										disabled="true"
										value={user?.email}
										autoComplete="email"
										className="mt-1 block w-full transition p-2.5 rounded-md border-slate-200 border focus-visible:border-slate-400  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-3">
									<label
										htmlFor="country"
										className="block text-sm font-medium text-gray-700"
									>
										Country
									</label>
									<select
										id="country"
										name="country"
										autoComplete="country-name"
										className="mt-1 block w-full p-2.5 rounded-md border border-gray-300 bg-white focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									>
										<option>United States</option>
										<option>Canada</option>
										<option>Mexico</option>
									</select>
								</div>

								<div className="col-span-6">
									<label
										htmlFor="street-address"
										className="block text-sm font-medium text-gray-700"
									>
										Street address
									</label>
									<input
										type="text"
										name="street-address"
										id="street-address"
										autoComplete="street-address"
										className="mt-1 block w-full transition p-2.5 rounded-md border-slate-200 border focus-visible:border-slate-400  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-6 lg:col-span-2">
									<label
										htmlFor="city"
										className="block text-sm font-medium text-gray-700"
									>
										City
									</label>
									<input
										type="text"
										name="city"
										id="city"
										autoComplete="address-level2"
										className="mt-1 block w-full transition p-2.5 rounded-md border-slate-200 border focus-visible:border-slate-400  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-3 lg:col-span-2">
									<label
										htmlFor="region"
										className="block text-sm font-medium text-gray-700"
									>
										State / Province
									</label>
									<input
										type="text"
										name="region"
										id="region"
										autoComplete="address-level1"
										className="mt-1 block w-full transition p-2.5 rounded-md border-slate-200 border focus-visible:border-slate-400  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-3 lg:col-span-2">
									<label
										htmlFor="postal-code"
										className="block text-sm font-medium text-gray-700"
									>
										ZIP / Postal code
									</label>
									<input
										type="text"
										name="postal-code"
										id="postal-code"
										autoComplete="postal-code"
										className="mt-1 block w-full transition p-2.5 rounded-md border-slate-200 border focus-visible:border-slate-400  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>
						</div>
						<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
							<button
								type="submit"
								className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Save
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
