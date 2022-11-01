import React, { Fragment, useContext, useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import UseAuth from '../lib/useAuth';
import request from '../lib/request';

const Index = ({setNotification,posts}) => {


    // console.log('====================================');
    // console.log(posts);
    // console.log('====================================');
    // const {check, auth} = NextAuth()
    // console.log("auth",auth);

  return (
    <Fragment>
        <section className="main w-full">
          <div className="container mx-auto w-full">
          <section className="pt-12 bg-gray-50 sm:pt-16">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="px-6 text-lg text-gray-600 font-inter">Smart email campaign builder, made for Developers</h1>
                        <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                            Turn your visitors into profitable
                            <span className="relative inline-flex sm:inline">
                                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                                <span className="relative"> business </span>
                            </span>
                        </p>

                        <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                            <a
                                href="#"
                                title=""
                                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button"
                            >
                                Get more customers
                            </a>

                            <a
                                href="#"
                                title=""
                                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                                role="button"
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Watch free demo
                            </a>
                        </div>

                        <p className="mt-8 text-base text-gray-500 font-inter">60 Days free trial · No credit card required</p>
                    </div>
                </div>

                <div className="pb-12 bg-white">
                    <div className="relative">
                        <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                        <div className="relative mx-auto">
                            <div className="lg:max-w-6xl lg:mx-auto">
                                {/* <img className="transform scale-110" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png" alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          </div>
        </section>
        <section className="dark:bg-gray-800 dark:text-gray-100">
        	<div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        		<div className="max-w-3xl mx-auto text-center">
        			<h2 className="text-3xl font-extrabold sm:text-4xl">All the features you want</h2>
        			<p className="mt-4 text-lg dark:text-gray-400">Pellentesque viverra, leo id euismod laoreet, nunc risus molestie orci, vel faucibus quam justo id mauris.</p>
        		</div>
        		<dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        			<div className="flex">
        				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
        					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        				</svg>
        				<div className="ml-3">
        					<dt className="text-lg font-medium">Quisque at urna</dt>
        					<dd className="mt-2 dark:text-gray-400">Vivamus ultricies bibendum tortor, molestie imperdiet justo cursus eu. Donec quis arcu magna. Integer tempor egestas dolor.</dd>
        				</div>
        			</div>
        			<div className="flex">
        				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
        					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        				</svg>
        				<div className="ml-3">
        					<dt className="text-lg font-medium">Quisque eu dui lacinia</dt>
        					<dd className="mt-2 dark:text-gray-400">Quisque ultricies volutpat sapien nec varius. Sed sit amet justo vestibulum, efficitur risus quis, gravida libero.</dd>
        				</div>
        			</div>
        			<div className="flex">
        				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
        					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        				</svg>
        				<div className="ml-3">
        					<dt className="text-lg font-medium">Mauris dignissim</dt>
        					<dd className="mt-2 dark:text-gray-400">Phasellus nec molestie arcu. Proin dictum, lorem mollis rutrum efficitur, lectus velit pharetra elit, et dictum purus nibh auctor velit.</dd>
        				</div>
        			</div>
        			<div className="flex">
        				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
        					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        				</svg>
        				<div className="ml-3">
        					<dt className="text-lg font-medium">Proin nulla eros</dt>
        					<dd className="mt-2 dark:text-gray-400">Sed ornare ultricies gravida. Morbi egestas dolor turpis, ornare laoreet est vehicula non.</dd>
        				</div>
        			</div>
        			<div className="flex">
        				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
        					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        				</svg>
        				<div className="ml-3">
        					<dt className="text-lg font-medium">Proin dictum</dt>
        					<dd className="mt-2 dark:text-gray-400">Lorem mollis rutrum efficitur, lectus velit pharetra elit, et dictum purus nibh auctor velit.</dd>
        				</div>
        			</div>
        			<div className="flex">
        				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
        					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        				</svg>
        				<div className="ml-3">
        					<dt className="text-lg font-medium">Quisque eu dui lacinia</dt>
        					<dd className="mt-2 dark:text-gray-400">Cras a mauris tincidunt, scelerisque justo sit amet, hendrerit est. Fusce venenatis diam fringilla metus convallis, at dapibus enim congue.</dd>
        				</div>
        			</div>
        			<div className="flex">
        				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
        					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        				</svg>
        				<div className="ml-3">
        					<dt className="text-lg font-medium">Cras vel bibendum tellus</dt>
        					<dd className="mt-2 dark:text-gray-400">Curabitur molestie neque ac massa pulvinar, nec sollicitudin nunc consequat. Donec mattis orci eros, vitae porttitor risus pretium eget.</dd>
        				</div>
        			</div>
        			<div className="flex">
        				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
        					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        				</svg>
        				<div className="ml-3">
        					<dt className="text-lg font-medium">Dignissim magna</dt>
        					<dd className="mt-2 dark:text-gray-400">Cras ac lectus erat. Curabitur condimentum luctus nisi, non lacinia ipsum.</dd>
        				</div>
        			</div>
        		</dl>
        	</div>
        </section>
        <section className="my-8">
	<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
		<h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
	</div>
	<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
		<div className="flex flex-col items-center mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
			<p>Leroy Jenkins</p>
		</div>
		<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
					<path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">Accusantium illum cupiditate harum asperiores iusto quos quasi quis quae! Fugit doloribus, voluptatum quidem magnam velit excepturi nobis, reprehenderit ducimus incidunt quisquam quae veritatis, quos iure harum.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
					<path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
			<p>Leroy Jenkins</p>
		</div>
	</div>
</section>
<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
					<h3 className="text-3xl font-semibold">Morbi tempor</h3>
					<span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Vestibulum diam nunc</span>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl font-semibold tracking-wide">Donec porta enim vel </h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-400">Dec 2020</time>
						<p className="mt-3">Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl font-semibold tracking-wide">Aliquam sit amet nunc ut</h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-400">Jul 2019</time>
						<p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl font-semibold tracking-wide">Pellentesque habitant morbi</h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2016</time>
						<p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </Fragment>
  );
}


// export const getStaticProps = async () => {
//   const res = await fetch('')
//   const ping = await res.json()
//   console.log('====================================');
//   console.log("ping",ping);
//   console.log('====================================');
//     return {
//         props: {
//             ping,
//         },
//     }
// }


export default Index;


