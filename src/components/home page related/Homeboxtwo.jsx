import {CategoryCard,Downcurve} from '../index.js'



const Homeboxtwo = () => {
  return(
      <>
          <section className='dvhcontainer dvhcontainer--pinkbg dvhcontainer--66   is-position-relative' >

              <Downcurve height='50%' top='90%'/>



              <div className='columns is-flex  container mx-auto m-0 p-3  is-multiline is-align-content-start '>
                  <div className='column is-12-desktop is-12-mobile mb-3'>
                      <h2 className='has-text-centered is-size-2 is is-size-5-mobile has-text-weight-bold'>
                        یک اپلیکیشن برای تمامی نیازهای سوپرمارکتی
                      </h2>


                  </div>

                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>







              </div>


          </section>


      </>
  )
}
export default Homeboxtwo;