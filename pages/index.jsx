import React, { Fragment, useContext, useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import UseAuth from '../lib/useAuth';
import request from '../lib/request';
import Hero from '../components/Hero';
import { useRouter } from 'next/router';

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

export async function getServerSideProps(context) {
	const {query}= context;
	console.log(context);


	let response =  {
		props:{

		},
	}

	if(query.logout){
		response.redirect = {
			permanent: false,
			destination: "/",
		}
	}
	console.log("query:", query);
	// console.log("cookies:", cookies);
	return response;
}


export default Index;


