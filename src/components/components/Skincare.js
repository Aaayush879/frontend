import React from 'react';
import Base from './Base';
import pic9 from './pi9.jpg';
import pic1 from './pi1.jpg';
import pic2 from './pi2.jpg';
import pic3 from './pi3.jpg';
import pic4 from './pi4.jpg';
import pic5 from './pi5.jpg';
import pic6 from './pi6.jpg';
import pic7 from './pi7.jpg';
import pic8 from './pi8.jpg';



const Skincare=() => {
    return <div    style={{  width:"100%" , height:"100%"   }}><br/><br/><br/>
        <br/><br/>
        <div style={{  display:"flex"  , height:"90%" , width:"90%"}}><br/><br/>
    

        <div  className="d-block w-100" style={{marginLeft:"50px"}}>
        <Base imgsrc={pic1} title="MRP : Rs 599 " texxt="PRODUCT ID :100"/> <br/><br/>
        <Base imgsrc={pic2} title="MRP : Rs 599 "  texxt="PRODUCT ID :100"/><br/>
        <Base imgsrc={pic3} title="MRP : Rs 500 " texxt="PRODUCT ID :100 "/> <br/>
        </div>
        <br/><br/><br/>
        <div  className="d-block w-100" style={{marginLeft:"100px"}}>
        <Base imgsrc={pic4} title="MRP : Rs 399 " texxt="PRODUCT ID :100"/> <br/><br/>
        <Base imgsrc={pic5} title="MRP : Rs 445  " texxt="PRODUCT ID :100"/><br/>
        <Base imgsrc={pic6} title="MRP : Rs 347" texxt="PRODUCT ID :100"/> <br/>
        </div>
        <div className="d-block w-100" style={{marginLeft:"50px"}}>
        <Base imgsrc={pic7} title="MRP : Rs 316  " texxt="PRODUCT ID :100"/> <br/>
        <Base imgsrc={pic8} title="MRP : Rs 365 " texxt="PRODUCT ID :100 "/><br/>
        <Base imgsrc={pic9} title="MRP : Rs 275" texxt="PRODUCT ID :100"/> <br/>
        </div>


    </div>
    
    </div>
};

export default Skincare;
