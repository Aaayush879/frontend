import React from 'react';
import Base from './Base';
import c9 from './c9.jpg';
import c1 from './c1.jpg';
import c2 from './c2.jpg';
import c3 from './c3.jpg';
import c4 from './c4.jpg';
import c5 from './c5.jpg';
import c6 from './c6.jpg';
import c7 from './c7.jpg';
import c8 from './c8.jpg';




const Color=() => {
    return <div  style={{  width:"100%" , height:"100%"  }}><br/><br/><br/>
        <br/><br/>
        <div style={{  display:"flex"  , height:"90%" , width:"90%"}}><br/><br/>
    

        <div style={{marginLeft:"50px"}}>
        <Base imgsrc={c1} title="MRP : Rs 799  " texxt="GO GLOW 3 IN 1 CLEANSER, MAKEUP REMOVER & HYDRATOR  "/> <br/><br/>
        <Base imgsrc={c2} title="MRP : Rs 2599 "  texxt="UC AGE REDEFINING UNDER - EYE RECOVERY CONCENTRATE 12ML "/><br/>
        <Base imgsrc={c3} title="MRP : Rs 1299 " texxt="UC AGE REDEFINING UNDER - EYE RECOVERY CONCENTRATE 12ML  "/> <br/>
        </div>
        <br/><br/><br/>
        <div style={{marginLeft:"100px"}}>
        <Base imgsrc={c4} title="MRP : Rs 399 " texxt="FRUIT OF THE EARTH RED OBSESSION - HYDRA NOURISH MASK"/> <br/><br/>
        <Base imgsrc={c5} title="MRP : Rs 445  " texxt="SCHLOKA MOROCCAN ARGAN OIL CLEANSER (200 ML)  "/><br/>
        <Base imgsrc={c6} title="MRP : Rs 347" texxt="FOTE CLEANSING GEL WITH APRICOT & TEA TREE OIL (PH BALANCED) 150 ML"/> <br/>
        </div>
        <div style={{marginLeft:"100px"}}>
        <Base imgsrc={c7} title="MRP : Rs 316  " texxt="FOTE FAIRNESS GEL WITH LIQUORICE & ALOE VERA (SPF14) 150 ML "/> <br/>
        <Base imgsrc={c8} title="MRP : Rs 365 " texxt="FOTE FACE PACK WITH NEEM & ROSEMARY (SENSITIVE & ACNE PRONE SKIN) 150 ML  "/><br/>
        <Base imgsrc={c9} title="MRP : Rs 275" texxt="FOTE CLEANSING GEL WITH APRICOT & TEA TREE OIL (PH BALANCED) 100 ML"/> <br/>
        </div>


    </div>
    
    </div>
};

export default Color;