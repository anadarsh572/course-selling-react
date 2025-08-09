export default function CardPageHome( {course ,params} ) {
    return(
        <div style={{
            boxShadow:'1px 1px 0px 0px',
            width:'300px',
            
        }} className='cardHome'>

            <img style={{
                width:'300px',
                
            }} src={require('./Img/8a5058b31ce370e4aba860a0a95de0469db0e734.jpg')} alt=''></img>
            
            <p style={{textAlign:'left',fontWeight:'600'}}>{course}</p>
            <h2 style={{textAlign:'left'}}>{params}</h2>
            
            <div >
            <p style={{}}>⭐⭐⭐⭐<span> 4.7 3++ ratings</span></p>
            <del style={{textAlign:'end',display:'block',}}>500 $</del>
            <br/><span style={{
                color:'green',
                fontSize:'20px',
                fontWeight:'700',
                display:'block',
                textAlign:'right',
            }}>380 $</span>
            </div>
           
        </div>
    )
}