
import "./SignupForm.css";
import { useState } from "react";
const SignupForm = () => {
  
  // const [fullName, setFullName] = useState('');
  // const [email,setEmail] = useState('');
  // const [password,setPassword] = useState('');

const [formSighnUp, setFormSighnUp] = useState({
    fullName:'',
    email:'',
    password:'',

    })
  return (

    <div className="signup-container">

      <div className="left-section">
        
        <div className="floating-box top">🌙</div>
        <div className="floating-box bottom">5k <span>Online Courses</span></div>
        <div className="floating-box Right">🌙</div>
        <h2>Steps into the Future.</h2>
        <img src={require('./Img/imgSighnup.png')} alt="student"></img>
      </div>

      <div className="form-section">
        <h2>Create Account</h2>
      <div className="btn-social">
        <button className="google-btn"><img className="google-logo" src={require('./Img/google-logo.png')}></img>Sign up with Google</button>
        <button className="facebook-btn"><img className="facebook-logo" src={require('./Img/facebook-logo.png')}></img>Sign up with Facebook</button>
      </div>

        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(formSighnUp,setFormSighnUp)
        }}>
          <input type="text" placeholder="Full Name" value={formSighnUp.fullName} onChange={(e) => setFormSighnUp({...formSighnUp, fullName: e.target.value})}></input>
          <input type="email" placeholder="Email Address" value={formSighnUp.email}  onchange={(e) => setFormSighnUp({...formSighnUp, email: e.target.value})}></input>
          <input type="password" placeholder="Password" value={formSighnUp.password} onChange={(e) => setFormSighnUp({...formSighnUp,password: e.target.value})}></input>
          <button type="submit">Create Account</button>
        </form>

      

      </div>
    </div>
  );
};

export default SignupForm;