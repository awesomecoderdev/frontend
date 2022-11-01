import React, { Fragment } from 'react';

const Topbar = ({title = "Dashboard"}) => {
    return (
        <Fragment>
            <div className="relative min-h-[3rem] p-4 w-full flex justify-between items-center bg-gray-500">
                <h2 className='text-sm font-medium text-slate-600' >{title}</h2>
                <div className="relative">
                    Hello Ibrahim
                </div>
            </div>
        </Fragment>
    );
}

export default Topbar;
