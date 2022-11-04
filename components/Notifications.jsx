import { Transition } from '@headlessui/react';
import { CheckCircleIcon, ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

const Notifications = () => {
    const {notification, setNotification,showNotification,setShowNotification,closeNotification} = useContext(AppContext);

    useEffect(() => {
        setTimeout(() => {
            setShowNotification(true)
        }, 1000);

        // setTimeout(() => {
        //     setShowNotification(false)
        //     setTimeout(() => {
        //         setNotification({
        //             success: false,
        //         })
        //     }, 1000);
        // }, 8000);
        // console.log("setNotification triggered");
    }, [notification,setShowNotification]);

    // close notifications
    // const closeNotification = () => {
    //     setShowNotification(false)
    //     setTimeout(() => {
    //         setNotification({
    //             success: false
    //         })
    //     }, 1000);
    // }

    {/* <div className="absolute animate-ping z-10 rounded-full bg-red-100 top-0 right-0 bottom-0 left-0 scale-[30%]"></div> */}


    return (
        <Fragment>
            <section id="notifications" className="w-full flex flex-row items-center justify-center z-50">
                <div className="fixed container inset-0 flex items-end px-4 py-6 pointer-events-none md:p-6 md:items-start" role="alert">
                    <div className="w-full flex flex-col items-center space-y-4 md:items-end">
                    { notification.success ?
                        <Transition as={Fragment} show={showNotification}
                            enter="transform ease-in-out duration-200 transition"
                            enterFrom="translate-y-2 opacity-0 md:translate-y-0 md:translate-x-2"
                            enterTo="translate-y-0 opacity-100 md:translate-x-0"
                            // leave="transition ease-in duration-100"
                            // leaveFrom="opacity-100"
                            // leaveTo="opacity-0"
                            leave="transform ease-in-out duration-200 transition"
                            leaveFrom="translate-y-0 md:translate-x-0 opacity-100"
                            leaveTo="translate-y-5 md:translate-y-0 md:translate-x-2 opacity-0"
                        >
                            <div className="w-full max-w-sm bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="p-4">
                                    <div className="flex items-start">
                                        <div className={` ${(notification.success && notification.success == "true") ? "bg-green-50" : " bg-red-50" } relative flex items-center justify-center rounded-full flex-shrink-0 w-10 h-10 `}>
                                            { (notification.success && notification.success == "true") ?
                                                <CheckCircleIcon fill="none" className={`text-green-600 stroke-current w-6 h-6 font-bold z-20`} role="img" /> :
                                                <ExclamationCircleIcon fill="none" className="stroke-current text-red-600 w-6 h-6 font-bold z-20" role="img" />
                                            }
                                        </div>
                                        <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-slate-900">
                                            {notification?.title}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-600">
                                            {notification?.message}
                                        </p>
                                    </div>
                                        <div className="flex-shrink-0 flex -mr-2 -mt-2">
                                            <div onClick={closeNotification} className="flex flex-row w-auto justify-between items-center cursor-pointer transition-all ease-in-out duration-150 hover:bg-gray-50 p-1 rounded-full">
                                                <XMarkIcon className=" h-5 w-5 font-semibold text-slate-600 pointer-events-none" role="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                        :
                        <></>
                    }
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Notifications;
