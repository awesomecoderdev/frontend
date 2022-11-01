import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import '../styles/globals.css'
import { Listbox,Popover, Transition } from '@headlessui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';
import UseAuth from '../lib/useAuth';
import Loading from '../components/Loading'
import { motion, AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import Notifications from '../components/Notifications';
import DashboardContents from '../components/DashboardContents';
import Sidebar from '../components/Sidebar';
import request from '../lib/request';
import { protectedRoutes } from "../lib/controller"
import AppContext, { AppContextProvider } from '../context/AppContext';

const App = ({ Component, pageProps}) => {
    // console.clear();
    const {auth,verified,isLoading} = UseAuth({middleware: "auth"})
    const router = useRouter()
    const {route} = router
    const [checkAuth, setCheckAuth] = useState(false);
    const disabledHeader = [
        "/login",
        "/verify-email/[[...params]]",
        "/404"
    ]

    // console.log("route",route);
    return (
        <Fragment>
            <AppContextProvider>
                <Notifications  />
                {disabledHeader.includes(route) || protectedRoutes.includes(route) ? <></> :<Header />}
                { protectedRoutes.includes(route) ?
                    <AnimatePresence>
                        {isLoading ?
                            <Loading
                                variants={{
                                        start:{
                                            opacity: 0.8,
                                        },
                                        finished: {
                                            opacity:1,
                                            transition: {
                                                duration: 1,
                                                ease: 'easeInOut'
                                            }
                                        },
                                        exit:{
                                            scale: 0.8,
                                            transition: {
                                                duration: 1.8,
                                                ease: 'easeInOut',
                                                // type: "spring",
                                                // stiffness: 2600,
                                                // damping: 260
                                            }
                                        }
                                    }}
                                    initial="start"
                                    animate="finished"
                                    exit="exit"
                            />
                        :
                            <motion.section
                                variants={{
                                    start:{
                                        opacity:0,
                                    },
                                    finished: {
                                        opacity:1,
                                        transition: {
                                            duration: 1,
                                            ease: 'easeInOut'
                                        }
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
                                initial="start"
                                animate="finished"
                                exit="exit"
                                className="main w-full  ">
                                <div className="flex w-full h-full">
                                    <Sidebar />
                                    <DashboardContents>
                                        <Component auth={auth} {...pageProps} />
                                    </DashboardContents>
                                </div>
                            </motion.section>
                        }
                    </AnimatePresence>
                :
                    <Component  {...pageProps} />
                }
                {disabledHeader.includes(route) || protectedRoutes.includes(route) ? <></> :<Footer />}
            </AppContextProvider>
        </Fragment>
    );
}

// check ping
// App.getInitialProps = async ({ req }) => {
//     const ping = await request.get('/user/ping').then(res => res.data)
//     console.log('====================================');
//     console.log(ping);
//     console.log('====================================');
//     return { ping: ping }
// }

export default App;
