import '../styles/Form.scss'

export function Form(){
  return<>
    <form action="" className="form">
      <input type="text" placeholder="username" className='form__input'/>
      <input type="text" placeholder="password" className='form__input'/>
      <button type="submit" className='form__submit'>sign in</button>    
    </form>
  </>
}