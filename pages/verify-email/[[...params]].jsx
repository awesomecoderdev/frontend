import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import request from "../../lib/request";
import AppContext from "../../context/AppContext";
import Cookies from "js-cookie";
import Head from "next/head";
// import Loading from '../../components/Loading'

const VerifyEmail = () => {
	const router = useRouter();
	const { route } = router;
	const [isValid, setIsValid] = useState(false);
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState(false);
	const [success, setSuccess] = useState(false);
	const query = router.query;
	const params = query.params;
	const userid = params && params[0] ? params[0] : false;
	const hash = userid && params && params[1] ? params[1] : false;
	const expires = query.expires ? query.expires : false;
	const signature = query.signature ? query.signature : false;
	const { notification, setNotification, closeNotification } =
		useContext(AppContext);

	useEffect(() => {
		async function verifyEmail() {
			try {
				if (params && userid && hash && expires && signature) {
					const verify =
						"/user/verify-email/" +
						userid +
						"/" +
						hash +
						"?expires=" +
						expires +
						"&signature=" +
						signature;
					request.post(verify).then((res) => {
						const response = res.data;
						console.log(response);
						if (response.success) {
							setSuccess(true);
							setErr(false);
							setIsValid(true);
							setNotification({
								success: "true",
								title: "Congratulations!",
								message: response.message,
							});
							Cookies.set("verified", "true");
						} else {
							setIsValid(false);
							if (response.status === 429) {
								// Too many attempts.
								// console.log("Too many attempts.");
								setErr(
									"Somethings went wrong. Please try again after sometimes."
								);
								setNotification({
									success: "false",
									title: "Too many attempts!",
									message:
										"Somethings went wrong. Please try again after sometimes.",
								});
							} else if (response.status === 403) {
								// Invalid signature.
								// console.log("Invalid signature.");
								setErr("Your verification link has expired.");
								setNotification({
									success: "false",
									title: "Invalid verification link!",
									message:
										"Your verification link has expired. Please request for a new verification email which contains a confirmation link.",
								});
							} else {
								setNotification({
									success: "false",
									title: "Unauthenticated!",
									message:
										"Pleas login and try again after sometimes.",
								});
								// router.push("/login")
							}
						}
					});
				}
			} catch (e) {
				setIsValid(false);
				setErr(
					"Somethings went wrong. Please try again after sometimes."
				);
				setNotification({
					success: "false",
					title: "Error!",
					message:
						"Somethings went wrong. Please try again after sometimes.",
				});
				// console.error(e);
			}
		}
		verifyEmail();
		closeNotification();
	}, []);

	const sendVerificationEmail = async () => {
		setLoading(true);
		try {
			request.post("/user/resend-verification").then((res) => {
				const response = res.data;
				// console.log(response);
				if (response.success) {
					setLoading(false);
					setNotification({
						success: "true",
						title: "Congratulations!",
						message: response.message,
					});
				} else {
					setTimeout(() => {
						setLoading(false);
						setNotification({
							success: "false",
							title: "Too many attempts!",
							message: response.message,
						});
					}, 1000);
				}
			});
		} catch (e) {
			setIsValid(false);
			setErr("Somethings went wrong. Please try again after sometimes.");
			// console.error(e);

			setTimeout(() => {
				setNotification({
					success: "false",
					title: "Error!",
					message:
						"Somethings went wrong. Please try again after sometimes.",
				});
			}, 1000);
		}

		closeNotification();
	};

	return (
		<Fragment>
			<Head>
				<title>Email Verification</title>
			</Head>
			<motion.div
				variants={{
					start: {
						opacity: 0,
					},
					finished: {
						opacity: 1,
						transition: {
							duration: 0.3,
							ease: "easeInOut",
						},
					},
					exit: {
						opacity: 0,
						transition: {
							duration: 3,
							ease: "easeInOut",
							type: "spring",
							stiffness: 2600,
							damping: 260,
						},
					},
				}}
				initial="start"
				animate="finished"
				exit="exit"
				className="max-w-md w-screen p-4 relative flex items-center justify-center min-h-screen h-auto"
			>
				<div className="relative bg-white max-w-md w-screen p-5 py-10 rounded-lg flex-col flex justify-center">
					<div className="relative flex justify-center items-center mb-5">
						<div className="bg-primary-100 h-12 w-12 rounded-full p-3 flex justify-center items-center">
							<EnvelopeIcon
								strokeWidth={1.3}
								className="h-8 w-8 pointer-events-none text-primary-600"
								aria-hidden="true"
							/>
						</div>
					</div>
					<div className="relative">
						<h1 className="mb-2 md:mb-3 text-2xl font-medium text-center text-slate-600">
							Check your email
						</h1>
					</div>
					<p className="text-base md:text-lg text-slate-600 text-center mb-8">
						We We sent a verification link to your email
					</p>
					<button
						onClick={(e) => sendVerificationEmail(e)}
						className="max-w-xs mx-auto my-4 focus-visible:outline-none w-full flex justify-center items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300        font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						{loading ? (
							<>
								<svg
									className="animate-spin mr-3 h-5 w-5 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Loading ...
							</>
						) : (
							<>Resend a new link.</>
						)}
					</button>
				</div>
			</motion.div>
		</Fragment>
	);
};

export default VerifyEmail;

// import React from 'react';
// import {motion} from 'framer-motion'
// const icon = {
//   hidden: {
//     opacity: 0,
//     pathLength: 0,
//     fill: "rgba(255, 255, 255, 0)"
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     fill: "rgba(255, 255, 255, 1)"
//   }
// };

// const svgVariants = {
//     start:{
//         // opacity:0,
//         // pathLength: 0,
//         stroke: "#10b981",
//     },
//     finished: {
//         // opacity:1,
//         // pathLength: 1,
//         stroke: "#064e3b",
//         transition: {
//             duration: 1.8,
//             ease: 'easeInOut'
//         }
//     }
// }

// const pathVariants = {
//     start:{
//         opacity:0,
//         pathLength: 0,
//         fill: "rgba(255, 255, 255, 0.1)",
//     },
//     finished: {
//         opacity:[0.7,1],
//         pathLength: [0,1],
//         fill: "rgba(255, 255, 255, 0.95)",
//         transition: {
//             delay: 0.5,
//             duration: 3,
//             ease: 'easeInOut',
//             yoyo: Infinity,
//         }
//     }
// }

// const Loading = () => {

// const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }
//     return (
//         <div className='relative w-full min-h-screen flex justify-center items-center '>
//             {/* <motion.div className='w-20 h-20 bg-white'
//                 // initial={{ scale: 0 }}
//                 // animate={{ scale: 1 }}
//                 variants={svgVariants}
//                 // transition={{
//                 //   type: "spring",
//                 //   stiffness: 2600,
//                 //   damping: 260
//                 // }}
//                 // animate={{
//                 //   scale: [1, 2, 2, 1, 1],
//                 //   rotate: [0, 0, 270, 270, 0],
//                 //   borderRadius: ["20%", "20%", "50%", "50%", "20%"],
//                 // }}
//             >
//             </motion.div> */}
//             <motion.svg variants={svgVariants} initial="start" animate="finished"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} className="w-16 h-16">
//                 <motion.path variants={pathVariants} initial="start" animate="finished"
//                  strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
//             </motion.svg>

//         </div>
//     );
// }

// export default Loading;
