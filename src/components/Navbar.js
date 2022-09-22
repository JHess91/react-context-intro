import Login from './Login'
import { useContext } from 'react'
import { UserInfoContext } from '../App'
import Signup from './Signup'
import Logout from './Logout'

export default function Navbar() {
  const { user } = useContext(UserInfoContext)
  console.log('user from context' , user)
  
  

  return (
    <>
      <h3>This is Navbar, Welcome {user?.email}</h3>
      {!user?.email && <Login />}
      {!user?.email && <Signup />}
      {user?.email && <Logout />}
    </>
  )
}
