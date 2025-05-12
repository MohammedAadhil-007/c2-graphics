import axios from '../api/api'
import { UserAuth } from '../context/authContext'

const useRefresh = () => {
  const { setUserData, setToken } = UserAuth()

  const refresh = async () => {
    const response = await axios.get('/api/auth/refresh')
    setUserData(response.data.user)
    setToken(true)
    return response.data.user
  }
  return refresh
}

export default useRefresh
