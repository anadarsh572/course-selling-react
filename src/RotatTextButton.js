import './RotatTextButton.css';

export default function RotatTextButton() {
    return(
        <div className='rotating-button-wrapper'>
            <div className='rotating-text'>
                <img className='rotateImg' src={require('./Img/img-login.jpg')}></img>    
             </div>
        
            <div className='center-icon'>
                <span>play</span>
            </div>
        </div>
    )
}