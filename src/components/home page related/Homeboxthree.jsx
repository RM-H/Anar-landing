import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ArrowDownward} from "@mui/icons-material";
import {Upcurve ,Downcurve} from "../index.js";


const Homeboxthree = () => {
  return(
      <>
          <section className='dvhcontainer dvhcontainer--88 dvhcontainer--redbg   is-position-relative'>
              <Upcurve height='20%' top='-5%'/>


              <div className='columns  p-5 is-multiline container is-align-content-center '>

                  <div className='column is-12 is-12-mobile'>
                      <h3 className='has-text-centered is-size-3 is-size-5-mobile has-text-white has-text-weight-bold my-3 '>
                          پرسش های متداول
                      </h3>

                  </div>

                  <div className='column px-0 is-6 px-3'>
                      <Accordion className='borderradtwo py-4'>
                          <AccordionSummary
                              expandIcon={<ArrowDownward className='clrsixtext has-background-grey has-text-white borderradone'/>}
                              aria-controls="panel1a-content"

                          >
                              <Typography
                                  className=' is-size-6-mobile is-size-6  '>
                                  چگونه میتوانم در اپلیکیشن
                                  {' '}
                                  <strong className='clronetext'>
                                      انار
                                  </strong>
                                  مارکت ثبت نام کنم ؟
                              </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                              <Typography component='article' className='yekan is-size-6'>
                                  کافیست اپلیکیشن انار مارکت رادانلود یا اجرا کنید و با استفاده از شماره تلفن در آن ثبت
                                  نام کنید.
                              </Typography>
                          </AccordionDetails>
                      </Accordion>


                  </div>

                  <div className='column px-0 is-6 px-3'>
                      <Accordion className='borderradtwo py-4'>
                          <AccordionSummary
                              expandIcon={<ArrowDownward className='clrsixtext has-background-grey has-text-white borderradone'/>}
                              aria-controls="panel1a-content"

                          >
                              <Typography
                                  className=' is-size-6-mobile is-size-6  '>
                                  شیوه های ارسال سفارش
                                  {' '}
                                  <strong className='clronetext'>
                                      انار
                                  </strong>
                                  مارکت چیست ؟
                              </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                              <Typography component='article' className='yekan is-size-6'>
                                  پس از ثبت سفارش خود میتوانید سفارش خود را از طریق پیک یا به صورت حضوری دریافت کنید.
                              </Typography>
                          </AccordionDetails>
                      </Accordion>


                  </div>


                  <div className='column px-0 is-6 px-3'>
                      <Accordion className='borderradtwo py-4'>
                          <AccordionSummary
                              expandIcon={<ArrowDownward className='clrsixtext has-background-grey has-text-white borderradone'/>}
                              aria-controls="panel1a-content"

                          >
                              <Typography
                                  className=' is-size-6-mobile is-size-6  '>
                                  پرداخت سفارشات چگونه است ؟
                              </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                              <Typography component='article' className='yekan is-size-6'>
                                  با استفاده از اپلیکیشن انار مارکت میتوانید هزینه سفارشات خود را به صورت آنلاین پرداخت
                                  کنید.
                              </Typography>
                          </AccordionDetails>
                      </Accordion>


                  </div>

                  <div className='column px-0 is-6 px-3'>
                      <Accordion className='borderradtwo py-4'>
                          <AccordionSummary
                              expandIcon={<ArrowDownward className='clrsixtext has-background-grey has-text-white borderradone'/>}
                              aria-controls="panel1a-content"

                          >
                              <Typography
                                  className=' is-size-6-mobile is-size-6  '>
                                  آیا امکان کنسل کردن سفارشات وجود دارد ؟
                              </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                              <Typography component='article' className='yekan is-size-6'>
                                  نمیدانم !
                              </Typography>
                          </AccordionDetails>
                      </Accordion>


                  </div>


                  <div className='column px-0 is-6 px-3'>
                      <Accordion className='borderradtwo py-4'>
                          <AccordionSummary
                              expandIcon={<ArrowDownward className='clrsixtext has-background-grey has-text-white borderradone'/>}
                              aria-controls="panel1a-content"

                          >
                              <Typography
                                  className=' is-size-6-mobile is-size-6  '>
                                  آیا میتوانم امروز خرید کنم و فردا آنرا تحویل بگیرم ؟
                              </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                              <Typography component='article' className='yekan is-size-6'>
                                  پس از قبت سفارش خود میتوانید بازه تحویل سفارش خود را انتخاب کنید و سفارش خود را در روز
                                  ها یا ساعات آتی دریافت کنید.
                              </Typography>
                          </AccordionDetails>
                      </Accordion>


                  </div>
                  <div className='column px-0 is-6 px-3'>
                      <Accordion className='borderradtwo py-4'>
                          <AccordionSummary
                              expandIcon={<ArrowDownward className='clrsixtext has-background-grey has-text-white borderradone'/>}
                              aria-controls="panel1a-content"

                          >
                              <Typography
                                  className=' is-size-6-mobile is-size-6  '>
                                  آیا میتوانم امروز خرید کنم و فردا آنرا تحویل بگیرم ؟
                              </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                              <Typography component='article' className='yekan is-size-6'>
                                  پس از قبت سفارش خود میتوانید بازه تحویل سفارش خود را انتخاب کنید و سفارش خود را در روز
                                  ها یا ساعات آتی دریافت کنید.
                              </Typography>
                          </AccordionDetails>
                      </Accordion>


                  </div>


              </div>


          </section>


      </>
  )
}
export default Homeboxthree;