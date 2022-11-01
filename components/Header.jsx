import React, { Fragment, useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import {useRouter} from 'next/router'
import Link from 'next/link'
import { BellAlertIcon, BellIcon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react'
import { motion } from "framer-motion";
import UseAuth from '../lib/useAuth';

const Header = () => {
    const [user, setUser] = useState([]);
    const [check, setCheck] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem("next_auth") && localStorage.getItem("next_auth") == "true") {
            setCheck(true)
            // const nextAuth = (localStorage.getItem("auth") && JSON.parse(atob(localStorage.getItem("auth"))).success ) ? JSON.parse(atob(localStorage.getItem("auth"))) : false;
            // const auth = nextAuth && nextAuth.auth ? nextAuth.auth : false;
            // setUser(auth)
        }
    }, []);

    return (
        <Fragment>
            <header className="relative w-full">
                {/* <h1>Hellow {user.email}</h1> */}
                {check ? <>you are login</> :<>You are not login</>}
            </header>
        </Fragment>
    );
}

export default Header;
