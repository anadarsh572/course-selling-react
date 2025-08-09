
import './Nav.css';
import { Link } from 'react-router-dom';
export default function Nav() {
    return(
    

        <div className='container-home'>
            <img src={require('.')} className='logo' alt='logo'></img>
            <>
            <input type='searsh' placeholder='what do you want to learn today?'
             style={{borderRadius:'20px',width:'450px'}}>
             </input>
             <button style={{margin:'0'}}>searsh</button>
             </>
            <nav className='navbar'>
                <ul>
                
                
                    <li><Link to="/Home">Home</Link></li>
                
                    <li><Link to="Servise">Servies</Link></li>

                    <li><Link to="content Us">Content</Link></li>
                    <div className='btn'> 

                        <Link to="/LoginForm">
                            <button className='btn-white'>Login</button>
                        </Link>

                    <Link to="/SignupForm">
                            <button>Sign Up</button>
                    </Link>

                    </div> 
                </ul>
            </nav>
        </div>

   
    )
};