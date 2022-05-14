import React, { Grid } from 'react'
import Slider from "react-slick";
import './Detailscarouselstyle/Detailscarousel.css'


function Detailscarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div className='dots'>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "30px",
                    color: "blue",
                    border: "1px blue solid"
                }}
            >
                {i + 1}
            </div>
        )
    }
    return (
        <div>
            
            <div style={{ width: '55%' }}>
                <Slider {...settings}>
                    <div>
                        <img alt='jj' src="/2.jpg" style={{ height: '550px' }} />
                    </div>
                    <div>
                        <img alt='jj' src="/2.jpg" style={{ height: '550px', }} />
                    </div>
                    <div>
                        <img alt='jj' src="/2.jpg" style={{ height: '550px', }} />
                    </div>
                    <div>
                        <img alt='jj' src="/2.jpg" style={{ height: '550px', }} />
                    </div>
                </Slider>
            </div >
        </div>
    )
}

export default Detailscarousel