import Image from 'next/image';
import React, { Fragment } from 'react';

const Logo = ({...props}) => {
    return (
        <Fragment>
            <div {...props}>
                <div className="relative w-8 h-10">
                    <Image
                        src="/favicon-32x32.png"
                        alt="Plagiarism"
                        layout='fill'
                    />
                </div>
                <h1 className="font-semibold mx-2 lg:block hidden">Plagiarism</h1>
            </div>
        </Fragment>
    );
}

export default Logo;
