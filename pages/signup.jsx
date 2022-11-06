import React, { Fragment, useContext, useEffect, useState } from 'react';
import { SupportIcon } from "@heroicons/react/solid"
import AuthContext from '../context/AuthContext';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Router, { useRouter } from "next/router";
import request from '../lib/request';
import UseAuth from '../lib/useAuth';
import Logo from '../components/Logo';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '../context/AppContext';

const Signup = () => {
    const {notification, setNotification,closeNotification} = useContext(AppContext);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const {csrf} = UseAuth()

    const setOauth = () => {
        csrf()
        request.post("oauth/google").then(res => {
            const response = res.data
            if(response.success){
                // setOauth(response.oauth)
                window.location = response.oauth
            }else{
                setNotification({
                    success: "false",
                    title: "Unauthenticated!",
                    message: "Something went wrong. Please try again after sometimes.",
                })
                closeNotification()
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        csrf()
        request.post("/user/register",{
            first_name : fname,
            last_name : lname,
            email : email,
            password : password,
            confirmed : passwordConfirmation,
        }).then(res => {
            const response = res.data;
            if(response.success){
                setErrors([])
                setNotification({
                    success: "true",
                    title: "Congratulations!",
                    message: "Your account has been registered.",
                })
                closeNotification();
                setTimeout(() => {
                    Router.push("/dashboard")
                }, 1000);
            }else{
                setNotification({
                    success: "false",
                    title: "Unauthenticated!",
                    message: "Something went wrong. Please try again after sometimes.",
                })
                setErrors(response.errors ? response.errors : [])
                closeNotification();
            }
            console.log(response)
        }).catch(err => {
            console.log(err)
            setNotification({
                success: "false",
                title: "Unauthenticated!",
                message: "Something went wrong. Please try again after sometimes.",
            })
            closeNotification();
        });
        setLoading(false);
    }

    return (
        <Fragment>
            <Head>
                <title>Sign Up | Plagiarism</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <motion.div
                variants={{
                    start:{
                        opacity:0,
                    },
                    finished: {
                        opacity:1,
                    },
                    exit: {
                        opacity: 0,
                        transition: {
                            duration: 3,
                            ease: 'easeInOut',
                            type: "spring",
                            stiffness: 2600,
                            damping: 260
                        },
                    }
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut'
                }}
                initial="start"
                animate="finished"
                exit="exit"
                className="relative w-full"
            >
                <div className="relative w-full max-w-7xl md:py-1 sm:py-5 py-1 lg:px-10 px-4 mx-auto text-slate-500 ">
                    <div className="relative  p-2 sm:p-4 md:p-6 w-full flex items-center justify-between">
                        <div className="relative flex items-center justify-start">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo.png"
                                    alt="Plagiarism"
                                    layout='fill'
                                />
                            </div>
                            <h1 className="sm:block hidden font-semibold mx-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-800 ">WP Plagiarism</h1>
                        </div>
                        <div className="relative">
                            <Link href={"/login"} >
                                <a className="border-slate-300 border rounded-lg px-5 py-2.5 focus-visible:outline-none ml-auto text-sm font-medium hover:underline text-transparent bg-clip-text bg-gradient-to-r to-primary-800 from-slate-900">
                                    Log in
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        {/* start:content */}
                        <div className="relative w-full ">
                            <div className="p-4 lg:w-screen w-auto max-w-md mx-auto min-h-screen h-auto bg-white rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <form className="p-0" onSubmit={(e) => {handleSubmit(e)}}>
                                    <h2 className='text-3xl font-black my-2 text-slate-500' >
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-primary-700 opacity-80">
                                            Sign Up.
                                        </span>
                                    </h2>
                                    <p className='text-sm font-medium my-3 text-slate-500' >
                                        Create an account to start
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-slate-700 "> experience with new technology!</span>
                                    </p>
                                    <div className="relative text-slate-500 my-4">
                                        <span onClick={setOauth} className="w-full cursor-pointer flex justify-center items-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg  hover:bg-gray-50 ">
                                            <div className="px-4 py-2 pointer-events-none">
                                                <svg className="w-5 h-5" viewBox="0 0 40 40">
                                                    <path
                                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                                        fill="#FFC107" />
                                                    <path
                                                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                                        fill="#FF3D00" />
                                                    <path
                                                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                                        fill="#4CAF50" />
                                                    <path
                                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                                        fill="#1976D2" />
                                                </svg>
                                            </div>
                                            <span className="py-3 text-sm font-bold text-center focus-visible:outline-none hover:underline text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-primary-900 opacity-80">
                                                Sign up with Google
                                            </span>
                                        </span>
                                    </div>
                                    {/* <div className="relative flex justify-between items-center py-2.5 ">
                                        <span className='h-0.5 bg-gray-500/10 flex-auto'></span>
                                        <span className='px-4 text-sm font-semibold text-slate-400'>or</span>
                                        <span className='h-0.5 bg-gray-500/10 flex-auto'></span>
                                    </div> */}

                                    <div className="relative flex space-x-4">
                                        <div className="p-0 w-1/2">
                                            <label htmlFor="fname" className="block my-1 text-sm font-medium text-slate-400">First Name</label>
                                            <input
                                                type="text"
                                                value={fname}
                                                onChange={e => setFname(e.target.value)}
                                                name="fname"
                                                id="fname"
                                                className={`${errors.first_name ? "border-red-500" : "border-slate-300" } transition  border focus-visible:outline-none focus-visible:border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 `}
                                                placeholder="First name"
                                                required="" />
                                            <p className={`${errors.first_name ? "opacity-100" : "opacity-0" } text-xs font-medium py-1 px-1 text-red-500`}>
                                                {errors.first_name ? errors.first_name : "First name "}
                                            </p>
                                        </div>
                                        <div className="p-0 w-1/2">
                                            <label htmlFor="lname" className="block my-1 text-sm font-medium text-slate-400">Last Name</label>
                                            <input
                                                type="text"
                                                value={lname}
                                                onChange={e => setLname(e.target.value)}
                                                name="lname" id="lname"
                                                className={`${errors.last_name ? "border-red-500" : "border-slate-300" } transition  border focus-visible:outline-none focus-visible:border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 `}
                                                placeholder="Last name"
                                                required="" />
                                            <p className={`${errors.last_name ? "opacity-100" : "opacity-0" } text-xs font-medium py-1 px-1 text-red-500`}>
                                                {errors.last_name ? errors.last_name : "Last name "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-0">
                                        <label htmlFor="email" className="block my-1 text-sm font-medium text-slate-400">Email</label>
                                        <input
                                            type="text"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            name="email" id="email"
                                            className={`${errors.email ? "border-red-500" : "border-slate-300" } transition  border focus-visible:outline-none focus-visible:border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 `}
                                            placeholder="Enter your email"
                                            required="" />
                                        <p className={`${errors.email ? "opacity-100" : "opacity-0" } text-xs font-medium py-1 px-1 text-red-500`}>
                                            {errors.email ? errors.email : "Email"}
                                        </p>
                                    </div>
                                    <div className="p-0">
                                        <label htmlFor="password" className="block my-1 text-sm font-medium text-slate-400">Password</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            name="password" id="password"
                                            className={`${errors.password ? "border-red-500" : "border-slate-300" } transition  border focus-visible:outline-none focus-visible:border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 `}
                                            placeholder="Password"
                                            required=""
                                        />
                                        <p className={`${errors.password ? "opacity-100" : "opacity-0" } text-xs font-medium py-1 px-1 text-red-500`} >
                                            {errors.password ? errors.password : "Password"}
                                        </p>
                                    </div>
                                    <div className="p-0">
                                        <label htmlFor="confirmed" className="block my-1 text-sm font-medium text-slate-400">Confirm Password</label>
                                        <input
                                            type="password"
                                            value={passwordConfirmation}
                                            onChange={e => setPasswordConfirmation(e.target.value)}
                                            name="confirmed" id="confirmed"
                                            className={`${errors.password ? "border-red-500" : "border-slate-300" } transition  border focus-visible:outline-none focus-visible:border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 `}
                                            placeholder="Confirm Password"
                                            required=""
                                        />
                                        <p className={`${errors.confirmed ? "opacity-100" : "opacity-0" } text-xs font-medium py-1 px-1 text-red-500`} >
                                            {errors.confirmed ? errors.confirmed : "Confirm Password"}
                                        </p>
                                    </div>
                                    <button type="submit" className="my-4 focus-visible:outline-none w-full flex justify-center items-center text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        {loading ?
                                            <>
                                                <svg className="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Loading ...
                                            </>
                                        :
                                            <>Sine Up</>
                                        }
                                    </button>
                                    <div className="md:flex hidden text-sm  justify-between items-center font-medium text-gray-500">
                                        <span>
                                        Don&rsquo;t have an account?
                                        </span>
                                        <Link href={"/signup"} passHref>
                                            <a className=" focus-visible:outline-none ml-auto text-sm font-medium hover:underline text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-primary-700 ">
                                                Create account
                                            </a>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* end:content */}
                    </div>
                </div>
            </motion.div>
        </Fragment>
    );
}

export default Signup;

