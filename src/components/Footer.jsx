import {Link} from "react-router-dom";
import {Upcurve} from './index.js'

const Footer = () => {
  return(
      <>
          <footer className='  dvhcontainer--pinkbg is-position-relative py-6'>
              <Upcurve height='30%' top='0%'/>
              <div className='columns m-0 mx-auto is-multiline  container'>

                  <div className='column is-12 has-text-centered'>
                      <img src="/asset/images/logo-red.webp"   alt="" style={{width:'9rem'}}/>

                  </div>

                  <div className='column is-4'>
                      <p className='has-text-weight-bold my-5 is-size-4 is-size-5-mobile has-text-centered '>

                          مجموعه فروشگاهی

                          {' '}
                          <strong className='clronetext'>

                              انار
                          </strong>
                          {' '}

                          مارکت
                      </p>

                      <p className='has-text-justified is-size-6'>

                          سوپرمارکت ما جاییه که خرید کردن هم آسونه و هم لذت‌بخش! با اپلیکیشن  می‌تونید هر چیزی که نیاز دارید، از مواد غذایی تازه گرفته تا لوازم بهداشتی، فقط با چند کلیک سفارش بدید. تازه، اگه با اپلیکیشن ما خرید کنید، تخفیف‌های ویژه‌ای هم براتون داریم!
                      </p>

                  </div>


                  <div className='column is-4 has-text-centered'>
                      <p className='has-text-weight-bold  is-size-4 my-5  '>

                          دسترسی سریع
                      </p>

                      <div className='is-flex is-flex-direction-column is-align-items-center '>

                          <Link to='/' className="has-text-black my-3 anjoman ">
                              خانه
                          </Link>


                          <Link to='/about/' className="has-text-black my-3 anjoman ">
                              درباره ما
                          </Link>




                      </div>


                  </div>


                  <div className='column is-4 has-text-centered'>
                      <p className='has-text-weight-bold  is-size-4 my-5  '>

                         مجوز ها
                      </p>

                      <div className='is-flex  is-align-items-center is-justify-content-space-around'>


                          <img src="/asset/images/temp2.jpg" className='logo' alt=""/>
                          <img src="/asset/images/temp2.jpg" className='logo' alt=""/>


                      </div>


                  </div>

              </div>

          </footer>


      </>
  )
}
export default Footer;