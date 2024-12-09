import { useContext } from "react"
import { UserContext } from "../contexts/userContext"
import '../styles/Award.scss'

export function Award(){
  const {username} = useContext(UserContext)
  return<div className="award">
    <img src="/i-hate-snapedit.jpg" alt="hu tao" className="award__character" />
    <h1>{username}, поздравляю, ты выбил ху тао!</h1>
  </div>
} 