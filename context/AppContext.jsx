import React, { useEffect, useState } from 'react'
const AppContext = React.createContext([])

export const AppContextProvider = ({children}) => {
    const [showNotification, setShowNotification] = useState(false);
    const [notification, setNotification] = useState({
        // success: "false",
        // title: "Hello world",
        // message: "Hello world"
    });

    const closeNotification = (time = 10) => {
        setTimeout(() => {
            setShowNotification(false)
            setTimeout(() => {
                setNotification({
                    success: false,
                })
            }, 1000);
        }, time * 1000);
    }

    useEffect(() => {
        // console.log("triggered");
    }, [setNotification,setShowNotification]);

    return (
        <AppContext.Provider value={{ notification,showNotification,setShowNotification,setNotification,closeNotification}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
