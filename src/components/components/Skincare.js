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
    return <div  style={{  width:"100%" , height:"100%"  }}><br/><br/><br/>
        <br/><br/>
        <div style={{  display:"flex"  , height:"90%" , width:"90%"}}><br/><br/>
    

        <div style={{marginLeft:"50px"}}>
        <Base imgsrc={pic1} title="MRP : Rs 599 " texxt="FRUIT OF THE EARTH CALMING WHITES "/> <br/><br/>
        <Base imgsrc={pic2} title="MRP : Rs 599 "  texxt="FRUIT OF THE EARTH RED OBSESSION"/><br/>
        <Base imgsrc={pic3} title="MRP : Rs 500 " texxt="FRUIT OF THE EARTH PURIFYING MOOR MUD MASK (WITH ACTIVATED CHARCOL & HIJIKI EXTRACT) "/> <br/>
        </div>
        <br/><br/><br/>
        <div style={{marginLeft:"100px"}}>
        <Base imgsrc={pic4} title="MRP : Rs 399 " texxt="FRUIT OF THE EARTH RED OBSESSION - HYDRA NOURISH MASK"/> <br/><br/>
        <Base imgsrc={pic5} title="MRP : Rs 445  " texxt="SCHLOKA MOROCCAN ARGAN OIL CLEANSER (200 ML)  "/><br/>
        <Base imgsrc={pic6} title="MRP : Rs 347" texxt="FOTE CLEANSING GEL WITH APRICOT & TEA TREE OIL (PH BALANCED) 150 ML"/> <br/>
        </div>
        <div style={{marginLeft:"100px"}}>
        <Base imgsrc={pic7} title="MRP : Rs 316  " texxt="FOTE FAIRNESS GEL WITH LIQUORICE & ALOE VERA (SPF14) 150 ML "/> <br/>
        <Base imgsrc={pic8} title="MRP : Rs 365 " texxt="FOTE FACE PACK WITH NEEM & ROSEMARY (SENSITIVE & ACNE PRONE SKIN) 150 ML  "/><br/>
        <Base imgsrc={pic9} title="MRP : Rs 275" texxt="FOTE CLEANSING GEL WITH APRICOT & TEA TREE OIL (PH BALANCED) 100 ML"/> <br/>
        </div>


    </div>
    
    </div>
};

export default Skincare;
