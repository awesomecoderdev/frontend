import Cookies from 'js-cookie';
import React, { useState } from 'react';

const NextAuth = () => {
    const check = (Cookies.get("next_auth") && (Cookies.get("next_auth")=="true") ) ? true : false ;
    const auth = (Cookies.get("next_session") && JSON.parse(atob(Cookies.get("next_session"))).name ) ? JSON.parse(atob(Cookies.get("next_session"))) : false;

    return {
        check,
        auth
    }
}

export default NextAuth;
