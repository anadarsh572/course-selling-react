import "./LoginForm.css"
import { useState } from "react"
export default function LoginForm() {

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const [formLogin, setFormLogin] = useState({
    email:'',
    password:'',
  })
  function handleClickLogin(e) {
    e.preventDefault();
    console.log(formLogin,setFormLogin)
  
  }
    return(

        <div className="login-container">

           <div className="login-left">

           <div className="img">
             <img className="logo" src={require('./')} alt="Logo"></img>
           </div>

            <h2>Welcome To AppUsser</h2>
            <p>Kindly fill in details below to continue</p>

           <form className="input-login" onSubmit={handleClickLogin}>
            <input type="email" placeholder="Email Adress" value={formLogin.email} onChange={(e) => setFormLogin({...formLogin, email: e.target.value})}></input>
            <input type="password" placeholder="password" value={formLogin.password} onChange={(e) => setFormLogin({...formLogin, password: e.target.value})}></input>
            <button type="submit">Login</button>
           </form>

           </div>

           <div className="login-right">
                <img src={require('./Img/img-login.jpg')} alt="photo"></img>
           </div>
        </div>
    )
}