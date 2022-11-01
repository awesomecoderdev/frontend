import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'
import { ArrowLeftOnRectangleIcon, BellAlertIcon, BellIcon, ChatBubbleBottomCenterTextIcon, ChevronDownIcon, Cog6ToothIcon, PencilSquareIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import Localstorage from '../lib/localstorage';
import Link from 'next/link';
import { motion } from "framer-motion"
import UseAuth from '../lib/useAuth';

const Topbar = ({title = "Dashboard"}) => {
    const {name,email,user,verified} = Localstorage()
    const {logout} = UseAuth()

    return (
        <Fragment>
            <div className="relative min-h-[3rem] h-auto p-4 w-full flex justify-between items-center border-b border-slate-300/50">
                <div className="relative">
                    <h2 className='text-sm font-medium text-slate-600' >{title}</h2>
                </div>
                <div className="relative flex items-center">
                    <button className="relative bg-gray-100 rounded-full p-2">
                        <BellIcon className="h-5 w-5 pointer-events-none" />
                    </button>
                    <div className="relative">
                        <button className="relative mx-3 w-9 h-9 rounded-full overflow-hidden ">
                            <Image
                                src="https://awesomecoder.dev/img/profile.jpg"
                                alt="Profile"
                                layout='fill'
                                className='after:'
                            />
                        </button>
                        <motion.div
                            variants={{
                                hidden: {
                                    opacity: 1,
                                    // scale: 0.5
                                },
                                visible: {
                                    opacity: 1,
                                    // scale: 1,
                                    transition: {
                                        delayChildren: 0.05,
                                        staggerChildren: 0.07,
                                    }

                                }
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            initial="hidden"
                            animate="visible"
                            className="absolute z-10 right-0 mt-3 transform w-screen max-w-[17rem] transition ease-in-out duration-200 opacity-100 translate-y-0"
                        >
                            <div class="relative border border-slate-300/50 rounded-lg shadow-lg overflow-hidden">
                                <div class="relative bg-white rounded-lg">
                                    <div class="grid gap-1 py-1">
                                        <div class=" border-b border-slate-300/50 px-4 py-3 text-sm font-medium text-gray-700">
                                            <p className='w-full max-w-[15rem] truncate pr-1'>{name}</p>
                                        </div>
                                        <Link href={"/profile"} passHref>
                                            <motion.a
                                                variants={{
                                                    hidden: {
                                                        x: -10,
                                                        opacity: 0
                                                    },
                                                    visible: {
                                                        x: 0,
                                                        opacity: 1,
                                                        transition: {
                                                            stiffness: 260,
                                                            // repeat: Infinity,
                                                            // repeatDelay: 3
                                                        }
                                                    }
                                                }}
                                                class="flex cursor-pointer flex-row items-center h-10 hover:bg-gray-100 border-l-2 border-transparent hover:border-primary-500 transition-colors"
                                            >
                                                <div class="flex flex-row items-center text-sm font-medium">
                                                    <UserCircleIcon className='h-5 w-5 pointer-events-none mx-3' />
                                                    Profile
                                                </div>
                                            </motion.a>
                                        </Link>
                                        <Link href={"/notifications"} passHref>
                                            <motion.a
                                                variants={{
                                                    hidden: {
                                                        x: -10,
                                                        opacity: 0
                                                    },
                                                    visible: {
                                                        x: 0,
                                                        opacity: 1,
                                                        transition: {
                                                            stiffness: 260,
                                                            // repeat: Infinity,
                                                            // repeatDelay: 3
                                                        }
                                                    }
                                                }}
                                                class="flex cursor-pointer flex-row items-center h-10 hover:bg-gray-100 border-l-2 border-transparent hover:border-primary-500 transition-colors"
                                            >
                                                <div class="relative flex flex-row items-center text-sm font-medium">
                                                    <BellIcon className='h-5 w-5 pointer-events-none mx-3' />
                                                    <span className="absolute h-2 w-2 rounded-full bg-red-500 top-0 left-6"></span>
                                                    Notifications
                                                </div>
                                            </motion.a>
                                        </Link>
                                        <Link href={"/settings"} passHref>
                                            <motion.a
                                                variants={{
                                                    hidden: {
                                                        x: -10,
                                                        opacity: 0
                                                    },
                                                    visible: {
                                                        x: 0,
                                                        opacity: 1,
                                                        transition: {
                                                            stiffness: 260,
                                                            // repeat: Infinity,
                                                            // repeatDelay: 3
                                                        }
                                                    }
                                                }}
                                                class="flex cursor-pointer flex-row items-center h-10 hover:bg-gray-100 border-l-2 border-transparent hover:border-primary-500 transition-colors"
                                            >
                                                <div class="flex flex-row items-center text-sm font-medium">
                                                    <Cog6ToothIcon className='h-5 w-5 pointer-events-none mx-3' />
                                                    Settings
                                                </div>
                                            </motion.a>
                                        </Link>
                                        <Link href={"/support"} passHref>
                                            <motion.a
                                                variants={{
                                                    hidden: {
                                                        x: -10,
                                                        opacity: 0
                                                    },
                                                    visible: {
                                                        x: 0,
                                                        opacity: 1,
                                                        transition: {
                                                            stiffness: 260,
                                                            // repeat: Infinity,
                                                            // repeatDelay: 3
                                                        }
                                                    }
                                                }}
                                                class="flex cursor-pointer flex-row items-center h-10 hover:bg-gray-100 border-l-2 border-transparent hover:border-primary-500 transition-colors"
                                            >
                                                <div class="flex flex-row items-center text-sm font-medium">
                                                    <ChatBubbleBottomCenterTextIcon className='h-5 w-5 pointer-events-none mx-3' />
                                                    Support
                                                </div>
                                            </motion.a>
                                        </Link>
                                        <motion.button
                                            onClick={() => {
                                                logout()
                                            }}
                                            variants={{
                                                hidden: {
                                                    x: -10,
                                                    opacity: 0
                                                },
                                                visible: {
                                                    x: 0,
                                                    opacity: 1,
                                                    transition: {
                                                        stiffness: 260,
                                                        // repeat: Infinity,
                                                        // repeatDelay: 3
                                                    }
                                                }
                                            }}
                                            class="flex cursor-pointer flex-row items-center h-10 hover:bg-gray-100 border-l-2 border-transparent hover:border-primary-500 transition-colors"
                                        >
                                            <div class="flex flex-row items-center text-sm font-medium">
                                                <ArrowLeftOnRectangleIcon className='h-5 w-5 pointer-events-none mx-3' />
                                                Logout
                                            </div>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Topbar;
