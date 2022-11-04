import React, { Fragment, useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import {useRouter} from 'next/router'
import Link from 'next/link'
import { BellAlertIcon, BellIcon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react'
import { motion } from "framer-motion";
import UseAuth from '../lib/useAuth';
import Localstorage from '../lib/localstorage';

const Header = ({authCheck}) => {
    const [check, setCheck] = useState(authCheck)
    const router = useRouter()
    const {route} = router
    useEffect(() => {
        if (typeof window !== 'undefined' ){
            const {authCheck} = Localstorage()
            setCheck(authCheck)
        }
    },[route]);
    // console.log("authChecks",authCheck);

    // useEffect(() => {
    //     setCheck(auth && true)
    // }, [auth]);


    return (
        <Fragment>
            <header className="relative w-full">
                <nav className="block w-full rounded-xl shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white text-gray-500 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
                    <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                        <a href="#" className="block antialiased font-sans text-sm leading-normal text-inherit mr-4 cursor-pointer py-1.5 font-normal">
                            <span>Material Tailwind</span>
                        </a>
                        <ul className="hidden items-center gap-6 lg:flex">
                            <li className="block antialiased font-sans text-sm leading-normal text-inherit p-1 font-normal"><a className="flex items-center" href="#">Pages</a></li>
                            <li className="block antialiased font-sans text-sm leading-normal text-inherit p-1 font-normal"><a className="flex items-center" href="#">Account</a></li>
                            <li className="block antialiased font-sans text-sm leading-normal text-inherit p-1 font-normal"><a className="flex items-center" href="#">Blocks</a></li>
                            <li className="block antialiased font-sans text-sm leading-normal text-inherit p-1 font-normal"><a className="flex items-center" href="#">Docs</a></li>
                            </ul>
                        {check ?
                            <Link href={"/dashboard"} passHref>
                                <a className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] hidden lg:inline-block" type="button">
                                    <span>Dashboard</span>
                                </a>
                            </Link>
                        :
                            <button className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] hidden lg:inline-block" type="button">
                                <span>Login</span>
                            </button>
                        }
                    </div>
                </nav>
            </header>
        </Fragment>
    );
}


export default Header;
