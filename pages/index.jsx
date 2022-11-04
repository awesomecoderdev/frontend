import React, { Fragment, useContext, useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import UseAuth from '../lib/useAuth';
import request from '../lib/request';
import Hero from '../components/Hero';

const Index = ({setNotification,posts}) => {

	return (
		<Fragment>
			<Hero />
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


