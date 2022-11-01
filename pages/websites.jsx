import React, { Fragment } from 'react';
import Topbar from '../components/Topbar';
import Localstorage from '../lib/localstorage';

const Websites = () => {
    const {name,email,user,verified} = Localstorage()

    return (
        <Fragment>
            <Topbar title='Websites' />
            <div className="relative p-4">
                <h1>Hello , {name}, {email} {verified}</h1>
            </div>
        </Fragment>
    );
}

export default Websites;