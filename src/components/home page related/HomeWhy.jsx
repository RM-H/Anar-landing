import {ArrowBackIosNew} from "@mui/icons-material";
import * as React from "react";


const HomeWhy = () => {
  return(
      <>
          <section className='dvhcontainer dvhcontainer--66 p-5 '>

              <div className='columns container mx-auto m-0 p-3  is-multiline is-align-content-center '>
                  <div className='column is-6-desktop is-12-mobile  is-flex is-flex-direction-column is-align-items-start is-justify-content-space-around'>

                      <h3 className='clrfivetext is-size-3 is-size-5-mobile  has-text-weight-bold'>
                          چرا انارمارکت ؟!
                      </h3>

                      <p className='is-size-6 has-text-justified my-5'>
                          سوپرمارکت ما جاییه که خرید کردن هم آسونه و هم لذت‌بخش! با اپلیکیشن می‌تونید هر چیزی که نیاز دارید، از مواد غذایی تازه گرفته تا لوازم بهداشتی، فقط با چند کلیک سفارش بدید. تازه، اگه با اپلیکیشن ما خرید کنید، تخفیف‌های ویژه‌ای هم براتون داریم!
                      </p>

                      <button className='button clrfivebg has-text-white borderradtwo'>
                          درباره انارمارکت
                          <ArrowBackIosNew className='mr-2'/>
                      </button>

                  </div>


                  <div className='column is-6-desktop is-12-mobile p-3 '>
                      <video className='w100 borderradtwo' autoPlay loop  src="/asset/videos/demo.mp4" style={{backgroundColor:'black'}}></video>

                  </div>




              </div>


          </section>


      </>
)
}
export default HomeWhy;