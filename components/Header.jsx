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
    // const [check, setCheck] = useState(false)
    // const router = useRouter()
    // const {route} = router
    // useEffect(() => {
    //     if (typeof window !== 'undefined' ){
    //         const {authCheck} = Localstorage()
    //         setCheck(authCheck)
    //     }
    // });
    // console.log("authChecks",authCheck);


    return (
        <Fragment>
            <header className="relative w-full">
                {/* <h1>Hellow {user.email}</h1> */}
                {authCheck ? <>you are login</> :<>You are not login</>}
            </header>
        </Fragment>
    );
}


export default Header;
