import React from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import c1 from './c1.jpg';
import c2 from './c2.jpg';
import c3 from './c3.jpg';




class BootstrapCarouselComponent extends React.Component {

    render() {
        return (
            <div>
                <div className='container-fluid' style={{marginTop:"50px",borderRadius:"20px" , boxShadow:"0px, 0px,15px black" }}>
                    <div className="row">
                        <div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={c1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className="text-info">First slide label</h3>
                                        <p className="text-info">product 1</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={c2}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3 className="text-info">Second slide label</h3>
                                        <p className="text-info">product 2</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={c3}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3> className="text-info"Third slide label</h3>
                                        <p className="text-info">product 3</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default BootstrapCarouselComponent;