import { useContext } from "react"
import { UserInfoContext } from "../App"



export default function Signup(){
  const { setUser } = useContext(UserInfoContext)
  const userInfo = {email: 'Justin123@aol.com', password: 'lol123'}

  return (
    <>
    <button onClick={() => setUser(userInfo)}>Sign Up</button>
    </>
  )
    
}