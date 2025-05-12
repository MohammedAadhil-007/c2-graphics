import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserAuth } from '../context/authContext'
import Spinner from '../components/Spinner'
import axios from '../api/api'
import { useQuery } from 'react-query'
const PersistLogin = () => {
  const { setUserData, setToken } = UserAuth()
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const data = await axios.get('/api/auth/refresh')
      return data.data
    },
    onSuccess: (data) => {
      setUserData(data)
      setToken(data.token)
    },
  })

  return <>{isLoading ? <Spinner /> : <Outlet />}</>
}

export default PersistLogin
