import React, { Fragment } from 'react';
import Topbar from '../components/Topbar';
import Localstorage from '../lib/localstorage';

const Settings = () => {
    const {name,email,user,verified} = Localstorage()

    return (
        <Fragment>
            <Topbar title='Settings' />
            <div className="relative p-4">
                <h1>Hello , {name}, {email} {verified}</h1>
            </div>
        </Fragment>
    );
}

export default Settings;