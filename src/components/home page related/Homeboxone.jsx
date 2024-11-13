import { Slide} from "@mui/material";
import {ArrowBackIosNew} from '@mui/icons-material'
import { useState} from 'react'
import * as React from 'react';
import AlertDialogSlide from '../Dialog.jsx'
import {Downcurve} from '../index.js'

const Homeboxone = () => {


    const [open,setOpen] = useState(false)
    const handleClose = () => {
      setOpen(false)

    }
    const handleClickOpen = () => {
        setOpen(true);
    };


    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });



    return (
        <>
            <section className='dvhcontainer dvhcontainer--redbg  is-position-relative  ' >
                <div className='blank textbgblurmobile '/>
                <Downcurve top='50%' height='100%'/>


                <div className='columns p-2  is-multiline container mx-auto   is-flex m-0 h100  is-align-content-center  '>


                    <div className='column py-5  is-12-desktop is-12-mobile  home-topbox-container is-position-relative' >





                        <svg
                            className='is-position-absolute is-hidden-mobile'
                            xmlns="http://www.w3.org/2000/svg"
                            width={231}
                            height={75}
                            viewBox="0 0 231 75"
                            fill="none"
                            style={{
                                left:'50%',
                                bottom:'0%',

                                float: "right",
                                marginBottom: "-100px",
                                position: "relative",
                                zIndex: 9,
                                marginTop: 20,
                                marginRight: 30,

                                margin: "auto",
                                width: "unset",
                                textAlign: "left",


                                transform: "rotate( 180deg ) translateX(50%)",
                            }}

                        >
                            <path
                                clipRule="evenodd"
                                d="M0 0C31.5006 0.949537 50.52 17.872 56.1955 26.4544L55.986 25.8011L82.4924 58.631C99.3032 79.4521 131.038 79.4521 147.849 58.6309L174.356 25.8011L174.146 26.4544C179.822 17.872 198.844 0.949537 230.349 0H0Z"
                                fill="#FCFCFC"
                                fillRule=""
                                style={{
                                    fill: "#fff",
                                }}
                            />
                        </svg>

                        <div className='columns  m-0   h100'>

                            <div className='column is-6-desktop is-12-mobile is-flex is-flex-direction-column is-align-items-start is-justify-content-space-evenly'>
                                <h1 className='is-size-1-desktop px-5 is is-size-5-mobile clrseventext has-text-centered'>


                                    <strong className='clrseventext '>
                                        انارمارکت

                                    </strong>


                                    ،

                                    تجربه سریع و آسان سفارش محصولات سوپرمارکت

                                </h1>


                                <p className='has-text-white mt-3 is-size-5-desktop is-size-6-mobile has-text-justified px-5'>
                                    سوپرمارکت ما جاییه که خرید کردن هم آسونه و هم لذت‌بخش! با اپلیکیشن می‌تونید هر چیزی که نیاز دارید، از مواد غذایی تازه گرفته تا لوازم بهداشتی، فقط با چند لمس سفارش بدید.
                                </p>


                                <button className='button is-size-5 p-3 is-hidden-mobile mr-5' >
                                    ورود به وب اپلیکیشن
                                    <ArrowBackIosNew className='mr-2'/>
                                </button>


                            </div>

                            <div className='column is-6-desktop is-12-mobile has-text-centered'>
                                <img src="/asset/images/onephone.png" alt=""  width='66%' className='imgwobble' />
                            </div>



                            {/*slide up*/}
                            <div className='column is-12-mobile is-hidden-desktop   has-text-centered  '>
                                <AlertDialogSlide/>




                            </div>
                            {/*slide up*/}

                        </div>


                    </div>


                    <div className='column is-12 is-flex is-justify-content-space-between mt-6 is-hidden-mobile'>
                        <div>
                            <img className=' download-logos '
                                 src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/bazaar.png"
                                 alt=""/>
                        </div>

                        <div>
                            <img className=' download-logos'
                                 src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/direct-download-badge.png"
                                 alt=""/>
                        </div>

                        <div>
                            <img className=' download-logos'
                                 src="https://web-cdn.snapp.ir/snappir-marketing/app/myketmarket.png" alt=""/>
                        </div>
                        <div>
                            <img className=' download-logos'
                                 src="https://web-cdn.snapp.ir/snappir-marketing/app/myketmarket.png" alt=""/>
                        </div>
                        <div>
                            <img className=' download-logos'
                                 src="https://web-cdn.snapp.ir/snappir-marketing/app/myketmarket.png" alt=""/>
                        </div>

                    </div>















                </div>


            </section>


        </>
    )
}
export default Homeboxone