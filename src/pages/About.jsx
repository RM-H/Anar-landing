import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Chip, Paper} from "@mui/material";
import {Instagram,WhatsApp,Telegram,Phone} from '@mui/icons-material'
import {useEffect} from "react";

const About = () => {


    useEffect(() => {
        window.scrollTo({top:0 , behavior:'smooth'})
    }, []);
    return (
        <>
            <section className='dvhcontainer '>
                <div className='blank'/>
                <div className='columns container mx-auto m-0 is-multiline m-0'>


                    <div className='column is-12'>
                        <h1 className='is-size-1-desktop is-size-4-mobile'>
                            درباره
                            مجموعه فروشگاهی
                            {' '}
                            <strong className='clronetext'>

                                انار
                            </strong>
                            {' '}
                            مارکت
                        </h1>

                    </div>

                    <div className='column is-12 px-5'>
                        <article className='is-size-5 has-text-justified'>
                            سوپرمارکت ما با هدف تأمین نیازهای روزمره مشتریان با بالاترین استانداردهای کیفیت، همواره در تلاش است تا تجربه‌ای مطمئن و راحت از خرید را ارائه دهد. این مجموعه با مجموعه‌ای کامل از کالاهای اساسی، شامل مواد غذایی تازه، محصولات بهداشتی، و لوازم خانگی، به عنوان یکی از معتبرترین مراکز خرید شناخته می‌شود. تیم حرفه‌ای ما متعهد به ارائه بهترین خدمات به مشتریان است، از جمله تضمین کیفیت و تازگی کالاها، قیمت‌های رقابتی، و ارائه تخفیف‌های ویژه به مشتریان وفادار.

                            علاوه بر این، ما با بهره‌گیری از یک اپلیکیشن پیشرفته خرید آنلاین، تلاش کرده‌ایم فرآیند خرید را بیش از پیش آسان کنیم. مشتریان می‌توانند از طریق این اپلیکیشن محصولات مورد نیاز خود را به‌راحتی و با چند کلیک سفارش دهند و از تخفیف‌های انحصاری بهره‌مند شوند. انارمارکت  به ارائه خدمات تحویل سریع و دقیق شهرت دارد و همواره در تلاش است تا سطح رضایت مشتریان را در بالاترین حد ممکن نگه دارد.

                        </article>

                        <h2 className='is-size-1 is-size-3-mobile mt-6'>
                            اطلاعات تماس
                        </h2>




                        <div className='is-flex is-justify-content-space-around mb-5 is-flex-wrap-wrap ' style={{direction:'ltr'}}>

                            <Chip icon={<Instagram />} label="123456789" color='secondary' sx={{p:2 , m:1}} />
                            <Chip icon={<Phone />} label="123456789" color='secondary' sx={{p:2 , m:1}} />
                            <Chip icon={<Phone />} label="123456789" color='secondary' sx={{p:2 , m:1}} />
                            <Chip icon={<WhatsApp />} label="123456789" color='secondary' sx={{p:2 , m:1}} />
                            <Chip icon={<Telegram />} label="123456789" color='secondary' sx={{p:2 , m:1}} />





                        </div>


                        <Paper elevation={14}>
                            <MapContainer center={[37.5180, 45.0533]} zoom={16} className='mapcontainer'>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution="&copy; OpenStreetMap contributors"
                                />
                                <Marker position={[37.5180, 45.0533]}>
                                    <Popup>جنب خیابان حداد، انار مارکت</Popup>
                                </Marker>
                            </MapContainer>
                        </Paper>


                    </div>

                </div>

                <div className='blank'/>

            </section>


        </>
    )
}
export default About;