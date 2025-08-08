import logo from './logo.svg';
import './App.css';
import Img from './img.js';
// page sign up
import SignupForm from './SignupForm.js';
// page login
import LoginForm from './LoginForm.js';
// page navbar
import Nav from './Nav.js';

// page home 
import Home from './PageHome/Home.js';
// page sevise
import Servise from './Servise.js';
import RotatTextButton from './RotatTextButton.js';
import CouseList from './CouseList.js';
import CoursesListComponant from './coursesListComponant.js';
import CardCourses from './CardCourses.js';
import AboutUse from './AboutUse.js';
import PageFooter from './PageFooter.js';
// router
import {  Route,Routes } from 'react-router-dom';


function App() {

  
return(
  <div className='App'>

  <Routes>


  <Route path="/" element={<Servise></Servise>}>
    
  
</Route>

  <Route path="/LoginForm" element={<LoginForm></LoginForm>}/>
  <Route path="/SignupForm" element={<SignupForm></SignupForm>}/>
  <Route path="Home" element={<Home></Home>}/>
 

</Routes>
    


  {/* page home */}

 <Nav></Nav>

  {/* page Home */}
  {/* <Home></Home> */}

{/* animaion */}
{/* <RotatTextButton></RotatTextButton> */}

{/* CouseList */}
{/* <CouseList></CouseList> */}

{/* ICONE */}
{/* <div style={{
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
</div> */}


{/* popular Courses Card*/}
{/* <div>

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
            img='src/Img/imgSighnup.png'
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
>
</CardCourses>
<CardCourses img='src/Img/imgSighnup.png'
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
<CardCourses img='src/Img/imgSighnup.png'
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
<CardCourses img='src/Img/imgSighnup.png'
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
<CardCourses img='src/Img/imgSighnup.png'
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
<CardCourses img='src/Img/imgSighnup.png'
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
<CardCourses img='src/Img/imgSighnup.png'
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
<CardCourses img='src/Img/imgSighnup.png'
             h3='Complete Blender Creator: Learn 3D Modelling for Beginn...'
             p='Learn the basics of 3D modeling with Blender from scratch! This e-course is designed for beginners who want to master modeling, sculpti...'
             price='$30.99'
></CardCourses>
<CardCourses img='src/Img/imgSighnup.png'
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


</div> */}

{/* about */}
{/* <div>
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
</div> */}


{/* footer */}
{/* <PageFooter></PageFooter> */}




</div>
)


}








export default App;

