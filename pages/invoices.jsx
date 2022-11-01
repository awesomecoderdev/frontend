import React, { Fragment } from 'react';
import Topbar from '../components/Topbar';
import Localstorage from '../lib/localstorage';

const Invoices = ({auth}) => {
    const {name,email,user,verified} = Localstorage()

    return (
        <Fragment>
            <Topbar title='Invoices' />
            <div className="relative p-4">
                {/* <p>{JSON.stringify(auth)}</p> */}
                <h1>Hello , {name}, {email} {verified}</h1>
            </div>
        </Fragment>
    );
}

export default Invoices;
