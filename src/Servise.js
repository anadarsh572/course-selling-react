import RotatTextButton from './RotatTextButton.js';
import CouseList from './CouseList.js';
import CoursesListComponant from './coursesListComponant.js';
import CardCourses from './CardCourses.js';
import AboutUse from './AboutUse.js';
import PageFooter from './PageFooter.js';
// page navbar
import Nav from './Nav.js';
import './Servise.css';

import imgSignUp from './Img/f54fc7697b85e131246e598962cd87847e05027d(1).jpg'
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

        {/* navbar */}
        <Nav></Nav>
        {/* button animaion */}
        <RotatTextButton></RotatTextButton>

        {/* cause list */}
        <CouseList></CouseList>

        {/* ICONE */}

        <div style={{
  display:'grid',
  gridTemplateColumns:'1fr 1fr 1fr 1fr',
  gap:'20px',
  
}}>
<CoursesListComponant icon="fa-brands fa-uikit" tittle='3D Modeling & animation'/>
<CoursesListComponant icon='fa-solid fa-film' tittle='Motion Grafic & Animation'/>
<CoursesListComponant icon='fa-solid fa-play' tittle='Graphic Desighn'/>
<CoursesListComponant icon='fa-solid fa-pencil' tittle='Vidio Editing'/>
<CoursesListComponant icon='fa-solid fa-palette' tittle='UI/UX Disighn'/>
<CoursesListComponant icon='fa-solid fa-scissors' tittle='Website Development'/>
<CoursesListComponant icon='fa-solid fa-video' tittle='Mobile App Devlopment'/>
<CoursesListComponant icon='fa-solid fa-display' tittle='Digital Markiting'/>
        </div>


        
        {/* popular Courses Card*/}
        <div>

  <h2 style={{fontSize:'40px', fontWeight:'bold',}}>
    Our <span style={{color:'green'}}> popular </span>
     course in <span style={{color:'green'}}> 2025</span>
  </h2>

<div style={{
  display:'grid',
  gridTemplateColumns:'1fr 1fr 1fr',
  gridTemplateRows:'1fr 1fr 1fr'
}}>
<CardCourses 
            img={imgSignUp}
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
>
</CardCourses>
<CardCourses img={imgSignUp}
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
<CardCourses img={imgSignUp}
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
<CardCourses img={imgSignUp}
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
<CardCourses img={imgSignUp}
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
<CardCourses img={imgSignUp}
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
<CardCourses img={imgSignUp}
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
<CardCourses img={imgSignUp}
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
<CardCourses img={imgSignUp}
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
</div>

<div>
    <button style={{
      background:'white',
      color:'green',
      borderRadius:'20px',
      border:'2px solid green',
      marginTop:'4rem',
      cursor:'pointer',
    }}>View all courses </button>  
</div>


        </div>



        {/* about */}
        <div>
    <h2 style={{fontSize:'40px', fontWeight:'bold',}}>
    What they<span style={{color:'green'}}> say </span>
     about us<span style={{color:'green'}}> ?</span>
  </h2>

  <div style={{
  display:'flex',
  margin:'4rem auto',
  gap:'3%',

}}>
  <div>
<AboutUse 
name='Angle Geidt' 
comment='Love Grant! Thank you for the thorough walk-through of the different tools Blender has to offer! I feel much more accustomed to the user interface, as well as more comfortable experimenting and improving my art.'></AboutUse>
<AboutUse 
name='Angle Geidt' 
comment='bro this course is really helpful and useful for me as a student from non it background i want to build m carrier in IT field as a begineer this is so good to me to understand and later i want to learn devops completely this one will helps me to clear basics on devops and cybersequrity'></AboutUse>
</div>
<div>
<AboutUse 
name='Angle Geidt' 
comment='its so interesting as a beginner, and learn many things so far , nice course over all.'></AboutUse>
<AboutUse 
name='Angle Geidt' 
comment='Im busy with the HTML part of the course. Coming from a basic web development background this lecturer really explains the concepts very well. Unlike other Lecturers he explains the how but also the why with examples. Hes teaching style is very good. I cannot wait for the rest of the course and will update once Im further.'></AboutUse>
</div>
<div>
<AboutUse 
name='Angle Geidt' 
comment='Being new to video editing this class help me understand the program so much I feel like a pro. Phil does an excellent job in explaining and any steps he goes over quickly has a small lecture about more details within that step! I would recommend this to anyone that has an interest in video editing in adobe'></AboutUse>
<AboutUse 
name='Angle Geidt' 
comment='This course is full of amazing info for everyone. It also includes resources to help you follow along easily. The instructor explains things so clearly, making it super easy to catch on. Plus, he keeps everything updated, so you always have the latest features and techniques.'></AboutUse>
</div>
<div>
<AboutUse 
name='Angle Geidt' 
comment='The course is well structured, the teachers explanations are good and clear. I would highly recommend this course!'></AboutUse>
<AboutUse 
name='Angle Geidt' 
comment='I learned a lot and the course contents was paced very well. The projects were also very helpful to understand the topics. The free React refresher was super nice to have as it puts you into that mindset of knowing the difference between Next.js the framework and React.'></AboutUse>
</div>





  </div>
        </div>

        {/* select option */}
        <div>
          <h2 style={{fontSize:'40px', fontWeight:'bold',}}>
          A lot Of people <span style={{color:'green'}}> ask </span>
          this <span style={{color:'green'}}> question</span>
          </h2>

            <div style={{margin:'4rem 0', display:'flex', alignItems:'center',justifyContent:"space-evenly"}}>
                <div>
                    <img style={{width:'80%',}} src={require('./Img/select.jpg')} alt=''></img>
                </div>
                <select style={{}}>
                    <option>What skill level is required to take these courses?</option>
                    <option>Do I need specific software to follow the lessons?</option>
                    <option>Are the courses project-based?</option>
                    <option>Will I receive a certificate after completing a course?</option>
                    <option>Can I access the courses anytime?</option>
                    <option>Are these courses suitable for building a professional portfolio?</option>
                </select>
            </div>
        </div>

        {/* footer */}
        <PageFooter></PageFooter>     
        
           
    

</section>
                
    )
}