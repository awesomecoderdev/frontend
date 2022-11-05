import React, { Fragment, useContext, useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftOnRectangleIcon, BanknotesIcon, ChatBubbleBottomCenterTextIcon, Cog6ToothIcon, DocumentChartBarIcon, HomeIcon, LinkIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { Transition } from '@headlessui/react'
import { motion } from "framer-motion"
import Logo from "./Logo"
import UseAuth from '../lib/useAuth'

const sidebars = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        icon: HomeIcon,
    },
    {
        name: 'Websites',
        href: '/websites',
        icon: LinkIcon,
    },
    {
        name: 'Payments',
        href: '/payments',
        icon: BanknotesIcon,
    },
    {
        name: 'Invoices',
        href: '/invoices',
        icon: DocumentChartBarIcon,
    },
    // {
    //     name: 'Settings',
    //     href: '/settings',
    //     icon: Cog6ToothIcon,
    // },
    // {
    //     name: 'Support',
    //     href: '/support',
    //     icon: ChatBubbleBottomCenterTextIcon,
    // },
]


const Sidebar = ({children, ...props}) => {
    const router = useRouter()
    const {route} = router
    const {logout} = UseAuth()

    return (
        <div className="relative bg- lg:w-80 w-auto min-h-screen h-full border-r border-slate-300/50 " >
            <div className="relative w-full ">
                <Logo className="relative w-full flex items-center lg:justify-start justify-center lg:ml-4 ml-0 md:p-4 md:bp-0 p-2" />
            </div>
            <div className="relative pt-0 md:p-4 p-2 text-slate-700 ">
                <motion.nav className=" relative grid space-y-3 font-semibold font-inter "
                    variants={{
                        hidden: {
                            opacity: 1, scale: 0
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
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
                >
                    {sidebars.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            passHref={true}
                        >
                            <motion.a
                                className={` ${route == item.href ? "bg-slate-100 " : "bg-slate-50/10"} transition md:p-3 p-2 duration-150 relative cursor-pointer hover:bg-slate-100 rounded-lg flex lg:justify-start justify-center items-center`}
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
                                >
                                    <item.icon className="h-5 w-5 pointer-events-none" aria-hidden="true" />
                                    <span className="text-xs lg:block hidden ml-3 pointer-events-none text-slate-500">{item.name}</span>
                            </motion.a>
                        </Link>
                    ))}
                    {/* <motion.a
                        className={`bg-slate-50/10 transition md:p-3 p-2 duration-150 relative cursor-pointer hover:bg-slate-100 rounded-lg flex lg:justify-start justify-center items-center`}
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
                        >
                            <ArrowLeftOnRectangleIcon className="h-5 w-5 pointer-events-none" aria-hidden="true" />
                            <span className="text-xs lg:block hidden ml-3 pointer-events-none text-slate-500">Logout</span>
                    </motion.a> */}
                </motion.nav>
            </div>
        </div>
    );
}


export default Sidebar;
