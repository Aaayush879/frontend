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
    return <div   style={{  width:"100%" , height:"100%"  }}><br/><br/><br/>
        <br/><br/>
        <div style={{  display:"flex"  , height:"90%" , width:"90%"}}><br/><br/>
    

        <div className="d-block w-100" style={{marginLeft:"50px"}}>
        <Base imgsrc={c1} title="MRP : Rs 799  " texxt="PRODUCT ID :100 "/> <br/><br/>
        <Base imgsrc={c2} title="MRP : Rs 2599 "  texxt="PRODUCT ID :100 "/><br/>
        <Base imgsrc={c3} title="MRP : Rs 1299 " texxt="PRODUCT ID :100 "/> <br/>
        </div>
        <br/><br/><br/>
        <div className="d-block w-100" style={{marginLeft:"100px"}}>
        <Base imgsrc={c4} title="MRP : Rs 399 " texxt="FPRODUCT ID :100"/> <br/><br/>
        <Base imgsrc={c5} title="MRP : Rs 445  " texxt="PRODUCT ID :100 "/><br/>
        <Base imgsrc={c6} title="MRP : Rs 347" texxt="PRODUCT ID :100"/> <br/>
        </div>
        <div className="d-block w-100" style={{marginLeft:"100px"}}>
        <Base imgsrc={c7} title="MRP : Rs 316  " texxt="PRODUCT ID :100 "/> <br/>
        <Base imgsrc={c8} title="MRP : Rs 365 " texxt="PRODUCT ID :100  "/><br/>
        <Base imgsrc={c9} title="MRP : Rs 275" texxt="PRODUCT ID :100"/> <br/>
        </div>


    </div>
    
    </div>
};

export default Color;