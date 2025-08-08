
import './Servise.css';
export default function Servise() {
    return(
<section className='container'>
  
    <div className='page-home-container'>
        <div className='home-left'>
            <p>Never Stop Learning</p>
            <h2>Grow Up Your Skills by online courses with onlearning</h2>
            <button>Explor Path</button>
        </div>
        <div className='home-right'>
            <div className="home-floating-box-left">250k <span>Online Courses</span></div>
            <div className="home-floating-box Right">🌙</div>
            <img src={require('./Img/imgSighnup.png')} alt="student"></img>
        </div>
        
    </div>

</section>
                
    )
}