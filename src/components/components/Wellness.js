import React from 'react';
import Base from './Base';
import pic from './pic.jpg';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';
import pic7 from './pic7.jpg';
import pic8 from './pic8.jpg';



const Wellness=() => {
    return <div  style={{  width:"100%" , height:"100%"  }}><br/><br/><br/>
        <br/><br/>
        <div style={{  display:"flex"  , height:"90%" , width:"90%"}}><br/><br/>
    

        <div style={{marginLeft:"50px"}}>
        <Base imgsrc={pic} title="MRP: Rs 1199" texxt="WELL BRAIN ACTIV"/> <br/><br/>
        <Base imgsrc={pic2} title="MRP : Rs 450"  texxt="WELL BRAHMI "/><br/>
        <Base imgsrc={pic3} title="MRP : Rs 220 " texxt="WELL AMLA"/> <br/>
        </div>
        <br/><br/><br/>
        <div style={{marginLeft:"100px"}}>
        <Base imgsrc={pic1} title="MRP : Rs 250" texxt="MODICARE PREMIUM PROTECTION MASK (PACK OF 2 WITH 1 LANYARD) "/> <br/><br/>
        <Base imgsrc={pic4} title="MRP : Rs 1050 " texxt="WELL TURMERIC (60 TABLETS) "/><br/>
        <Base imgsrc={pic5} title="MRP : Rs 450" texxt="WELL TULSI (60 TABLETS) "/> <br/>
        </div>
        <div style={{marginLeft:"100px"}}>
        <Base imgsrc={pic6} title="MRP : Rs 320 " texxt="WELL ALOE VERA (60 TABLETS)"/> <br/>
        <Base imgsrc={pic7} title="MRP : Rs 450" texxt="WELL ASHWAGANDHA (60 TABLETS) "/><br/>
        <Base imgsrc={pic8} title="MRP : Rs 1435" texxt="WELL OMEGA 3 ANTARCTIC KRILL OIL"/> <br/>
        </div>


    </div>
    
    </div>
};

export default Wellness;

