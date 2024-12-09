import { useContext } from "react"
import { UserContext } from "../contexts/userContext"

export function Award(){
  const {username} = useContext(UserContext)
  return<>
    <p>privet</p>
    <h1>{username}</h1>
  </>
}