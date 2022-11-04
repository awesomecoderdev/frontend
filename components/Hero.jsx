import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <section id='hero' className='relative w-full  bg-gray-50'>
            <div className="relative max-w-7xl flex py-10 min-h-screen mx-auto px-20">
                {/* start:left */}
                    <div className="relative w-1/2">
                        <div className="relative px-10 ">
                            <h1 className='text-7xl font-bold mt-20 text-primary-700/80'>Connect your website today.</h1>
                            <p className="text-md font-extralight text-slate-600 my-10 max-w-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit.
                            </p>
                            <div className="relative flex my-10 space-x-5">
                                <Link href={"#"} passHref>
                                    <a className="text-sm text-white block bg-black px-6 py-3">
                                        Get Started
                                    </a>
                                </Link>
                                <Link href={"#"} passHref>
                                    <a className="text-sm text-slate-600 block  px-6 py-3 ">
                                        <span className="border-b border-slate-500 pb-1">Watch Video</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                {/* end:left */}

                {/* start:right */}
                    <div className="relative w-1/2 ">
                        <Image alt='Hero' src={"/img/banner2.jpg"} layout="fill"  />
                    </div>
                {/* end:right */}
            </div>
        </section>
    );
}

export default Hero;
