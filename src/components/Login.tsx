import { useContext } from 'react'
import { UserContext } from '../contexts/userContext'
import '../styles/Form.scss'

export function Login(){
  const {setUsername, setShowAward} = useContext(UserContext)
  return<>
    <form action="" className="form">
      <input 
        type="text" 
        placeholder="username" 
        className='form__input'
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        
        />
      <input type="text" placeholder="password" className='form__input'/>
      <button 
        type="submit" 
        className='form__submit'
        onClick={()=>{
          setShowAward(true)
        }}
        >
          sign in</button>    
    </form>
  </> 
}