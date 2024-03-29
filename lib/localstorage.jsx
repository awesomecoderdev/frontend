import React from "react";

const Localstorage = () => {
	const nextAuth =
		localStorage.getItem("auth") &&
		JSON.parse(atob(localStorage.getItem("auth"))).success
			? JSON.parse(atob(localStorage.getItem("auth")))
			: false;
	const user = nextAuth && nextAuth.auth ? nextAuth.auth : false;
	const name = user ? `${user.first_name} ${user.last_name}` : false;
	const email = user.email ? user.email : false;
	const avatar = user.avatar ? user.avatar : false;
	const notificationAlert = nextAuth.alert ? nextAuth.alert : false;
	const verified = nextAuth && nextAuth.verified ? nextAuth.verified : false;
	const authCheck =
		localStorage.getItem("next_auth") &&
		localStorage.getItem("next_auth") == "true"
			? true
			: false;

	return {
		user,
		name,
		avatar,
		notificationAlert,
		email,
		verified,
		authCheck,
	};
};

export default Localstorage;
