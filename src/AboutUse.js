

export default function AboutUse({name, comment, abouteIcon}) {
    return(
        <div style={{width:'200px',
            margin:'4rem 2rem',
            background:'white',
            borderRadius:'20px',
            border:'solid 1px #ccc',
            
            
        }} className='about-comment'>
            <div className='firstComment'>

                <img style={{
                    width:'100px',
                    borderRadius:'50%',
                }} src={require('./Img/imgSighnup.png')}></img>
                
                <i class={abouteIcon}></i>
                <h3>{name}</h3>

            </div>
            <div className='lastComment'>
                <p>{comment}</p>
            </div>
        </div>
    )
}