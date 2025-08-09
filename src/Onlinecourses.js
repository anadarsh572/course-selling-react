export default function Onlinecourses({param}) {
    return(
        <div style={{background:'white',
                    borderRadius:'30px',
                     boxShadow:'1px 1px 1px 1px',
                     width:'9%',
                     textAlign:'center',
                     padding:'10px',
                     
        }}>
            <span style={{cursor:'pointer',fontWeight:'900'}}>{param}</span>
        </div>
    )
}