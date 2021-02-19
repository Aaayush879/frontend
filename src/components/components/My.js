import React from 'react';
import Base from './Base';

const My=() => {
    return <div>
        <div style={{width:"100%" , height:"9%" , backgroundColor:"lightblue"}}>
            <h5 style={{color:"white" , marginLeft:"50px", marginTop:"10px"}}>SKIN CARE</h5>

        </div>
        <br/>
        <div style={{backgroundColor:"white"  , display:"flex" , justifyContent:"center" , height:"90%" , width:"90%" , marginTop:"50px"}}>
        <br/><br/>
        <div style={{marginLeft:"40px"}}>
        <Base imgsrc="../Galx.jpg" title="Rs 22,000 -24000" texxt="Samsung Galaxy M51 | 7000 mAh Battery | Snapdragon 730G " />
        <br/>
        <Base imgsrc="../Galx.jpg" title="Rs 22,000 -24000" texxt="Samsung Galaxy M51 | 7000 mAh Battery | Snapdragon 730G " />
        <br/>
        <Base imgsrc="../Galx.jpg" title="Rs 22,000 -24000" texxt="Samsung Galaxy M51 | 7000 mAh Battery | Snapdragon 730G " />
        <br/>
        </div>
        <br/><br/>
        <div style={{marginLeft:"40px"}}>
        <Base imgsrc="../Galx.jpg" title="Rs 22,000 -24000" texxt="Samsung Galaxy M51 | 7000 mAh Battery | Snapdragon 730G " />        <br/>
        <Base imgsrc="../Galx.jpg" title="Rs 22,000 -24000" texxt="Samsung Galaxy M51 | 7000 mAh Battery | Snapdragon 730G " /> <br/>
        <Base imgsrc="../Galx.jpg" title="Rs 22,000 -24000" texxt="Samsung Galaxy M51 | 7000 mAh Battery | Snapdragon 730G " /> <br/>
        </div><br/><br/>
        <div style={{marginLeft:"40px"}}>
        <Base imgsrc="../Galx.jpg" title="Rs 22,000 -24000" texxt="Samsung Galaxy M51 | 7000 mAh Battery | Snapdragon 730G " />
        <br/>
        <Base imgsrc="../Galx.jpg" title="Rs 22,000 -24000" texxt="Samsung Galaxy M51 | 7000 mAh Battery | Snapdragon 730G " />       <br/>
        <Base imgsrc="../Galx.jpg" title="Rs 22,000 -24000" texxt="Samsung Galaxy M51 | 7000 mAh Battery | Snapdragon 730G " /><br/>
        </div>
        


    </div>
        </div>
}

export default My;
