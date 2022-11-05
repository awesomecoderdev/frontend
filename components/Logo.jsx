import Image from 'next/image';
import React, { Fragment } from 'react';

const Logo = ({...props}) => {
    return (
        <Fragment>
            <div {...props}>
                <div className="relative w-10 h-10">
                    <Image
                        // src="/favicon-32x32.png"
                        src="/logo.png"
                        alt="Plagiarism"
                        layout='fill'
                    />
                </div>
                <h1 className="font-semibold mx-2 lg:block hidden text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-800 ">WP Plagiarism</h1>
            </div>

        </Fragment>
    );
}

export default Logo;
