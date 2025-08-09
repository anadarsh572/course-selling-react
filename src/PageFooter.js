import './pageFooter.css';
export default function PageFooter(params) {
    return(
        <div style={{
            background:'black',
            color:'white',
            display:'flex',
            height:'500px',
            position:'relative',
        }} className="container-footer">

            <div style={{
                display:'flex',
                flexDirection:'column',
                gap:'20px',
                marginLeft:'3rem'
            }}  className="footer-left">

                <h2 style={{
                    textAlign:'start',
                    margin:'4rem 20px'
                }}>Appsians</h2>

                <p style={{
                    width:'50%'
                }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                
                <ul style={{
                    display:'flex',
                    gap:'5px',  
                }}>
                 <button>tiktok</button>
                 <button>instagram</button>
                 <button>facebook</button>
                 <button>whatsup</button>
                 <button>messenger</button>
                 <button>tweeter</button>
                 <button>youtube</button>
                </ul>
                <div className='span' style={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                }}>
                <span style={{textAlign:'start',}}>Copyright © 2025 Appsians, Inc. All rights reserved.</span>
                <span style={{textAlign:'start',}}>Copyright © 2025 Appsians, Inc. All rights reserved.</span>
                </div>
            </div>
                <div></div>
                <div></div>
                <div></div>
            <div className="footer-right" style={{
                display:'flex',
                justifyContent:'space-around',
                alignItems:'center',
            }} >
                <ul>
                    <span>Explor</span>
                    <span>product</span>
                    <span>feature</span>
                    <span>pricing</span>
                    <span>staff pics</span>
                    <span>product demo</span>

                </ul>
                <ul>
                    <span>Explor</span>
                    <span>product</span>
                    <span>feature</span>
                    <span>pricing</span>
                    <span>staff pics</span>
                    <span>product demo</span>

                </ul>
                <ul>
                    <span>Explor</span>
                    <span>product</span>
                    <span>feature</span>
                    <span>pricing</span>
                    <span>staff pics</span>
                    <span>product demo</span>

                </ul>
                  
            </div>
            
        </div>
    )
}