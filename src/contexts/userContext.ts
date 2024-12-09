import { createContext, Dispatch, SetStateAction } from "react";

// interface UserContextValue{
//   username: string
//   setUsername: (name: string)=> void
//   setShowAward: (show: boolean)=> void
// }

interface UserContextValue{
  username: string
  setUsername: Dispatch<SetStateAction<string>>
  setShowAward: Dispatch<SetStateAction<boolean>>
}

export const UserContext = createContext<UserContextValue>({
  username: '',
  setUsername: ()=>{},
  setShowAward: ()=>{}
})