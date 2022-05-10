import React from 'react'
import './Banner.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from '@mui/material'

function Banner() {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false
    };
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Slider {...settings}>
                        <div className='banner1'>

                        </div>
                        <div className='banner2'>

                        </div>
                        <div className='banner3'>

                        </div>
                        <div className='banner4'>

                        </div>
                    </Slider>
                </Grid>
            </Grid>
            <hr />
        </div>
    )
}

export default Banner