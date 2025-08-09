import './CardCourses.css';


export default function CardCourses({img, h3, p , price }) {
    return(
        <div style={{marginTop:'4rem',
            margin:'4rem auto',
            width:'250px',
            
        }} className='container-card'>

        
            <img style={{
                width:'200px',
                borderRadius:'20%',
                border:'none',
            }} src={img} alt={h3}></img>

            <h3 style={{height:'70px'}}>{h3}</h3>
            <p>{p}</p>
            <span className='price' 
            style={{
                color:'green',
                fontSize:'20px',
                textAlign:'left',
                fontWeight:"bold",
            }}>{price}</span>

            <button style={{
                width:'200px',
            }}>join Now</button>
        </div>
        
     
    )
}