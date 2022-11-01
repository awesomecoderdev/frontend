import React, { Fragment } from 'react';
import DashboardContents from '../components/DashboardContents';
import Localstorage from '../lib/localstorage';
import Topbar from '../components/Topbar';

const Dashboard = ({children,auth}) => {
    const {name,email,user,verified} = Localstorage()

    return (
        <Fragment>
            <Topbar title='Dashboard' />
            <div className="relative p-4">
                <p>{JSON.stringify(auth)}</p>
                <h1>Hello , {name}, {email} {verified}</h1>
                <p>{JSON.stringify(user)}</p>
            </div>
        </Fragment>
    );
}

export default Dashboard;
