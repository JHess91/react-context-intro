import { useContext } from 'react'
import { UserInfoContext } from '../App'

export default function Logout() {
  const { setUser } = useContext(UserInfoContext)
  return (
    <>
      <h3>This is Logout</h3>
      <button onClick={() => setUser({})}>Logout</button>
    </>
  )
}
