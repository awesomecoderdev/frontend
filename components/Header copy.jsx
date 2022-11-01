import React, { Fragment, useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import {useRouter} from 'next/router'
import Link from 'next/link'
import { BellAlertIcon, BellIcon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react'
import { motion } from "framer-motion";
import UseAuth from '../lib/useAuth';

const Header = () => {
    const {user,check,auth} = UseAuth()

    return (
        <Fragment>
            <header className="header w-full  ">
                <div className="container mx-auto">
                    <nav >
                        <div className="flex justify-between items-center h-18 md:h-20 2xl:justify-start 2xl:space-x-10">
                            {/* start::logo */}
                            <div className="relative w-auto flex items-center justify-center p-4">
                                <div className="relative w-8 h-10">
                                    <Image
                                        src="/favicon-32x32.png"
                                        alt="Plagiarism"
                                        layout='fill'
                                    />
                                </div>
                                <h1 className="font-semibold mx-2 lg:block hidden">Plagiarism</h1>
                            </div>
                            {/* end::logo */}
                            {/* start:menu */}
                            <nav className='flex items-center gap-x-6'>
                                <Link href={"#"} passHref={true}>
                                    <a className={`btn flex flex-row w-auto justify-between items-center btn-lg btn-link nav-outline`}>
                                        <span>Home</span>
                                    </a>
                                </Link>
                                <Link href={"#"} passHref={true}>
                                    <a className={`btn flex flex-row w-auto justify-between items-center btn-lg btn-link nav-outline`}>
                                        <span>Products</span>
                                    </a>
                                </Link>
                                <Link href={"#"} passHref={true}>
                                    <a className={`btn flex flex-row w-auto justify-between items-center btn-lg btn-link nav-outline`}>
                                        <span>Pricing</span>
                                    </a>
                                </Link>
                                <Link href={"#"} passHref={true}>
                                    <a className={`btn flex flex-row w-auto justify-between items-center btn-lg btn-link nav-outline`}>
                                        <span>Updates</span>
                                    </a>
                                </Link>
                                <Link href={"#"} passHref={true}>
                                    <a className={`btn flex flex-row w-auto justify-between items-center btn-lg btn-link nav-outline`}>
                                        <span>Comunity</span>
                                    </a>
                                </Link>
                            </nav>
                            {/* end:menu */}
                        </div>
                    </nav>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;
