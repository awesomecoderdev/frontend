import React from 'react';

const Localstorage = () => {
    const nextAuth = ( localStorage.getItem("auth") && JSON.parse(atob(localStorage.getItem("auth"))).success ) ? JSON.parse(atob(localStorage.getItem("auth"))) : false;
    const user = nextAuth && nextAuth.auth ? nextAuth.auth : false;
    const name = user ? `${user.first_name} ${user.last_name}` : false;
    const email = user ? user.email: false;
    const verified = nextAuth && nextAuth.verified ? nextAuth.verified : false;
    return {
        user,
        name,
        email,
        verified
    };
}

export default Localstorage;
