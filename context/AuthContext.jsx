import React, { useEffect, useState } from 'react'
import UseAuth from '../lib/useAuth'

const AuthContext = React.createContext([])

export const AuthContextProvider = ({children}) => {
  const {user, login, isLoading, csrf, logout} = UseAuth()

  return (
    <AuthContext.Provider value={{ user, login, isLoading, csrf, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;

// export default {
//   AuthContextProvider,
//   AuthContext
// };

