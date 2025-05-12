import React, { createContext, useContext, useState } from 'react'

type User = {
  user: {
    id: number
    username: string
    password?: string
    role: string
  }
}

export type UserData = {
  message: string
} & User

type UserContextType = {
  token: boolean
  setToken: (token: boolean) => void
  userData: User
  setUserData: (userData: UserData) => void
}

const UserContext = createContext<UserContextType>({
  token: false,
  setToken: (token: boolean) => false,
  userData: {} as User,
  setUserData: () => {},
})

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<boolean>(false)
  const [userData, setUserData] = useState<UserData>({
    message: '',
    user: {
      id: 0,
      username: '',
      password: '',
      role: '',
    },
  })

  const userContextValue = {
    token,
    setToken,
    userData,
    setUserData,
  }

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}
