import './coursesListComponant.css';

export default function CoursesListComponant({icon, tittle}) {
    return(

       <div className='courses-list'>
           
          <i className={icon}></i>
          <p>{tittle}</p>

        </div>
        

    )
};