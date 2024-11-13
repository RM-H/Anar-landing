import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const VerticalSlider = () => {
    const settings = {
        vertical: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        draggable: false,

    };

    return (
        <div className='slidercontainer' >
            <Slider {...settings}>
                <div className='sliderinner'>
                    <span className='is-size-5 has-text-centered'>
                        کالاهای اساسی و خواربار
                    </span>

                    <img src="/asset/icons/goods.png"  alt="items"/>


                </div>

                <div className='sliderinner'>
                    <span className='is-size-5 has-text-centered'>
                        مواد پروتئینی
                    </span>

                    <img src="/asset/icons/protein.png"  alt="people"/>


                </div>

                <div className='sliderinner'>
                    <span className='is-size-5 has-text-centered'>
                         میوه و سبزیجات
                    </span>

                    <img src="/asset/icons/veg.png"  alt="sale"/>


                </div>

                <div className='sliderinner'>
                    <span className='is-size-5 has-text-centered'>
                      کنسرو و غذای آماده
                    </span>

                    <img src="/asset/icons/can.png"  alt="sale"/>


                </div>

                <div className='sliderinner'>
                    <span className='is-size-5 has-text-centered'>
                     بهداشتی و آرایشی
                    </span>

                    <img src="/asset/icons/hygene.png"  alt="sale"/>


                </div>
                <div className='sliderinner'>
                    <span className='is-size-5 has-text-centered'>
                     تنقلات
                    </span>

                    <img src="/asset/icons/snack.png"  alt="sale"/>


                </div>

                <div className='sliderinner'>
                    <span className='is-size-5 has-text-centered'>
                     لبنیات
                    </span>

                    <img src="/asset/icons/dairy.png"  alt="sale"/>


                </div>

            </Slider>
        </div>
    );
};

export default VerticalSlider;
