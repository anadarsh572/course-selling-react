import Nav from './Nav.js';
import Onlinecourses from './Onlinecourses.js';
import CardPageHome from './CardPageHome.js';
import './Home.css';
import PageFooter from './PageFooter.js';
export default function Home() {
    return(
        
        <div className="container">
            <nav>
                <Nav></Nav>
            </nav>

            <section style={{
                
                margin:'5rem 0',
                display:'flex',
                
            }}>
                <div className='left'>
                    <h2>Master Your Self,  <br/>Anywhere  <br/>AnyTime  </h2>
                    
                  
                    <p>Join thousands of learners and take your career to the next level with our expert-led courses.</p>
                    <button>Start Learning Now</button>
                </div>

                <div className='right'>
                    <img className='imgGirl' src={require('./Img/girlHome.png')} alt='boy'></img>
                    <img className='imgBoy' src={require('./Img/boyHome.png')} alt='girl'></img>
                    <div style={{width:"10px",height:'10px', borderRadius:'50%',background:'green',position:'absolute',top:'30%'}}></div>
                    <div style={{width:"10px",height:'10px', borderRadius:'50%',background:'red'}}></div>
                    <div style={{width:"10px",height:'10px', borderRadius:'50%',background:'red',position:'absolute',top:'100%',right:'30%'}}></div>
                    
                    <div style={{
                                 width:'300px',
                                 height:'70px',
                                 background:'white',
                                 display:'flex',
                                 position:'absolute',
                                 top:'15%',
                                 left:'15%',
                                 boxShadow:'1px 1 1px 1px',
                                 borderRadius:'20px'

                    }}>
                        <p style={{color:'green',fontWeight:'700'}}>2K+ <br/>student</p>
                        <img src={require('./Img/k+.png')} alt='img'></img>
                    </div>

                    <div> 
                        <p style={{
                             position:'absolute',
                                 top:'70%',
                                 left:'60%',
                                 boxShadow:'1px 1px 1px 1px',
                                 borderRadius:'20px',
                                 background:'white',
                                 width:'150px',
                                 height:'60px',
                        }}>5.8K<br/><span style={{color:'green',fontWeight:'bold'}}>success courses</span></p>
                    </div>

                </div>
            </section>
            
           <section className='section2'>
            <div>
              <span>25K+</span>
              <p>CLASSES</p>
            </div>
            <div>
              <span>600K+</span>
              <p>MEMBERS</p>
            </div>
            <div>
              <span>8K+</span>
              <p>TEACHERS</p>
            </div>
            <div>
              <span>4.8</span>
              <p>APP STORE RATING ⭐⭐⭐⭐⭐</p>
            </div>
          
           </section>

            <div style={{fontSize:'30px'}}>
                <h2>Explore Inspiring Online Courses</h2>
            </div>

            <section className='section3' style={{
                display:'flex',       
                flexWrap:'wrap',         
                gap:'30px',
               margin:'5rem'


            }}>
                <Onlinecourses param='Featured'/>
                <Onlinecourses param='Music'/>
                <Onlinecourses param='Drawing & Painting'/>
                <Onlinecourses param='Markiting'/>
                <Onlinecourses param='Animation'/>
                <Onlinecourses param='Social Madia'/>
                <Onlinecourses param='UI/UX design'/>
                <Onlinecourses param='Creative Writing'/>
                <Onlinecourses param='Digital lllustration'/>
                <Onlinecourses param='Film & Vidio'/>
                <Onlinecourses param='Crafts'/>
                <Onlinecourses param='Freelance & Enterpreneurship'/>
                <Onlinecourses param='Graphic Design'/>
                <Onlinecourses param='Photography'/>
                <Onlinecourses param='Productivity'/>
            </section>

          <div style={{
            margin:'4rem 12%',
            display:'grid',
            gridTemplateColumns:'1fr 1fr 1fr',
            gridTemplateRows:'1fr 1fr',
            gap:'20px',
          }}>
            <CardPageHome params='Management'
                          course='Product Management Basic - Course'
            ></CardPageHome>
            <CardPageHome params='Web Devlopment'
                          course='Front End Devloper - Basic'
            ></CardPageHome>
            <CardPageHome params='Web Devlopment'
                          course='Back End Devloper - Basic'
            ></CardPageHome>
            <CardPageHome params='Web Devlopment'
                          course='UI UI Design - Course'
            ></CardPageHome>
            <CardPageHome params='Carreir'
                          course='Trading Money Course - Basic '
            ></CardPageHome>
            <CardPageHome params='Web Devlopment'
                          course='UI UI Researsh - Basic'
            ></CardPageHome>
          </div>
          
          <section className='section4' style={{
            margin:'4rem 0',
            background:'#224EA1',
            height:'300px',
            display:'flex',
            flexDirection:'column',
            gap:'20px',
            color:'white',
          }}>
            <h2 style={{fontSize:'40px'}}>Learning is the most important for funtastic future</h2>
            <p style={{fontSize:'20px'}}>with us you can learn a lot of skills </p>

            <button style={{background:'#3becb9',color:'black',width:'300px',margin:'auto'}}>Start For Free</button>

          </section>


          <PageFooter></PageFooter>
        </div>
    )
}