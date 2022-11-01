import React, {useEffect, useState} from 'react'
import useSWR from 'swr'
import request from './request'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Notifications from '../components/Notifications'
import { notAllowedRoutes, protectedRoutes } from "../lib/controller"

const UseAuth = ({middleware} = {}) => {
    const router = useRouter()
    const {route} = router
    const [isLoading, setIsLoading] = useState(true)
    const [isVerified, setIsVerified] = useState(false)

    useEffect(() => {
        if (user || error) {
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        }

        if(user && user.success == true){
            if(notAllowedRoutes.includes(route)){
                mutate() && router.push('/dashboard')
            }
        }

        // if (middleware == 'guest' && user && user.success) router.push('/')
        // if (middleware == 'auth' && user && !user.success) {
        //     // if(protectedRoutes.includes(route) && route != "/login"){
        //     //     router.push('/login')
        //     // }
        // }
    })

    const {data: user, error, mutate} = useSWR('/user',
        () => request.post('/user')
        .then((res) => {
            const response = res.data;
            if(response.success){
                localStorage.setItem("auth",btoa(JSON.stringify(response)))
                localStorage.setItem("next_auth","true")
                Cookies.set("next_auth","true")
                if(response.verified){
                    setIsVerified(true);
                    Cookies.set("verified","true")
                }else{
                    setIsVerified(false);
                    Cookies.set("verified","false")
                }
            }else{
                localStorage.removeItem("auth")
                Cookies.set("next_auth","false")
                setIsVerified(false);
                localStorage.setItem("next_auth","false")
                // mutate() && router.push('/login')
            }

            return response;
        })
    )

    // csrf
    const csrf = () => request.get('/csrf')

    // login
    const login = async ({setErrors,setLoading, ...props}) => {
        setErrors([])
        await csrf()
        request
            .post('user/login', props)
            .then((res) => {
                const response = res.data;
                console.log(res);
                if(response.success){
                    localStorage.setItem("next_auth","true")
                    localStorage.setItem("auth",btoa(JSON.stringify(response)))
                    Cookies.set("next_auth","true")
                    if(response.verified){
                        setIsVerified(true);
                        Cookies.set("verified","true")
                    }else{
                        setIsVerified(false);
                        Cookies.set("verified","false")
                    }
                    router.push('/dashboard') && mutate()
                }else{
                    localStorage.setItem("next_auth","false")
                    Cookies.set("next_auth","false")
                    if(response.status == 401){
                        setErrors({
                            password: ["Password didn't match. Please try again."],
                        })
                    }else{
                        setErrors(response.errors ? response.errors : [])
                    }
                    setLoading(false)
                }
            })
            .catch(error => {
                // if (error.response.status != 422) throw error
                // setErrors(Object.values(error.response.data.errors).flat())
                setLoading(false)
            })
    }

    // logout
    const logout = async () => {
        const logout = await request.post('user/logout')
        Cookies.set("next_auth","false")
        router.push('/') && mutate(null)
    }

    // auth
    const auth = (user && user.auth) ? user.auth : [];

    // verified
    const verified = user ? user.verified : false;

    return {
        auth,
        user,
        csrf,
        login,
        logout,
        isLoading,
        verified
    }
}

export default UseAuth;