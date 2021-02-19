import React, {useState} from 'react';
import { SliderData } from './SliderData';
import {ArrowLeft} from 'react-bootstrap-icons';
import {ArrowRight} from 'react-bootstrap-icons';





const ImageSlider = ( slides) =>{

    const [current , setCurrent] = useState(0);
    const length = slides.length;

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent ( current === length-1 ? 0 : current + 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div>
            <br/><br/>
        <div className="sliders"  width="25%">
        <ArrowLeft className="left-arrow"  onClick = {nextSlide} />
        
        {SliderData.map((slide,index) => {
            return (
                <div className = {index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <img src ={slide.image} alt="not found" className="image"/>

                    )}

                </div>
            );
        })}
        <ArrowRight className="right-arrow" onClick = {prevSlide}/>
        </div>
        </div>

    )
};

export default ImageSlider;
