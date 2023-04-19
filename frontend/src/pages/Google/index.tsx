import { useNavigate } from 'react-router-dom'
import { JWT_TOKEN } from 'app/constants'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

const Google = (): JSX.Element => {
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const token = searchParams.get('token')

  useEffect(() => {
    if (token) {
      Cookies.set(JWT_TOKEN, token)
      navigate('/dashboard')
    }
  }, [])

  return <div>Redirecting...</div>
}

export default Google
