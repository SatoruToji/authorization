import { useState } from "react";
import { Login } from "./components/Login";
import { Award } from "./components/AwardForLogin";
import { UserContext } from "./contexts/userContext";

export function App(){
  const [showAward, setShowAward] = useState(false)
  const [username, setUsername] = useState('')
  return<>
    <UserContext.Provider value={{username, setUsername, setShowAward}}>
      {showAward ? <Award /> : <Login />}    
    </UserContext.Provider>
  </>
}