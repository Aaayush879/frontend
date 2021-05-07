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
    return <div   style={{  width:"100%" , height:"100%"  }}><br/><br/><br/>
        <br/><br/>
        <div style={{  display:"flex"  , height:"90%" , width:"90%"}}><br/><br/>
    

        <div className="d-block w-100" style={{marginLeft:"50px"}}>
        <Base imgsrc={pic} title="MRP: Rs 1199" texxt="PRODUCT ID :100"/> <br/><br/>
        <Base imgsrc={pic2} title="MRP : Rs 450"  texxt="PRODUCT ID :100"/><br/>
        <Base imgsrc={pic3} title="MRP : Rs 220 " texxt="PRODUCT ID :100"/> <br/>
        </div>
        <br/><br/><br/>
        <div  className="d-block w-100" style={{marginLeft:"100px"}}>
        <Base imgsrc={pic1} title="MRP : Rs 250" texxt="PRODUCT ID :100 "/> <br/><br/>
        <Base imgsrc={pic4} title="MRP : Rs 1050 " texxt="PRODUCT ID :100"/><br/>
        <Base imgsrc={pic5} title="MRP : Rs 450" texxt="PRODUCT ID :100 "/> <br/>
        </div>
        <div className="d-block w-100" style={{marginLeft:"100px"}}>
        <Base imgsrc={pic6} title="MRP : Rs 320 " texxt="PRODUCT ID :100"/> <br/>
        <Base imgsrc={pic7} title="MRP : Rs 450" texxt="PRODUCT ID :100"/><br/>
        <Base imgsrc={pic8} title="MRP : Rs 1435" texxt="PRODUCT ID :100"/> <br/>
        </div>


    </div>
    
    </div>
};

export default Wellness;

