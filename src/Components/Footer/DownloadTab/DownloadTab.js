import React from 'react';
import './DownloadTab.css';
import { ReactComponent as GooglePlayStore} from '../../../Assets/google-play.svg';
import { ReactComponent as AppleStore} from '../../../Assets/apple-store.svg';


const DownloadTab = () => {
  return (
    <div style={{textAlign:'center', fontFamily:'Poppins', fontSize:'20px', letterSpacing:'0.50px', backgroundColor:'#E8F0FF'}}>
        <h1 style={{paddingTop:'20px'}}>Download the
        <br/> <span style={{color:'rgba(42, 167, 255, 1)'}}>Medify</span> App
        </h1>
        <h3 style={{margin:'15px'}}>Get the link to download the app</h3>
        <input placeholder='+91' readOnly className='numberInputReadonly'/>
        <input placeholder='Enter Phone Number' type='number' className='numberInput'/>
        <button className='smsButton'>Send Sms</button>
        <div>
            <GooglePlayStore className='GooglePlayStore'/>
            <AppleStore className='AppleStore'/>
        </div>
    </div>
    
  )
}

export default DownloadTab;