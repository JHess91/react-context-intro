import { useContext } from "react"
import { UserInfoContext } from "../App"


export default function Login(){
 const { setUser } = useContext(UserInfoContext)
 const userInfo = {email: 'Justin123@aol.com', password: 'lol123'}


  return (
    <>
    <button onClick={() => setUser(userInfo)}>Log in</button>
    </>
  )
}