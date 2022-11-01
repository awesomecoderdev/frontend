import Head from 'next/head';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import UseAuth from '../lib/useAuth';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [errors, setErrors] = useState([])

    const {login, isLoading, user} = UseAuth({middleware: 'guest'})

    const submitForm = async (event) => {
        event.preventDefault()
        login({email, password, remember, setErrors});
    }

    if (isLoading || user) {
        return <>Loading...</>
    }

    return (
        <Fragment>


            <Head>
                <title>ergodnc — Login</title>
            </Head>

            <div className={"w-1/2 mx-auto bg-white p-5 rounded-lg"}>
                {errors.length > 0 && (
                    <div className="mb-5" >
                        <div className="font-medium text-red-600">
                            Whoops! Something went wrong.
                        </div>

                        <ul className="mt-3 list-disc list-inside text-sm text-red-600">
                            {errors.map(error => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <form onSubmit={submitForm} autoComplete="off">
                    <div>
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                            autoFocus
                            autoComplete="off"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="password">Password</label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    <div className="block mt-4">
                        <label
                            htmlFor="remember_me"
                            className="inline-flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                checked={remember}
                                onChange={event => setRemember(!remember)}
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />

                            <span className="ml-2 text-gray-600">
                            Remember me
                        </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link href="/forgot-password">
                            <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                Forgot your password?
                            </a>
                        </Link>

                        <button className="ml-3">Login</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Login;
